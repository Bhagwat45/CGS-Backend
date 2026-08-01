import React from "react";
import { User, Mail, Briefcase, MapPin, Edit3 } from "lucide-react";
import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header card">
        <div className="profile-avatar">
          <User size={50} />
        </div>
        <div className="profile-info">
          <h2>Shreya Kapse</h2>
          <p className="role">Software Engineer / Aspiring Full Stack Developer</p>
          <div className="meta">
            <span><Mail size={16} /> shreya@example.com</span>
            <span><Briefcase size={16} /> 2 Years Exp.</span>
            <span><MapPin size={16} /> Pune, India</span>
          </div>
        </div>
        <button className="edit-btn"><Edit3 size={18} /> Edit Profile</button>
      </div>

      <div className="profile-grid">
        <div className="card">
          <h3>About Me</h3>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Passionate developer with a strong foundation in modern web technologies. Constantly learning and exploring AI and machine learning to integrate intelligent solutions into web applications.
          </p>
        </div>

        <div className="card">
          <h3>Core Skills</h3>
          <div className="skills-container mt-4">
            <span className="skill-tag">React.js</span>
            <span className="skill-tag">Node.js</span>
            <span className="skill-tag">Python</span>
            <span className="skill-tag">MongoDB</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Git</span>
          </div>
        </div>

        <div className="card">
          <h3>Career Goals</h3>
          <ul className="goals-list mt-3">
            <li>Become a Senior Full Stack Developer in 3 years.</li>
            <li>Master System Design and Scalable Architecture.</li>
            <li>Contribute to open-source AI projects.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
