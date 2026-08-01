import { Bell, Search, Bot, User, LogOut } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <h2>AI Career Guide</h2>
            </div>
            <div className="search-box">
                <Search size={18} />
                <input
                    type="text"
                    placeholder="Search careers, skills, jobs..."
                />
            </div>
            <div className="nav-right">
                <button className="icon-btn">
                    <Bell size={20} />
                </button>
                <button className="ai-btn">
                    <Bot size={18} />
                    AI Assistant
                </button>
                <div className="profile">
                    <User size={20} />
                    <span>Shreya</span>
                </div>
                <button className="logout-btn">
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </header>
    );
};

export default Navbar;