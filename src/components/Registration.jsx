import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Users } from "lucide-react"; 
import "../App.css";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Registration = () => {

  const {appName}=useContext(AppContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="badge">Join {appName}</div>
        <h1 className="gradient-text">Start Your MindNest Journey</h1>
        <p>Register today to access personalized tips, guides, and community support.</p>
      </section>

      <section className="home-section">
        <h2>Create Your Account</h2>
        {!submitted ? (
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="input-icon">
              <User className="field-icon" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="input-icon">
              <Mail className="field-icon" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-icon">
              <Lock className="field-icon" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-icon">
              <Lock className="field-icon" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-icon">
              <Users className="field-icon" />
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={newsletter}
                onChange={(e) => setNewsletter(e.target.checked)}
              />
              Subscribe to {appName} newsletter
            </label>

            <button className="btn-primary" type="submit">Register</button>

            <p className="switch-link">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        ) : (
          <div className="success-message">
            <h3>Registration Successful!</h3>
            <p>Welcome to the {appName} community, {fullName}!</p>
            <p className="switch-link">
              Already have an account? <Link to="/login" className="link-accent">Login</Link>
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Registration;
