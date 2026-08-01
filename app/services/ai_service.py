import os
import random
import logging
from typing import List, Dict, Optional
from app.schemas.chatbot_schema import ChatMessage

logger = logging.getLogger(__name__)

# Try to import OpenAI. If it fails or is not installed, we'll rely on the fallback.
try:
    from openai import OpenAI
    HAS_OPENAI = True
except ImportError:
    HAS_OPENAI = False

def get_ai_client() -> Optional[tuple]:
    """
    Returns a tuple of (client, model_name) or None.
    Checks GROQ_API_KEY first, then OPENAI_API_KEY.
    Reuses OpenAI client SDK pointing to Groq base URL for Groq API.
    """
    if not HAS_OPENAI:
        return None
    
    # 1. Check Groq API
    groq_api_key = os.getenv("GROQ_API_KEY")
    if groq_api_key and "your_groq_api_key" not in groq_api_key.lower() and groq_api_key.strip():
        try:
            client = OpenAI(
                base_url="https://api.groq.com/openai/v1",
                api_key=groq_api_key.strip()
            )
            # Use llama-3.1-8b-instant as the default fast Groq model
            return client, "llama-3.1-8b-instant"
        except Exception as e:
            logger.error(f"Failed to initialize Groq client: {e}")

    # 2. Check OpenAI API
    openai_api_key = os.getenv("OPENAI_API_KEY")
    if openai_api_key and "your_openai_api_key" not in openai_api_key.lower() and openai_api_key.strip():
        try:
            client = OpenAI(api_key=openai_api_key.strip())
            return client, "gpt-3.5-turbo"
        except Exception as e:
            logger.error(f"Failed to initialize OpenAI client: {e}")
            
    return None

