import React, { useEffect, useState } from "react";
import "./GalleryNews.css";
import News from "./News";
import Sports from "./Sports";

function GalleryNews() {
  const [news, setNews] = useState(null);
  async function getData() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2c6078fb9ad94191a15153fc20b84bd7"
    );
    const newsData = await response.json();
    setNews(newsData.articles);
    console.log(newsData.articles);
  }
  useEffect(() => {
    getData();
  }, []);
  if (news === null) return <p>Please wait..</p>;
  return (
    <div className="news-gallery">
      {news.map((article, index) => (
        <News key={index} article={article} />
      ))}
    </div>
  );
}

export default GalleryNews;
