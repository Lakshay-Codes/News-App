import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-1 translate-middle badge rounded-pill bg-danger" style={{left : "90%",zIndex:1}}>
            {source.name}
          </span>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title : ""} </h5>
            <p className="card-text">{description ? description : ""}</p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
