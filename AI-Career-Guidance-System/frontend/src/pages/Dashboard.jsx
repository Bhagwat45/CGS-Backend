import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "./Sidebar";
import StatCard from "../components/StatCard";
import RecommendationCard from "../components/RecommendationCard";
import RoadmapCard from "../components/RoadmapCard";
import NotificationCard from "../components/NotificationCard";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="stats-grid">
        <StatCard title="Assessment Score" value="85%" icon="brain" />
        <StatCard title="Skills Matched" value="12" icon="code" />
        <StatCard title="Jobs Applied" value="5" icon="briefcase" />
        <StatCard title="Interviews" value="2" icon="mic" />
      </div>
      
      <div className="dashboard-container">
        <div className="main-content">
          <div className="card welcome-card">
            <h1>Welcome Back, Shreya!</h1>
            <p>Your AI Career Assistant has prepared new personalized recommendations based on your recent skill assessments.</p>
            <button className="primary-btn">View Full Report</button>
            <button className="ai-btn" style={{ marginLeft: "10px" }}>Continue AI Chat</button>
          </div>

          <div className="card">
            <h2>Your Learning Roadmap</h2>
            <RoadmapCard title="Advanced React Patterns" progress="60%" />
            <RoadmapCard title="Data Structures in Python" progress="30%" />
            <RoadmapCard title="System Design Basics" progress="10%" />
          </div>
        </div>
        
        <div className="right-section">
          <div className="card">
            <h3>AI Recommendations</h3>
            <RecommendationCard career="Software Engineer at Google" match="95" skills={["React", "Node", "Python"]} />
            <RecommendationCard career="Mastering Next.js" match="90" skills={["Next.js", "Frontend"]} />
          </div>
          
          <div className="card">
            <h3>Recent Notifications</h3>
            <NotificationCard title="Resume Analysis Complete" time="2 hours ago" />
            <NotificationCard title="New Mock Interview available" time="5 hours ago" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;