# Local, keyword-matching fallback career mentor responses
FALLBACK_RESPONSES = {
    "greeting": [
        "Hello! I'm your AI Career Guide. I can help you plan your career roadmap, prepare for interviews, optimize your resume, or recommend skills to learn. What's on your mind today?",
        "Hi there! Ready to take the next step in your professional journey? Ask me about job roles, resume building, interview tips, or specific technologies!",
        "Greetings! I'm here to support your career growth. Let me know what field you are interested in (e.g., Frontend, Backend, Databases, Data Science) or how I can help."
    ],
    "database": [
        "Databases are the foundation of any application! To succeed in database-related roles or backend development, here's what you should focus on:\n\n"
        "1. **Relational Databases (SQL)**: Learn PostgreSQL or MySQL. Master writing complex JOIN queries, subqueries, and understanding indexes.\n"
        "2. **NoSQL Databases**: Learn MongoDB or Redis. MongoDB is document-based, while Redis is great for caching.\n"
        "3. **Key Concepts**: Focus on ACID properties, normalization, database schema design, and query optimization.\n\n"
        "Would you like me to recommend a learning roadmap for database engineering?",
        
        "A database is an organized collection of structured information or data. For developers, understanding databases is crucial. I recommend starting with:\n\n"
        "- **PostgreSQL**: Industry standard for relational databases.\n"
        "- **MongoDB**: Excellent for document-based, scalable storage (which is what this app uses!).\n"
        "- **Query Optimization**: Database indexing and query optimization are highly sought-after skills in backend developer roles."
    ],
    "python": [
        "Python is an incredibly versatile language! Depending on your career interests, you can take a few paths:\n\n"
        "1. **Web Development**: Learn FastAPI (which runs this backend!) or Django. Focus on RESTful APIs and ORMs.\n"
        "2. **Data Science & ML**: Study libraries like Pandas, NumPy, Scikit-Learn, and TensorFlow.\n"
        "3. **Automation/Scripting**: Learn BeautifulSoup and Selenium for scraping/automation.\n\n"
        "Which path sounds most interesting to you?",
        
        "To become a professional Python developer, I suggest focusing on building full-stack applications with FastAPI/Django, mastering OOP (Object-Oriented Programming) concepts, writing unit tests with `pytest`, and understanding asynchronous programming (`async/await`)."
    ],
    "frontend": [
        "Frontend engineering is about creating intuitive, beautiful user interfaces! Focus on these core areas:\n\n"
        "1. **HTML & CSS**: Master layout techniques (Flexbox, CSS Grid) and responsiveness.\n"
        "2. **Modern JavaScript**: Learn ES6+ syntax, asynchronous JS, and DOM manipulation.\n"
        "3. **React/Next.js**: Learn state management, components lifecycle, hooks (useState, useEffect), and routing.\n"
        "4. **Styling Frameworks**: Build familiarity with CSS-in-JS, Tailwind CSS, or component libraries.\n\n"
        "What frontend tech stack are you currently using?",
        
        "For frontend, the current market highly values engineers who know React, Next.js, and TypeScript. I recommend building at least two solid portfolio projects showcasing API integration, state management (Redux/Zustand), and premium styling/animations."
    ],
    "backend": [
        "Backend development focuses on business logic, databases, and APIs. Here's a learning pathway:\n\n"
        "1. **Languages**: Master Python, JavaScript/Node.js, Java, or Go.\n"
        "2. **Frameworks**: FastAPI/Flask (Python), Express (Node.js), or Spring Boot (Java).\n"
        "3. **APIs**: Understand RESTful principles, HTTP status codes, middleware, and authentication (JWT).\n"
        "4. **Architecture**: Focus on system design, database indexing, and caching (Redis).\n\n"
        "Let me know if you want tips on building a mock backend project!"
    ],
    "resume": [
        "Your resume is your ticket to an interview! Keep these tips in mind:\n\n"
        "1. **Use Action Verbs**: Start bullet points with words like 'Developed', 'Optimized', 'Designed', or 'Led'.\n"
        "2. **Quantify Results**: Instead of saying 'Improved performance', say 'Optimized database queries, reducing API response times by 30%'.\n"
        "3. **Tailor It**: Align your skills and experience with the job description you are applying for.\n"
        "4. **Format**: Keep it to a clean 1-page design, using standard PDF format.\n\n"
        "Would you like me to review an example layout or analyze your current projects?",
        
        "A strong software engineering resume should highlight: your technical stack, key projects (with Github links), work experience with quantifiable impact, and education. Keep it simple and readable for ATS (Applicant Tracking Systems)."
    ],
    "interview": [
        "Interview prep is all about strategy. Break it down into three parts:\n\n"
        "1. **Coding/DSA**: Practice arrays, strings, hash maps, trees, and dynamic programming on LeetCode/HackerRank.\n"
        "2. **System Design**: Study load balancers, caching, databases, scaling, and system architectures.\n"
        "3. **Behavioral**: Use the STAR method (Situation, Task, Action, Result) to answer questions like 'Tell me about a time you faced a technical challenge'.\n\n"
        "Would you like to run a mock interview right now?",
        
        "To ace your technical interviews: focus on thinking out loud when writing code, ask clarifying questions before writing anything, and make sure to test your code with edge cases. Practice makes perfect!"
    ],
    "game": [
        "Game development is an exciting field! To get started as a game developer, here's what you should focus on:\n\n"
        "1. **Game Engines**: Learn **Unity** (uses C#) or **Unreal Engine** (uses C++). Unity is excellent for 2D/3D indie games and mobile, while Unreal is the industry standard for high-end AAA games.\n"
        "2. **Programming Languages**: Master **C#** (for Unity) or **C++** (for Unreal/custom engines).\n"
        "3. **Key Concepts**: Study 3D math (vectors, dot/cross products), physics, collision detection, game loops, and computer graphics basics.\n"
        "4. **Start Small**: Build simple clones (like Pong, Flappy Bird, or a basic platformer) to understand gameplay state and logic.\n\n"
        "Do you want to focus on 2D or 3D game development?",
        
        "To break into game development: build a portfolio of small playable games on platforms like itch.io. Focus on learning a primary engine like Unity or Unreal. Having clean, optimized code and demonstrating a solid grasp of object-oriented programming in C# or C++ will make you stand out!"
    ],
    "jee": [
        "Preparing for JEE (Joint Entrance Examination) requires a highly structured study plan. Here are some key tips:\n\n"
        "1. **Strengthen Fundamentals**: Focus heavily on core concepts in Physics, Chemistry, and Mathematics. NCERT is your bible for concepts.\n"
        "2. **Time Management**: Divide your day into dedicated slots for study, revision, and practice. Stick to a consistent schedule.\n"
        "3. **Mock Tests & Past Papers**: Solve previous years' papers and take timed mock tests. This builds speed, accuracy, and examination temperament.\n"
        "4. **Consistent Revision**: Make short notes of formulas and key reactions to revise weekly.\n\n"
        "Which subject do you find most challenging right now: Physics, Chemistry, or Maths?",
        
        "JEE preparation is a marathon, not a sprint. Keep a positive mindset, maintain physical and mental health, and focus on understanding concepts rather than rote learning. Consistent daily practice is the key to cracking it!"
    ],
    "datascience": [
        "Data Science and AI/ML are highly demanding fields! I recommend this learning path:\n\n"
        "1. **Math Foundations**: Learn linear algebra, calculus, probability, and statistics.\n"
        "2. **Python Libraries**: Master Pandas, NumPy, and Matplotlib/Seaborn for data analysis and visualization.\n"
        "3. **Machine Learning**: Study Scikit-Learn. Learn regression, classification, clustering, and evaluation metrics.\n"
        "4. **Deep Learning & GenAI**: Explore neural networks using PyTorch or TensorFlow, and learn how to use Large Language Model APIs (like Gemini or OpenAI).\n\n"
        "Are you more interested in data analysis or building machine learning models?"
    ],
    "mobile": [
        "Mobile app development is a great career path! You can choose between Native and Cross-Platform paths:\n\n"
        "- **Native iOS**: Learn Swift and SwiftUI.\n"
        "- **Native Android**: Learn Kotlin and Jetpack Compose.\n"
        "- **Cross-Platform**: Learn Flutter (Dart) or React Native (JavaScript/TypeScript). This is very popular for startups as it lets you build for both iOS and Android with one codebase.\n\n"
        "Would you like to build native apps or cross-platform apps?"
    ],
    "devops": [
        "DevOps and Cloud Engineering focus on keeping systems running smoothly and deploying code. Focus on:\n\n"
        "1. **Linux & Scripting**: Learn Linux command line and Bash/Python scripting.\n"
        "2. **Containers**: Master Docker (essential for packaging applications) and Kubernetes (for scaling containers).\n"
        "3. **Cloud Providers**: Learn AWS, Google Cloud, or Azure. Start with basic services like compute, storage, and networking.\n"
        "4. **CI/CD**: Understand automated deployment pipelines using GitHub Actions or Jenkins.\n\n"
        "Are you looking to host your own projects on the cloud?"
    ],
    "default": [
        "I understand. Based on your interests, I recommend focusing on core computer science foundations, building real-world projects, and preparing structured portfolios. Could you tell me more about your current skills and target career role so I can offer specific advice?",
        "That's a great topic. As an AI career advisor, I suggest looking into current market requirements for that skill, building a mini-project to demonstrate proficiency, and networking with professionals in that space on LinkedIn. What specific questions do you have about it?",
        "To give you the best career guidance, could you share a bit more? For example, are you aiming for a Frontend, Backend, Full Stack, Data Science, or Product management role?"
    ]
}

