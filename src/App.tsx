import { useEffect, useState } from "react";
import logo from "/logo.png";
import "./App.css";

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "https://heatherturanocoaching.com";
    }, 5000);
  }, []);

  return (
    <div>
      <a href="https://heatherturanocoaching.com" target="_blank">
        <div className="moved">
          <img src={logo} className="logo" alt="htc-logo" />
        </div>
      </a>
      <h1>We have moved!</h1>
      <p>
        If you're not automatically directed in 5 seconds, please{" "}
        <a rel="noreferrer" href="https://heatherturanocoaching.com">
          click here
        </a>
      </p>
    </div>
  );
}

export default App;
