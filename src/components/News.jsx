import React from "react";
import "./News.css";
function News({ article }) {
  const {
    urlToImage,
    title,
    publishedAt,
    author,
    url,
    source,
    alt = "https://picsum.photos/id/237/200/300",
  } = article;
  return (
    <main className="news-container">
      <div className="image-container">
        <img src={urlToImage} alt={alt} />
      </div>
      <div className="details">
        <h2 className="title">
          <a href={url} className="link">
            {title}
          </a>
        </h2>
        <p className="date">{publishedAt}</p>
        <h3 className="author">{author}</h3>
        <p>{source.name}</p>
        <section className="source"></section>
      </div>
    </main>
  );
}

export default News;
