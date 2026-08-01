import React from "react";
import { Video, Mic, CheckCircle } from "lucide-react";
import "../styles/dashboard.css";

const MockInterview = () => {
  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card welcome-card" style={{ background: "linear-gradient(135deg, #ef4444, #b91c1c)" }}>
        <h1>AI Mock Interviews 🎤</h1>
        <p>Practice real-world interview questions with our AI and get instant feedback on your tone, confidence, and answers.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "25px", marginTop: "20px" }}>
        
        <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
          <div style={{ width: "80px", height: "80px", background: "#fee2e2", color: "#ef4444", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Mic size={40} />
          </div>
          <h2>Voice Interview</h2>
          <p style={{ color: "#64748b", margin: "15px 0" }}>Practice answering questions via microphone. The AI will analyze your speech patterns and response quality.</p>
          <button className="ai-btn" style={{ background: "#ef4444", marginTop: "10px" }}>Start Voice Session</button>
        </div>

        <div className="card" style={{ textAlign: "center", padding: "40px 20px" }}>
          <div style={{ width: "80px", height: "80px", background: "#f3e8ff", color: "#9333ea", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Video size={40} />
          </div>
          <h2>Video Interview</h2>
          <p style={{ color: "#64748b", margin: "15px 0" }}>Full simulation with camera. Get feedback on body language, eye contact, and facial expressions.</p>
          <button className="ai-btn" style={{ background: "#9333ea", marginTop: "10px" }}>Start Video Session</button>
        </div>

      </div>

      <div className="card" style={{ marginTop: "20px" }}>
        <h3>Previous Interview Feedbacks</h3>
        <div style={{ marginTop: "15px" }}>
          <div style={{ padding: "15px", border: "1px solid #e2e8f0", borderRadius: "10px", marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <h4 style={{ margin: "0 0 5px 0" }}>Frontend Developer - Behavioral</h4>
              <p style={{ margin: 0, color: "#64748b", fontSize: "14px" }}>Score: 8/10 • Confidence: High</p>
            </div>
            <span style={{ color: "#10b981", display: "flex", alignItems: "center", gap: "5px" }}><CheckCircle size={18} /> Reviewed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInterview;
