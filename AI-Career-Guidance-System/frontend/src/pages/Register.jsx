import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
} from "lucide-react";
import { registerUser } from "../services/auth";

import "../styles/register.css";

const Register = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
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
        registerUser(formData.name, formData.email, formData.password)
            .then(() => navigate("/"))
            .catch((message) => setError(message))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <div className="register-container">

            <div className="register-card">

                <h1>Create Account</h1>

                <p>AI Career Guidance System</p>

                <form onSubmit={handleSubmit}>

                    <div className="input-box">
                        <User size={18} />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-box">
                        <Mail size={18} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-box">

                        <Lock size={18} />

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required
                        />

                        <span
                            className="eye"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={18} />
                            ) : (
                                <Eye size={18} />
                            )}
                        </span>

                    </div>

                    {error && <p className="auth-error">{error}</p>}

                    <button
                        type="submit"
                        className="register-btn"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Creating Account..." : "Register"}
                    </button>

                </form>

                <div className="login-link">

                    Already have an account?

                    <Link to="/"> Login </Link>

                </div>

            </div>

        </div>
    );
};

export default Register;