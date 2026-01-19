import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import "../App.css";
import { AppContext } from "../context/appContext";

const Login = () => {
  const { appName } = useContext(AppContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Simulate login
    setLoggedIn(true);
    setEmail("");
    setPassword("");
    setRemember(false);

    // Redirect to Dashboard after 1 second (for smooth UX)
    setTimeout(() => {
      navigate("/dashboard");
    }, 500);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="badge">Welcome Back</div>
        <h1 className="gradient-text">Login to {appName}</h1>
        <p>
          Access your personalized {appName} tips, tracks, and mindfulness
          content by logging in.
        </p>
      </section>

      {/* Login Form */}
      <section className="home-section">
        {!loggedIn ? (
          <form className="registration-form" onSubmit={handleSubmit}>
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

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>

            <button className="btn-primary" type="submit">
              Login
            </button>

            <p style={{ marginTop: "1rem", textAlign: "center" }}>
              Don't have an account?{" "}
              <Link
                to="/registration"
                style={{ color: "var(--accent)", fontWeight: "600" }}
              >
                Register
              </Link>
            </p>
          </form>
        ) : (
          <div className="success-message">
            <h3>Login Successful!</h3>
            <p>Redirecting to Dashboard...</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Login;
