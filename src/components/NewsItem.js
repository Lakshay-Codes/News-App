import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl? imageUrl : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title? title : ""}</h5>
            <p className="card-text">{description?description : ""}</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
