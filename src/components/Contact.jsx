import React, { useState } from "react";
import "../App.css";
import {useContext} from "react";
import { AppContext } from "../context/appContext";

const Contact = () => {

  const {appName}=useContext(AppContext);
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!fullName || !email || !message) {
      alert("Please fill all fields!");
      return;
    }
    setSubmitted(true);
    
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="home-container">
      
      <section className="hero">
        <div className="badge">Contact {appName}</div>
        <h1 className="gradient-text">Get in Touch with {appName}</h1>
        <p>
          Have a question, suggestion, or just want to connect? Fill out the
          form below or reach us through our contact information.
        </p>
      </section>

      
      <section className="home-section">
        <h2>Contact Information</h2>
        <p>Email: support@mindnest.com</p>
        <p>Phone: +92 300 1234567</p>
        <p>Address: 123 Wellness Street, Karachi, Pakistan</p>
      </section>

     
      <section className="home-section">
        <h2>Send Us a Message</h2>

        {!submitted ? (
          <form className="registration-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>

            <button className="btn-primary" type="submit">
              Send Message
            </button>
          </form>
        ) : (
          <div className="success-message">
            <h3>Message Sent Successfully!</h3>
            <p>Thank you for contacting {appName}. We will get back to you soon.</p>
          </div>
        )}
      </section>

      
      <section className="home-section">
        <h2>Our Location</h2>
        <div className="video-box" style={{ padding: 0, height: "200px" }}>
          <iframe
            title="MindNest Location"
            width="80%"
            height="80%"
            src="https://maps.google.com/maps?q=karachi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contact;
