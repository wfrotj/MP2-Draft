import React, { useEffect, useState } from "react";
import News from "./News";
import "./GalleryNews.css";

function GalleryNews() {
  const [items, setItems] = useState(null);
  async function getNews() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c6078fb9ad94191a15153fc20b84bd7"
    );
    const data = await response.json();
    setItems(data.articles);
  }
  useEffect(() => {
    getNews();
  }, []);

  if (items === null) return <p>Please wait.</p>;

  return (
    <div className="news-gallery">
      {items.map((article, index) => (
        <News key={index} article={article} />
      ))}
    </div>
  );
}

export default GalleryNews;