def get_fallback_response(message: str) -> str:
    message_lower = message.lower()
    
    # Simple keyword routing
    if any(greet in message_lower for greet in ["hello", "hi", "hey", "greetings", "yo"]):
        return random.choice(FALLBACK_RESPONSES["greeting"])
    elif any(db in message_lower for db in ["database", "db", "sql", "mongodb", "postgres", "nosql"]):
        return random.choice(FALLBACK_RESPONSES["database"])
    elif any(py in message_lower for py in ["python", "fastapi", "django"]):
        return random.choice(FALLBACK_RESPONSES["python"])
    elif any(fe in message_lower for fe in ["frontend", "react", "html", "css", "javascript", "js", "vue"]):
        return random.choice(FALLBACK_RESPONSES["frontend"])
    elif any(be in message_lower for be in ["backend", "api", "node", "express", "java", "springboot"]):
        return random.choice(FALLBACK_RESPONSES["backend"])
    elif any(res in message_lower for res in ["resume", "cv", "portfolio"]):
        return random.choice(FALLBACK_RESPONSES["resume"])
    elif any(inter in message_lower for inter in ["interview", "leetcode", "dsa", "prepare"]):
        return random.choice(FALLBACK_RESPONSES["interview"])
    elif any(gm in message_lower for gm in ["game", "unity", "unreal", "c#", "c++", "gaming"]):
        return random.choice(FALLBACK_RESPONSES["game"])
    elif any(exam in message_lower for exam in ["jee", "study", "college", "exam", "prep", "test", "school", "exam"]):
        return random.choice(FALLBACK_RESPONSES["jee"])
    elif any(ds in message_lower for ds in ["data science", "machine learning", "ml", "ai", "artificial intelligence", "deep learning"]):
        return random.choice(FALLBACK_RESPONSES["datascience"])
    elif any(mob in message_lower for mob in ["mobile", "android", "ios", "flutter", "react native", "swift", "kotlin"]):
        return random.choice(FALLBACK_RESPONSES["mobile"])
    elif any(dev in message_lower for dev in ["devops", "cloud", "aws", "docker", "kubernetes", "deploy"]):
        return random.choice(FALLBACK_RESPONSES["devops"])
    
    return random.choice(FALLBACK_RESPONSES["default"])

async def get_chatbot_response(message: str, history: List[ChatMessage] = None) -> str:
    """
    Get a chatbot response. Tries Groq first, then OpenAI, and falls back to an intelligent local mock
    if neither is configured or if they fail.
    """
    ai_setup = get_ai_client()
    
    if ai_setup:
        client, model = ai_setup
        try:
            # Build conversation history
            messages = [
                {"role": "system", "content": (
                    "You are a professional, encouraging, and highly knowledgeable AI Career Mentor. "
                    "Your job is to provide outstanding career guidance, programming tips, resume suggestions, "
                    "and tech advice to students and developers. Keep responses clear, helpful, and concise."
                )}
            ]
            
            # Map roles to fit API expectations ("user", "assistant")
            if history:
                for h in history[-10:]:  # Keep last 10 messages for context
                    role = "assistant" if h.role in ["assistant", "bot"] else "user"
                    messages.append({"role": role, "content": h.content})
            
            # Add current message
            messages.append({"role": "user", "content": message})
            
            response = client.chat.completions.create(
                model=model,
                messages=messages,
                max_tokens=500,
                temperature=0.7
            )
            return response.choices[0].message.content
        except Exception as e:
            logger.error(f"AI completion error for model {model} (falling back): {e}")
            # Fall through to local fallback response generator
    
    # Return local rule-based response
    return get_fallback_response(message)
