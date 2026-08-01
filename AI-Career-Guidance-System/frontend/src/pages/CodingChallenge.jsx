import React from "react";
import { Code, Play, Check } from "lucide-react";
import "../styles/dashboard.css";

const CodingChallenge = () => {
  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card welcome-card" style={{ background: "linear-gradient(135deg, #3b82f6, #1d4ed8)" }}>
        <h1>Coding Challenges 💻</h1>
        <p>Sharpen your algorithmic and problem-solving skills to ace technical interviews.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "25px", marginTop: "20px" }}>
        <div className="left-section">
          <div className="card">
            <h2 style={{ display: "flex", alignItems: "center", gap: "10px" }}><Code color="#3b82f6" /> Daily Challenge</h2>
            <div style={{ background: "#1e293b", color: "#f8fafc", padding: "20px", borderRadius: "10px", marginTop: "15px", fontFamily: "monospace" }}>
              <p style={{ color: "#94a3b8", marginBottom: "15px" }}>// Problem: Two Sum</p>
              <p>Given an array of integers <span style={{ color: "#38bdf8" }}>nums</span> and an integer <span style={{ color: "#38bdf8" }}>target</span>, return indices of the two numbers such that they add up to target.</p>
              <br/>
              <p>Example:</p>
              <p style={{ color: "#a3e635" }}>Input: nums = [2,7,11,15], target = 9</p>
              <p style={{ color: "#a3e635" }}>Output: [0,1]</p>
            </div>
            <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
              <button className="ai-btn" style={{ display: "flex", alignItems: "center", gap: "5px" }}><Play size={18}/> Start Coding</button>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="card">
            <h3>Difficulty Levels</h3>
            <div style={{ marginTop: "15px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#ecfccb", color: "#65a30d", borderRadius: "8px", fontWeight: "bold" }}>
                <span>Easy</span> <span>45 Solved</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#fef3c7", color: "#d97706", borderRadius: "8px", fontWeight: "bold" }}>
                <span>Medium</span> <span>12 Solved</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#fee2e2", color: "#dc2626", borderRadius: "8px", fontWeight: "bold" }}>
                <span>Hard</span> <span>2 Solved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingChallenge;
