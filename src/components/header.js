import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./logo";

import Image from "../components/image";

import style from "./../config/styles";

const Header = ({ siteTitle }) => (
  <header
    style={{
      fontFamily: style.font.FAMILY,
      background: style.color.background,
      marginBottom: style.spacing.DEFAULT,
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `#d1d5da`
    }}
  >
    <Image />
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
            position: `absolute`,
            top: 0,
            display: `block`,
            padding: `2rem 1rem`,
            color: style.color.WHITE,
            textDecoration: `none`,
            fontFamily: style.font.FAMILY,
            fontSize: `1.25rem`,
            letterSpacing: 1
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
