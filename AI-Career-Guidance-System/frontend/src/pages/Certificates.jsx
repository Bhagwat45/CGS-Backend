import React from "react";
import { Award, Download, Share2 } from "lucide-react";
import "../styles/dashboard.css";

const Certificates = () => {
  const certs = [
    { title: "React Fundamentals", date: "Oct 12, 2023", provider: "AI Career Platform", color: "#3b82f6" },
    { title: "Advanced Python Algorithms", date: "Nov 05, 2023", provider: "AI Career Platform", color: "#10b981" },
  ];

  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card welcome-card" style={{ background: "linear-gradient(135deg, #8b5cf6, #6d28d9)" }}>
        <h1>Your Certificates 🎓</h1>
        <p>View, download, and share your achievements with employers.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px", marginTop: "20px" }}>
        
        {certs.map((cert, idx) => (
          <div key={idx} className="card" style={{ textAlign: "center", padding: "30px", borderTop: `5px solid ${cert.color}` }}>
            <div style={{ width: "60px", height: "60px", background: `${cert.color}22`, color: cert.color, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 15px" }}>
              <Award size={30} />
            </div>
            <h3 style={{ marginBottom: "10px" }}>{cert.title}</h3>
            <p style={{ color: "#64748b", fontSize: "14px", margin: "5px 0" }}>Issued: {cert.date}</p>
            <p style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "20px" }}>{cert.provider}</p>
            
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <button style={{ padding: "8px 15px", borderRadius: "8px", border: "1px solid #e2e8f0", background: "white", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
                <Download size={16} /> PDF
              </button>
              <button style={{ padding: "8px 15px", borderRadius: "8px", border: "none", background: "#f8fafc", cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }}>
                <Share2 size={16} /> Share
              </button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Certificates;
