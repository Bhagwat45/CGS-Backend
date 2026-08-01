import React from "react";
import { TrendingUp, BookOpen, Target, Award } from "lucide-react";
import StatCard from "../components/StatCard";
import RoadmapCard from "../components/RoadmapCard";
import "../styles/dashboard.css"; // Reuse dashboard styles for layout

const Progress = () => {
  return (
    <div className="dashboard-container" style={{ padding: 0 }}>
      <div className="left-section">
        <div className="card welcome-card" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
          <h1>Your Learning Progress 📈</h1>
          <p>You are doing great! Keep up the momentum to reach your goal of becoming a Full Stack Developer.</p>
        </div>

        <div className="stats-grid">
          <StatCard title="Overall Progress" value="68%" icon={<TrendingUp />} color="#10b981" />
          <StatCard title="Courses Completed" value="12" icon={<BookOpen />} color="#3b82f6" />
          <StatCard title="Current Goals" value="3" icon={<Target />} color="#f59e0b" />
          <StatCard title="Certificates" value="5" icon={<Award />} color="#8b5cf6" />
        </div>

        <div className="card">
          <h2>Skill Mastery</h2>
          <div style={{ marginTop: "20px" }}>
            <RoadmapCard title="React & Frontend" progress={85} />
            <RoadmapCard title="Node.js & Backend" progress={60} />
            <RoadmapCard title="Database Management" progress={75} />
            <RoadmapCard title="System Design" progress={30} />
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="card">
          <h3>Recent Activity</h3>
          <div className="task" style={{ borderLeft: "4px solid #10b981" }}>
            <div>
              <p style={{ fontWeight: "bold", margin: 0 }}>Completed Python Quiz</p>
              <span style={{ fontSize: "12px", color: "#666" }}>Today, 10:30 AM</span>
            </div>
          </div>
          <div className="task" style={{ borderLeft: "4px solid #3b82f6" }}>
            <div>
              <p style={{ fontWeight: "bold", margin: 0 }}>Watched: Advanced React Patterns</p>
              <span style={{ fontSize: "12px", color: "#666" }}>Yesterday</span>
            </div>
          </div>
          <div className="task" style={{ borderLeft: "4px solid #f59e0b" }}>
            <div>
              <p style={{ fontWeight: "bold", margin: 0 }}>Uploaded New Resume</p>
              <span style={{ fontSize: "12px", color: "#666" }}>2 Days ago</span>
            </div>
          </div>
        </div>
        
        <div className="card" style={{ textAlign: "center", padding: "30px 20px" }}>
          <div style={{ width: "120px", height: "120px", borderRadius: "50%", border: "8px solid #10b981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
            <h2 style={{ margin: 0, color: "#10b981", fontSize: "32px" }}>68%</h2>
          </div>
          <h3>Path to Senior Dev</h3>
          <p style={{ color: "#666", fontSize: "14px", marginTop: "10px" }}>You are 32% away from completing your personalized learning track!</p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
