import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";
import { loginUser } from "../services/auth";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    loginUser(formData.email, formData.password)
      .then((data) => {
        localStorage.setItem("access_token", data.access_token);
        navigate("/dashboard");
      })
      .catch((message) => setError(message))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="full-designer-login">
      
      {/* Left Side: Hero Section with 3D Logo */}
      <div className="login-hero-section">
        <div className="hero-content">
          <div className="hero-logo">
            <Sparkles size={24} className="icon-sparkle" />
            <span>AI Career Guide</span>
          </div>
            <p className="hero-subtitle">
              Harness the power of AI to analyze your skills, discover perfect career matches, and prepare for your dream job.
            </p>
        </div>

        <div className="hero-image-container">
          <img src="/3d-logo.png" alt="3D AI Logo" className="hero-3d-model" />
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="login-form-section">
        <div className="form-container">
          
          <div className="form-header">
            <h2>Welcome Back!</h2>
            <p>Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="premium-form">
            
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <Mail size={18} className="input-icon" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <Lock size={18} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button 
                  type="button" 
                  className="eye-toggle" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-actions">
              <label className="checkbox-wrap">
                <input type="checkbox" className="custom-checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="designer-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Signing In..." : "Sign In"} {!isSubmitting && <ArrowRight size={20} />}
            </button>
            
          </form>

          <p className="signup-prompt">
            Don't have an account? <Link to="/register" className="signup-link">Create one now</Link>
          </p>
          
        </div>
      </div>

    </div>
  );
};

export default Login;