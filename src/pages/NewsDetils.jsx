// src/pages/News.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import "./News.css";

const News = () => {
  const { state } = useLocation();

  if (!state) return <h2>Article not found</h2>;

  const { title, url, description, publishedAt, author } = state;

  return (
    <div className="container">
      <div className="news">
        <div className="news__header">
          <p className="news__date">Published at: {publishedAt}</p>
          <h1 className="news__title">{title}</h1>
          <div className="news__author">
            <div className="circle"></div>
            <span>{author || "Unknown Author"}</span>
          </div>
        </div>
        <div className="news__body">
          <p>{description}</p>
          <p>{description}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
