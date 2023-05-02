import React from "react";

function Gallery() {
  async function getNewsData() {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2c6078fb9ad94191a15153fc20b84bd7"
    );
    const data = await response.json();
    console.log(data);
  }

  return <div>Gallery</div>;
}

export default Gallery;
