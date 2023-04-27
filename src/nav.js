import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
function Navbar() {
  return (
    <div className="navbar">
      <h>Home</h>
      <h>About</h>
      <h>Skills</h>
      <h>Projects</h>
      <h>Contact</h>
    </div>
  );
}

export default Navbar;
