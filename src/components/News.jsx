import React from "react";
import "./News.css";
function News({ article }) {
  const { urlToImage, title, author, url, source, category } = article;
  console.log(article);
  return (
    <main className="news-container">
      <div className="image-container">
        <img
          src={urlToImage ? urlToImage : "https://picsum.photos/id/237/200/300"}
        />
      </div>
      <div className="details">
        <h2 className="title">
          <a href={url} className="link">
            {title}
          </a>
        </h2>
        <h3 className="author">{author}</h3>
        <h2>{category}</h2>
        <section className="source">
          <p>{source.name}</p>
        </section>
      </div>
    </main>
  );
}

export default News;
