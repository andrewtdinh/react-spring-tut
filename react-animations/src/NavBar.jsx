import React from "react";
import { Spring, config } from "react-spring";
import "./styles.css";

function NavBar() {
  return (
    <Spring from={{ number: 0 }} to={{ number: 100 }} config={config.slow}>
      {props => (
        <div style={{ width: props.number + "%" }}>
          <nav className="nav-bar">
            <a href="#">Home</a>
            <a href="#"> Posts</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      )}
    </Spring>
  );
}

export default NavBar;