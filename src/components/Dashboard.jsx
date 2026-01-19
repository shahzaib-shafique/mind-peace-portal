import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { LogOut, Brain, Target, Rocket, Lightbulb, Heart, Film } from "lucide-react";

const Dashboard = () => {
  const { appName } = useContext(AppContext);
  const navigate = useNavigate();


  const [reflection, setReflection] = useState("");
  const [journal, setJournal] = useState([]);

  const focusAreas = [
    "Mental Well-being",
    "Daily Motivation",
    "Self Improvement",
    "Stress Management",
    "Positive Thinking",
    "Mindfulness Practices",
  ];

  const focusIcons = [
    <Brain size={28} />,
    <Target size={28} />,
    <Rocket size={28} />,
    <Lightbulb size={28} />,
    <Heart size={28} />,
    <Film size={28} />,
  ];

  
  

  const handleJournalSubmit = (e) => {
    e.preventDefault();
    if (!reflection) return;
    const today = new Date().toLocaleDateString();
    setJournal([...journal, { date: today, entry: reflection }]);
    setReflection("");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="badge">Welcome to {appName} Dashboard!</div>
        <h1 className="gradient-text">Your Daily Mental Wellness Hub</h1>
        <p className="hero-text">
          Track your mood, view tips, and reflect on your day in one place.
        </p>
      </section>

      
      <section className="features-grid focus-areas-dashboard">
        {focusAreas.map((area, index) => (
          <div className="bento-item" key={index}>
            <div className="feature-icon">{focusIcons[index]}</div>
            <h3>{area}</h3>
            <p>Practical tips and guidance for {area.toLowerCase()}.</p>
          </div>
        ))}
      </section>

      <section className="home-section journal-section">
        <h2>Daily Reflection Journal</h2>
        <p>Write a short note about your day to track your mental growth.</p>
        <form onSubmit={handleJournalSubmit}>
          <textarea
            placeholder="Reflect on your day..."
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            rows={3}
            className="journal-textarea"
          />
          <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem" }}>
            Save Reflection
          </button>
        </form>

        {journal.length > 0 && (
          <table className="before-after-table" style={{ marginTop: "1rem" }}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Reflection</th>
              </tr>
            </thead>
            <tbody>
              {journal.map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.date}</td>
                  <td>{entry.entry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <footer className="dashboard-footer" style={{ marginTop: "1rem", textAlign: "center" }}>
        <button className="btn-secondary" onClick={handleLogout}>
          <LogOut size={18} /> Logout
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
