import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../context/appContext";
import { Brain, Target, Rocket, Film, Lightbulb, Heart } from "lucide-react";


const Home = () => {
  const {appName}=useContext(AppContext);

  const focusIcons = [
  <Brain size={32} />,
  <Target size={32} />,
  <Rocket size={32} />,
  <Lightbulb size={32} />,
  <Heart size={32} />,
  <Film size={32} />
];

  const focusAreas = [
    "Mental Well-being",
    "Daily Motivation",
    "Self Improvement",
    "Stress Management",
    "Positive Thinking",
    "Mindfulness Practices",
  ];
  const navigate=useNavigate();
 
 
  return (
    <div className="home-container">
      
      <section className="hero">
        <div className="badge">Welcome to {appName}</div>
        <h1 className="gradient-text">Empower Your Mind with {appName}</h1>
        <p>
          MindNest is a digital space designed to help individuals improve
          mental wellness, build positive habits, and develop a balanced mindset.
        </p>
        <div className="hero-btns">
          <button onClick={()=>navigate("/Registration")} className="btn-primary">Get Started</button>
          <button onClick={()=>navigate("/About")} className="btn-secondary">Learn More</button>
        </div>
      </section>

     
      <section className="home-section mission-section">
        <h2>Our Mission</h2>
        <p>
          To provide practical, science backed guidance to help individuals
          improve mental wellness, manage stress, and cultivate focus for a
          healthier, happier life.
        </p>
      </section>

      
      <section className="home-section philosophy-section">
        <h2>Our Philosophy</h2>
        <p>
          Mental health is for everyone. Small, daily positive changes can lead
          to life-changing results. We aim to remove stigma and make wellness
          accessible to all.
        </p>
      </section>

      
      <section className="features-grid">
  {focusAreas.map((area, index) => (
    <div className="bento-item" key={index}>
      
      <div className="feature-icon">{focusIcons[index]}</div>
      <h3>{area}</h3>
      <p>Practical tips and guidance to improve your {area.toLowerCase()}.</p>
    </div>
  ))}
</section>


      
      <section className="home-section video-section">
        <h2>Introduction Video</h2>
        <div className="video-box">
          <video autoPlay controls className="intro-video">
            <source src="/src/assets/peace.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Home;
