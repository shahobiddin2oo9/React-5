import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Fragment>
        <header>
          <div className="container">
            <nav>
              <div className="top-bar">
                <h2 className="logo">My News</h2>
                <button className="toggle-btn" onClick={this.toggleMenu}>
                  ☰
                </button>
              </div>
              <div className={`menu ${this.state.isOpen ? "open" : ""}`}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/businessPage">Business</NavLink>
                <NavLink to="/entertainmentPage">Entertainment</NavLink>
                <NavLink to="/generalPage">General</NavLink>
                <NavLink to="/healthPage">Health</NavLink>
                <NavLink to="/sciencePage">Science</NavLink>
                <NavLink to="/sportsPage">Sports</NavLink>
                <NavLink to="/TechnologyPage">Technology</NavLink>
              </div>
            </nav>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
