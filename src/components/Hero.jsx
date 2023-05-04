import React from "react";
import "./Hero.css";
import Weather from "./Weather";

function Hero() {
  return (
    <section className="hero-container">
      <div className="menu-container">
        <a href="">News</a>
        <a href="">Business</a>

        <a href="">Entertainment</a>
        <a href="">Lifestyle</a>
        <a href="">Education</a>
        <a href="">Lifestyle</a>
      </div>
      <div className="weather-container">
        <Weather />
      </div>
    </section>
  );
}

export default Hero;
