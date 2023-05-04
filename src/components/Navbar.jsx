import React from "react";
import "./Navbar.css";
import Sports from "./Sports";
import { Fa500Px } from "react-icons/fa";

function Navbar() {
  return (
    <main className="navbar">
      <h1>
        <Fa500Px />
      </h1>
      <h1>World News</h1>
      <div className="menu-items">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Login</a>
      </div>
    </main>
  );
}

export default Navbar;
