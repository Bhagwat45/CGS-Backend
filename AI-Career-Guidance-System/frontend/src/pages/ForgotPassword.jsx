import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import "../styles/forgotpassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(email);

        alert("Password reset link sent successfully.");
    };

    return (
        <div className="forgot-container">

            <div className="forgot-card">

                <h1>Forgot Password</h1>

                <p>
                    Enter your email address to receive a password reset link.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="input-box">

                        <Mail size={18} />

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <button type="submit">
                        Send Reset Link
                    </button>

                </form>

                <div className="back-login">

                    <Link to="/">Back to Login</Link>

                </div>

            </div>

        </div>
    );
};

export default ForgotPassword;