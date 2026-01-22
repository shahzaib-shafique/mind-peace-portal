import React, { useState, useEffect } from "react";
import "../App.css";
import { useContext } from "react";
import { AppContext } from "../context/appContext";

const Tips = () => {
  const { appName } = useContext(AppContext);

  const [quote, setQuote] = useState("");

  const [mood, setMood] = useState("");
  const [moodTip, setMoodTip] = useState("");

  const tipsByMood = {
    happy: "Keep spreading positivity! Share your joy with someone today.",
    neutral: "Take a short walk or meditate to lift your energy and focus.",
    sad: "Do something kind for yourself — read, relax, or write down your thoughts.",
  };

  useEffect(() => {
    fetch("/quotes.json")
      .then((res) => res.json())
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(`${randomQuote.content} — ${randomQuote.author}`);
      })
      .catch(() => {
        setQuote("Keep your mind positive and your habits healthy! — MindNest");
      });
  }, []);

  const handleMoodChange = (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);
    setMoodTip(tipsByMood[selectedMood] || "");
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="badge">{appName} Tips</div>
        <h1 className="gradient-text">Boost Your Mental Wellness</h1>
        <p>
          Discover personalized tips and mindfulness practices based on your
          current mood.
        </p>
      </section>

      <section className="home-section">
        <h2>Daily Tips</h2>
        <p>
          Our Daily Tips is to help individuals achieve mental clarity,
          emotional resilience, and a balanced life through daily mindful
          practices and guided habits.
        </p>
      </section>

      <section className="home-section">
        <h2>How are you feeling today?</h2>
        <div className="mood-select-container">
          <label>Select Your Mood</label>
          <select
            id="mood"
            value={mood}
            onChange={handleMoodChange}
            className="mood-select"
          >
            <option value="">Choose mood</option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
            <option value="sad">Sad</option>
          </select>
        </div>

        {moodTip && (
          <div className="focus-card" style={{ marginTop: "1rem" }}>
            <h3>Your Tip</h3>
            <p>{moodTip}</p>
          </div>
        )}
      </section>

      <section className="home-section">
        <h2>Quote of the Day</h2>
        <p className="quote-text">"{quote}"</p>
      </section>

      <section className="home-section">
        <h2>Mindfulness Audio</h2>
        <audio controls>
          <source src="/src/assets/meditation.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </section>
    </div>
  );
};

export default Tips;
