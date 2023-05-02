import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero-container">
      <div className="form-container">
        <h3>Search for the latest news today!</h3>
        <form>
          <input type="text" className="input-search" />
          <button className="button-search">Search</button>
        </form>
      </div>
      <div className="weather-container">
        <h1>Weather</h1>
      </div>
    </section>
  );
}

export default Hero;
