import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo";

import style from "./../config/styles";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: style.color.background,
      marginBottom: style.spacing.DEFAULT,
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `#d1d5da`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
      }}
    >
      <Logo />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            display: `block`,
            padding: `1rem`,
            color: `#111`,
            textDecoration: `none`,
            fontSize: `1rem`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
