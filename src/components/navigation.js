import React from "react";

import { Link } from "gatsby";

import style from "./../config/styles";

const navigationStyle = {
  color: style.color.WHITE,
  position: "absolute",
  top: 0,
  right: 0,
  fontSize: "12px",
  padding: "2rem",
  margin: 0,
  listStyle: "none"
};

const Navigation = () => {
  return (
    <nav style={navigationStyle}>
      <ul>
        <Link to="/work">work</Link>
        <Link to="/about">about</Link>
        <Link to="/contact">contact</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
