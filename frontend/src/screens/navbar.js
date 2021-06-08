import React from "react";
import { Link, Route } from "react-router-dom";
import "./ExerciseScreen.css";

export default function navbar() {
  return (
    <div className="exercise">
      <div className="navbar-containers">
        <Link to="/exercises" className="header-link">
          Exercises
        </Link>
        <Link to="/create" className="header-link">
          Create Exercise
        </Link>
      </div>
    </div>
  );
}
