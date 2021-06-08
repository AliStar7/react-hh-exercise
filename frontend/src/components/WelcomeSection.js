import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./WelcomeSection.css";

import { HashLink as Links } from "react-router-hash-link";
function WelcomeSection() {
  return (
    <div className="hero-container">
      <img src="/images/kaiyndy.jpg" />
      <h1>
        WELCOME <br /> TO <br /> KAZAKHSTAN
      </h1>

      <p>What are you waiting for?</p>
    </div>
  );
}

export default WelcomeSection;
