import React, { useState } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import "../styles/dashboard.css";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    setIsUploading(true);
    // Simulate upload delay
    setTimeout(() => {
      setIsUploading(false);
      setIsDone(true);
    }, 2000);
  };

  return (
    <div className="dashboard-container" style={{ padding: 0, display: "block" }}>
      <div className="card" style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center", padding: "50px 30px" }}>
        
        {isDone ? (
          <div>
            <div style={{ display: "inline-flex", padding: "20px", borderRadius: "50%", background: "#d1fae5", color: "#10b981", marginBottom: "20px" }}>
              <CheckCircle size={60} />
            </div>
            <h2>Resume Uploaded Successfully!</h2>
            <p style={{ color: "#666", marginTop: "10px", marginBottom: "30px" }}>
              Our AI is now analyzing your resume: <strong>{file?.name}</strong>. You will receive personalized feedback shortly.
            </p>
            <button className="ai-btn" onClick={() => window.location.href = '/resume-analysis'}>
              View AI Analysis
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: "inline-flex", padding: "20px", borderRadius: "50%", background: "#eff6ff", color: "#2563eb", marginBottom: "20px" }}>
              <FileText size={60} />
            </div>
            <h2 style={{ marginBottom: "10px" }}>Upload Your Resume</h2>
            <p style={{ color: "#666", marginBottom: "30px" }}>Get AI-driven feedback, score, and job matching by uploading your latest resume.</p>
            
            <div 
              style={{ 
                border: "2px dashed #cbd5e1", 
                borderRadius: "15px", 
                padding: "40px 20px",
                background: "#f8fafc",
                cursor: "pointer",
                marginBottom: "20px"
              }}
              onClick={() => document.getElementById('resumeInput').click()}
            >
              <Upload size={30} color="#94a3b8" style={{ margin: "0 auto 15px" }} />
              {file ? (
                <p style={{ fontWeight: "bold", color: "#2563eb", margin: 0 }}>{file.name}</p>
              ) : (
                <p style={{ color: "#64748b", margin: 0 }}>Click to browse or drag and drop your file here.<br/>(PDF or DOCX)</p>
              )}
            </div>
            
            <input 
              type="file" 
              id="resumeInput" 
              accept=".pdf,.doc,.docx" 
              style={{ display: "none" }} 
              onChange={handleFileChange}
            />

            <button 
              className="ai-btn" 
              style={{ width: "100%", padding: "15px", fontSize: "16px", opacity: file ? 1 : 0.5 }}
              disabled={!file || isUploading}
              onClick={handleUpload}
            >
              {isUploading ? "Uploading & Analyzing..." : "Upload Resume"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ResumeUpload;
