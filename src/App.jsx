import React from "react";
import Weather from "./components/Weather";
import GalleryNews from "./components/GalleryNews";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GalleryNews />
    </div>
  );
}

export default App;
