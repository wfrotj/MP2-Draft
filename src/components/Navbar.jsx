import React from "react";
import "./Navbar.css";
import Sports from "./Sports";
import { Fa500Px, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <main className="navbar">
      <h1>
        <Fa500Px />
      </h1>
      <h1 className="title">World News</h1>
      <div className="menu-items">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Sign up</a>
        <div className="icon">
          <FaUserCircle />
        </div>
      </div>
    </main>
  );
}

export default Navbar;
