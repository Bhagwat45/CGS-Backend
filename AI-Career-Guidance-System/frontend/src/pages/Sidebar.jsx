import {
    LayoutDashboard,
    User,
    Brain,
    Briefcase,
    FileText,
    Bot,
    Mic,
    Code2,
    BarChart3,
    Award,
    Settings,
    LogOut,
} from "lucide-react";

import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="sidebar-logo">AI Career</h2>
            <nav>
                <Link to="/dashboard"><LayoutDashboard size={20} /> Dashboard</Link>
                <Link to="/profile"><User size={20} /> Profile</Link>
                <Link to="/assessment"><Brain size={20} /> Assessment</Link>
                <Link to="/career"><Briefcase size={20} /> Career</Link>
                <Link to="/resume-upload"><FileText size={20} /> Resume</Link>
                <Link to="/ai-chat"><Bot size={20} /> AI Chat</Link>
                <Link to="/mock-interview"><Mic size={20} /> Interview</Link>
                <Link to="/coding-challenge"><Code2 size={20} /> Coding</Link>
                <Link to="/progress"><BarChart3 size={20} /> Progress</Link>
                <Link to="/certificates"><Award size={20} /> Certificates</Link>
                <Link to="/settings"><Settings size={20} /> Settings</Link>
                <Link to="/"><LogOut size={20} /> Logout</Link>
            </nav>
        </div>
    );
};

export default Sidebar;