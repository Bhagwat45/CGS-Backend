import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

import Dashboard from "./pages/Dashboard";

import Profile from "./pages/Profile";
import Assessment from "./pages/Assessment";
import AptitudeTest from "./pages/AptitudeTest";
import PersonalityTest from "./pages/PersonalityTest";
import TechnicalTest from "./pages/TechnicalTest";

import CareerRecommendation from "./pages/CareerRecommendation";
import SkillGap from "./pages/SkillGap";
import LearningRoadmap from "./pages/LearningRoadmap";

import ResumeUpload from "./pages/ResumeUpload";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import ResumeBuilder from "./pages/ResumeBuilder";

import JobRecommendations from "./pages/JobRecommendations";
import Internship from "./pages/Internship";
import CompanyEligibility from "./pages/CompanyEligibility";

import AIChat from "./pages/AIChat";
import MockInterview from "./pages/MockInterview";
import CodingChallenge from "./pages/CodingChallenge";
import DailyQuiz from "./pages/DailyQuiz";

import Certificates from "./pages/Certificates";
import Notifications from "./pages/Notifications";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";

import About from "./pages/About";
import Contact from "./pages/Contact";

import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageQuestions from "./pages/ManageQuestions";
import Analytics from "./pages/Analytics";

import NotFound from "./pages/NotFound";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />


        {/* Main Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* Assessment */}
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/aptitude-test" element={<AptitudeTest />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
          <Route path="/technical-test" element={<TechnicalTest />} />

          {/* Career */}
          <Route path="/career" element={<CareerRecommendation />} />
          <Route path="/skill-gap" element={<SkillGap />} />
          <Route path="/roadmap" element={<LearningRoadmap />} />

          {/* Resume */}
          <Route path="/resume-upload" element={<ResumeUpload />} />
          <Route path="/resume-analysis" element={<ResumeAnalysis />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />

          {/* Jobs */}
          <Route path="/jobs" element={<JobRecommendations />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/company-eligibility" element={<CompanyEligibility />} />

          {/* AI */}
          <Route path="/ai-chat" element={<AIChat />} />
          <Route path="/mock-interview" element={<MockInterview />} />
          <Route path="/coding-challenge" element={<CodingChallenge />} />
          <Route path="/daily-quiz" element={<DailyQuiz />} />

          {/* Other */}
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/manage-users" element={<ManageUsers />} />
          <Route path="/manage-questions" element={<ManageQuestions />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>


        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>

  );
}


export default App;