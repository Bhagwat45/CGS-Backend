import React, { useState } from "react";
import { Send, Bot, User } from "lucide-react";
import "../styles/chatbot.css";

const AIChat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello Shreya! I'm your AI Career Guide. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { text: input, isBot: false }];
    setMessages(newMessages);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      setMessages([...newMessages, { 
        text: "I understand. Based on your profile, I recommend focusing on Data Structures and React Hooks next.", 
        isBot: true 
      }]);
    }, 1000);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <Bot size={24} />
        <h2>AI Career Mentor</h2>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message-wrapper ${msg.isBot ? "bot" : "user"}`}>
            <div className="avatar">
              {msg.isBot ? <Bot size={20} /> : <User size={20} />}
            </div>
            <div className="message">
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div className="chat-input">
        <input 
          type="text" 
          placeholder="Ask me anything about your career..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}><Send size={18} /></button>
      </div>
    </div>
  );
};

export default AIChat;
