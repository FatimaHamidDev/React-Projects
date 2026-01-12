import React, { useState } from "react";
import "./App.css";

function App() {
  const [moods, setMoods] = useState({
    happy: 0,
    neutral: 0,
    sad: 0,
  });

  function addMood(type) {
    setMoods((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }
  const total = moods.happy + moods.neutral + moods.sad;

  function getDominantMood() {
    if (total === 0) return "No mood yet";

    const max = Math.max(moods.happy, moods.neutral, moods.sad);

    if (max === moods.happy) return "😀 Happy";
    if (max === moods.neutral) return "😐 Neutral";
    return "😞 Sad";
  }

  return (
    <div className="container">
      <h1>Mood Tracker</h1>

      <div className="button-row">
        <button className="emoji-btn happy" onClick={() => addMood("happy")}>😀</button>
        <button className="emoji-btn neutral" onClick={() => addMood("neutral")}>😐</button>
        <button className="emoji-btn sad" onClick={() => addMood("sad")}>😞</button>
      </div>

      {/* Calculations */}
      <div className="summary">
        <p>😀 Happy: {moods.happy}</p>
        <p>😐 Neutral: {moods.neutral}</p>
        <p>😞 Sad: {moods.sad}</p>
        <hr />

        <p><strong>Total Entries:</strong> {total}</p>
        <p><strong>Dominant Mood:</strong> {getDominantMood()}</p>

      </div>
    </div>
  );
}

export default App;
