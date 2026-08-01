import React from "react";
import { User, Bell, Lock, Palette } from "lucide-react";
import "../styles/dashboard.css";

const Settings = () => {
  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card">
        <h1>Settings ⚙️</h1>
        <p style={{ color: "#64748b" }}>Manage your account preferences and configurations.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "25px", marginTop: "20px" }}>
        
        {/* Settings Navigation */}
        <div className="card" style={{ padding: "10px" }}>
          <div style={{ padding: "15px", background: "#f1f5f9", borderRadius: "10px", fontWeight: "bold", color: "#2563eb", marginBottom: "5px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <User size={18} /> Account
          </div>
          <div style={{ padding: "15px", borderRadius: "10px", color: "#64748b", marginBottom: "5px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <Bell size={18} /> Notifications
          </div>
          <div style={{ padding: "15px", borderRadius: "10px", color: "#64748b", marginBottom: "5px", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <Lock size={18} /> Privacy
          </div>
          <div style={{ padding: "15px", borderRadius: "10px", color: "#64748b", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}>
            <Palette size={18} /> Appearance
          </div>
        </div>

        {/* Settings Content */}
        <div className="card">
          <h2 style={{ marginBottom: "20px" }}>Account Settings</h2>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#334155" }}>Full Name</label>
            <input type="text" defaultValue="Shreya Kapse" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
          </div>
          
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#334155" }}>Email Address</label>
            <input type="email" defaultValue="shreya@example.com" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
          </div>

          <div style={{ marginBottom: "30px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontWeight: "bold", color: "#334155" }}>Phone Number</label>
            <input type="text" placeholder="+91 XXXXX XXXXX" style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1" }} />
          </div>

          <button className="ai-btn" style={{ padding: "12px 25px" }}>Save Changes</button>
        </div>

      </div>
    </div>
  );
};

export default Settings;
