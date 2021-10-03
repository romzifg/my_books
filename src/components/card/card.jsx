import React from "react";
import "./card.css";

const Card = (props) => {
  const { title, author, isbn, publishedOn, numberOfPages, country, imageUrl } =
    props;

  return (
    <div className="card">
      <div className="card-info">
        <div className="group-title">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">Book by {author}</h2>
        </div>
        <div className="info">
          <div className="group">
            <div className="content-group">
              <label className="label">ISBN</label>
              <p className="content">{isbn}</p>
            </div>
            <div className="content-group">
              <label className="label">Published on</label>
              <p className="content">{publishedOn}</p>
            </div>
          </div>
          <div className="group">
            <div className="content-group">
              <label className="label">Number of Page</label>
              <p className="content">{numberOfPages} pages</p>
            </div>
            <div className="content-group">
              <label className="label">Country Publisher</label>
              <p className="content">{country}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="images">{imageUrl}</div>
    </div>
  );
};

export default Card;
