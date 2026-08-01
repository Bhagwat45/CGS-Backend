from fastapi import APIRouter, HTTPException
from typing import List
from app.schemas.assessment_schema import QuestionSchema, AssessmentSubmission, AssessmentResult

router = APIRouter(prefix="/assessment", tags=["Assessment"])

# Mock database of questions
QUESTIONS_DB = [
    {
        "id": "q1",
        "text": "What type of tasks do you enjoy the most?",
        "category": "Interests",
        "options": [
            {"id": "o1", "text": "Solving complex logical problems"},
            {"id": "o2", "text": "Designing visually appealing interfaces"},
            {"id": "o3", "text": "Analyzing data to find trends"}
        ]
    },
    {
        "id": "q2",
        "text": "Which environment do you prefer working in?",
        "category": "Work Style",
        "options": [
            {"id": "o1", "text": "Fast-paced startup"},
            {"id": "o2", "text": "Structured corporate environment"},
            {"id": "o3", "text": "Independent freelance"}
        ]
    }
]

@router.get("/questions", response_model=List[QuestionSchema])
async def get_questions():
    """Fetches a list of assessment questions."""
    return QUESTIONS_DB

@router.post("/submit", response_model=AssessmentResult)
async def submit_assessment(submission: AssessmentSubmission):
    """
    Submits user answers and calculates recommended careers.
    Currently using a simple mock scoring system.
    """
    # In a real app, you would pass these answers to an AI service (like OpenAI) 
    # to evaluate the best career fit based on the responses.
    
    # Mock analysis logic:
    if not submission.answers:
        raise HTTPException(status_code=400, detail="No answers provided")

    # Mock response
    result = AssessmentResult(
        score=85,
        top_careers=["Software Engineer", "Data Analyst", "UI/UX Designer"],
        feedback="Based on your strong logical thinking and problem-solving preference, engineering and data roles suit you well."
    )
    
    return result
