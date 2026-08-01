import React from "react";
import { Briefcase, Building, Star, ExternalLink } from "lucide-react";
import "../styles/dashboard.css";

const CareerRecommendation = () => {
  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card welcome-card" style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}>
        <h1>Career Recommendations 🎯</h1>
        <p>Based on your recent assessment and skills, our AI has found the best matching roles for you.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
        
        {/* Match 1 */}
        <div className="card" style={{ display: "flex", gap: "20px", alignItems: "center", padding: "25px" }}>
          <div style={{ width: "80px", height: "80px", background: "#fef3c7", color: "#d97706", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Briefcase size={40} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0, color: "#1e293b" }}>Frontend Developer</h2>
              <span style={{ background: "#d1fae5", color: "#059669", padding: "5px 15px", borderRadius: "20px", fontWeight: "bold" }}>95% Match</span>
            </div>
            <p style={{ color: "#64748b", margin: "10px 0" }}>Great fit based on your high proficiency in React and UI/UX design preferences.</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "5px" }}><Building size={16} /> Tech / Product</span>
              <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "5px" }}><Star size={16} /> High Demand</span>
            </div>
          </div>
          <button className="primary-btn" style={{ background: "#f59e0b", color: "white" }}>View Path <ExternalLink size={16} style={{display: "inline", marginLeft: "5px"}}/></button>
        </div>

        {/* Match 2 */}
        <div className="card" style={{ display: "flex", gap: "20px", alignItems: "center", padding: "25px" }}>
          <div style={{ width: "80px", height: "80px", background: "#e0e7ff", color: "#4f46e5", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Briefcase size={40} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ margin: 0, color: "#1e293b" }}>Full Stack Engineer</h2>
              <span style={{ background: "#d1fae5", color: "#059669", padding: "5px 15px", borderRadius: "20px", fontWeight: "bold" }}>82% Match</span>
            </div>
            <p style={{ color: "#64748b", margin: "10px 0" }}>Good match, but requires brushing up on Node.js and system design skills.</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
              <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "5px" }}><Building size={16} /> Startups / Enterprise</span>
              <span style={{ fontSize: "14px", display: "flex", alignItems: "center", gap: "5px" }}><Star size={16} /> Very High Demand</span>
            </div>
          </div>
          <button className="primary-btn" style={{ background: "#f59e0b", color: "white" }}>View Path <ExternalLink size={16} style={{display: "inline", marginLeft: "5px"}}/></button>
        </div>

      </div>
    </div>
  );
};

export default CareerRecommendation;
