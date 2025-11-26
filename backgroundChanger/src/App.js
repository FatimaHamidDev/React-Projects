import React from "react";
import { useState } from "react";

function App() {

  const [color, setColor] = useState("beige");

  return (

    <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center",
        backgroundColor: "#f0f0f0", transition: "background-color 0.3s ease" }}>
          
      <div style={{ padding: "120px", textAlign: "center", width: "800px", backgroundColor: color }}>

        <h1>Background Changer</h1>
        <p style={{ fontSize:"18px", lineHeight: "1.5" }}>
          This mini React project covers the topics we learned so far:</p>

        <ul style={{listStyleType:"none", fontSize:"18px", lineHeight: "1.7" }}>
          <li><b> useState</b></li>
          <li><b>event handling</b></li>
          <li><b>rendering</b></li>
          <li>and simple <b>UI updates</b></li>
        </ul>
         <p>Click a button below to switch background colors instantly.</p>   

        <button
          style={{ width: "100%", margin: "10px", backgroundColor: "purple", padding: "12px", color: "white", 
          border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => setColor("green")}> Change background to Green </button>

        <button
          style={{ width: "100%", margin: "10px", backgroundColor: "purple", padding: "12px", color: "white", 
          border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => setColor("red")}> Change background to Red </button>

        <button
          style={{ width: "100%", margin: "10px", backgroundColor: "purple", padding: "12px", color: "white", 
          border: "none", borderRadius: "4px", cursor: "pointer" }}
          onClick={() => setColor("yellow")}> Change background to Yellow </button>

      </div>
    </div>
  );
}

export default App;


