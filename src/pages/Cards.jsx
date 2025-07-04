import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export class Cards extends Component {
  render() {
    let { title, url, description, id } = this.props;
    return (
      <div className="card">
        <div className="card--body">
          <img src={url} alt="" />
        </div>
        <div className="card--footer">
          <Link
            to="/news"
            state={{ title, url, description, id }}
            className="card-title"
          >
            <h2>{title}</h2>
          </Link>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Cards;
