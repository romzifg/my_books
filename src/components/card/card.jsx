import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card-info">
        <div className="group-title">
          <h1 className="title">Title</h1>
          <h2 className="subtitle">Sub Title</h2>
        </div>
        <div className="info">
          <div className="group">
            <div className="content-group">
              <label className="label">ISBN</label>
              <p className="content">1234567890</p>
            </div>
            <div className="content-group">
              <label className="label">Published on</label>
              <p className="content">January, 10 2022</p>
            </div>
          </div>
          <div className="group">
            <div className="content-group">
              <label className="label">Number of Page</label>
              <p className="content">288 pages</p>
            </div>
            <div className="content-group">
              <label className="label">Country Publisher</label>
              <p className="content">U.S</p>
            </div>
          </div>
        </div>
      </div>
      <div className="images">Images</div>
    </div>
  );
};

export default Card;
