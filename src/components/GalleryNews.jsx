import React, { useEffect, useState } from "react";
import "./GalleryNews.css";
import News from "./News";
import Sports from "./Sports";
import { FaHourglassHalf } from "react-icons/fa";

function GalleryNews() {
  const [news, setNews] = useState(null);
  async function getData() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${keyword}&apiKey=2c6078fb9ad94191a15153fc20b84bd7`
    );
    const newsData = await response.json();
    setNews(newsData.articles);
  }
  useEffect(() => {
    getData();
  }, []);
  if (news === null)
    return (
      <div className="loading">
        <h1>Please wait..</h1>
        <div className="hourglass">
          <FaHourglassHalf />
        </div>
      </div>
    );
  return (
    <div className="news-gallery">
      {news?.map((article, index) => (
        <News key={index} article={article} />
      ))}
    </div>
  );
}

export default GalleryNews;
