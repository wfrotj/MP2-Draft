import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <main className="navbar">
      <h1>Logo</h1>
      <h1>Pinas News</h1>
      <div className="menu-items">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Login</a>
      </div>
    </main>
  );
}

export default Navbar;
