import React from "react";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
      </header>

      <div className="container">
        <Card name="Maria" title="CEO" age="29" />
        <Card name="Kati" title="Developer" age="25" />
        <Card name="Karin" title="Designer" age="45" />
      </div>
      <div className="attribution">
        Copyright <a href="#">Silvana Lindholm</a>
      </div>
    </>
  );
}

export default App;
