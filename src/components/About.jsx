import React from "react";
import "../App.css";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.jpg";
import {useContext} from "react";
import {AppContext} from "../context/appContext";

const About = () => {
  const {appName}=useContext(AppContext);
  const sections = [
    {
      title: "Our Vision",
      content:
        "A world where mental wellness is normalized, accessible, and practiced daily by everyone, leading to happier and healthier lives.",
    },
  ];

  const beforeAfter = [
    {
      before: "Feeling stressed & anxious",
      after: "Calm, focused, and positive",
    },
    {
      before: "Lack of daily routine",
      after: "Structured and mindful daily habits",
    },
    { before: "Low motivation", after: "Inspired & proactive mindset" },
    {
      before: "Negative self-talk",
      after: "Positive and encouraging thoughts",
    },
    {
      before: "Disconnected from community",
      after: "Engaged and supported in wellness community",
    },
  ];

  const coreValues = [
    {
      value: "Empathy",
      description:
        "Understanding and supporting everyone’s mental wellness journey.",
    },
    {
      value: "Integrity",
      description: "Providing honest, science-backed guidance.",
    },
    {
      value: "Inclusivity",
      description: "Mental wellness accessible for all, without stigma.",
    },
    {
      value: "Growth",
      description: "Promoting continuous self-improvement and learning.",
    },
    {
      value: "Positivity",
      description: "Encouraging daily positive habits and mindset.",
    },
  ];

  const teamMembers = [
    { name: "Ayesha Khan", role: "Founder & CEO", image: team1 },
    { name: "Ali Raza", role: "Head of Content", image: team2 },
    { name: "Sara Ahmed", role: "Wellness Coach", image: team3 },
  ];

  return (
    <div className="home-container">
     
      <section className="hero">
        <div className="badge">About {appName}</div>
        <h1 className="gradient-text">Building Mindful Lives</h1>
        <p>
          {appName} is a platform dedicated to improving mental wellness, providing
          practical guidance, and inspiring positive daily habits.
        </p>
      </section>

      
      {sections.map((section, index) => (
        <section className="home-section" key={index}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
      
      <section className="home-section">
        <h2>Before {appName} vs After {appName}</h2>
        <table className="before-after-table">
          <thead>
            <tr>
              <th>Before {appName} </th>
              <th>After {appName}</th>
            </tr>
          </thead>
          <tbody>
            {beforeAfter.map((item, idx) => (
              <tr key={idx}>
                <td>{item.before}</td>
                <td>{item.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
      <section className="home-section">
        <h2>Our Core Values</h2>
        <table className="core-values-table">
          <thead>
            <tr>
              <th>Value</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {coreValues.map((val, idx) => (
              <tr key={idx}>
                <td>{val.value}</td>
                <td>{val.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

     
     <h2>Meet Our Team</h2>
      <section className="features-grid">
        {teamMembers.map((member, index) => (
          <div className="bento-item" key={index}>
            {member.image && (
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
            )}
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
