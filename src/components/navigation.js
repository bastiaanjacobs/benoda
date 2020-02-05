import React from "react";

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
    <section style={navigationStyle}>
      <ul>
        <li>work</li>
        <li>about</li>
        <li>contact</li>
      </ul>
    </section>
  );
};

export default Navigation;
