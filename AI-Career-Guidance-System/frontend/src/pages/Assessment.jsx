import React, { useState } from 'react';
import { CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import "../styles/dashboard.css";

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock Questions Data
  const questions = [
    {
      id: "q1",
      category: "Technical Skills",
      text: "Which programming language do you feel most comfortable with?",
      options: [
        { id: "o1", text: "JavaScript / TypeScript" },
        { id: "o2", text: "Python" },
        { id: "o3", text: "Java / C#" },
        { id: "o4", text: "I am still learning" }
      ]
    },
    {
      id: "q2",
      category: "Work Style",
      text: "What kind of work environment do you prefer?",
      options: [
        { id: "o1", text: "Fast-paced startup (High ownership, fast changes)" },
        { id: "o2", text: "Enterprise (Structured, stable, large scale)" },
        { id: "o3", text: "Freelance / Remote (Independent, flexible)" },
        { id: "o4", text: "Research / Academic (Deep problem solving)" }
      ]
    },
    {
      id: "q3",
      category: "Problem Solving",
      text: "When faced with a complex bug, what is your first step?",
      options: [
        { id: "o1", text: "Read the logs and error traces carefully" },
        { id: "o2", text: "Search online (StackOverflow/Google)" },
        { id: "o3", text: "Ask a senior or teammate for help" },
        { id: "o4", text: "Use a debugger and step through the code" }
      ]
    }
  ];

  const currentQ = questions[currentQuestionIndex];
  const selectedOption = answers[currentQ.id];

  const handleOptionSelect = (optionId) => {
    setAnswers({ ...answers, [currentQ.id]: optionId });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
        <div className="card" style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center", padding: "50px 30px" }}>
          <div style={{ display: "inline-flex", padding: "20px", borderRadius: "50%", background: "#d1fae5", color: "#10b981", marginBottom: "20px" }}>
            <CheckCircle size={60} />
          </div>
          <h2>Assessment Completed!</h2>
          <p style={{ color: "#666", marginTop: "10px", marginBottom: "30px" }}>
            Thank you for completing the career assessment. Our AI has analyzed your responses and updated your career recommendations.
          </p>
          <button className="primary-btn" onClick={() => window.location.href = '/career'}>
            View Career Matches
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card welcome-card" style={{ background: "linear-gradient(135deg, #0ea5e9, #0369a1)" }}>
        <h1>Career Assessment 📝</h1>
        <p>Answer a few questions to help our AI understand your skills and preferences better.</p>
      </div>

      <div className="card" style={{ maxWidth: "800px", margin: "20px auto", padding: "40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#64748b", fontSize: "14px", marginBottom: "20px" }}>
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
          <span style={{ background: "#f1f5f9", padding: "5px 10px", borderRadius: "20px", fontWeight: "bold", color: "#334155" }}>
            {currentQ.category}
          </span>
        </div>

        <h2 style={{ marginBottom: "30px", fontSize: "22px", color: "#1e293b", lineHeight: "1.4" }}>
          {currentQ.text}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px", marginBottom: "40px" }}>
          {currentQ.options.map(option => {
            const isSelected = selectedOption === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                style={{
                  textAlign: "left",
                  padding: "20px",
                  borderRadius: "12px",
                  border: isSelected ? "2px solid #2563eb" : "2px solid #e2e8f0",
                  background: isSelected ? "#eff6ff" : "white",
                  color: isSelected ? "#1d4ed8" : "#334155",
                  fontWeight: isSelected ? "bold" : "normal",
                  cursor: "pointer",
                  fontSize: "16px",
                  transition: "0.2s"
                }}
              >
                {option.text}
              </button>
            );
          })}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e2e8f0", paddingTop: "20px" }}>
          <button 
            onClick={handlePrevious} 
            disabled={currentQuestionIndex === 0}
            style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "white", cursor: currentQuestionIndex === 0 ? "not-allowed" : "pointer", opacity: currentQuestionIndex === 0 ? 0.5 : 1, display: "flex", alignItems: "center", gap: "5px" }}
          >
            <ChevronLeft size={18} /> Previous
          </button>
          
          {currentQuestionIndex === questions.length - 1 ? (
            <button 
              onClick={handleSubmit} 
              disabled={Object.keys(answers).length < questions.length}
              className="ai-btn"
              style={{ opacity: Object.keys(answers).length < questions.length ? 0.5 : 1 }}
            >
              Submit Assessment
            </button>
          ) : (
            <button 
              onClick={handleNext} 
              disabled={!selectedOption}
              className="primary-btn"
              style={{ display: "flex", alignItems: "center", gap: "5px", opacity: !selectedOption ? 0.5 : 1 }}
            >
              Next <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
