import React from "react";
import Link from "gatsby-link";

import MainNav from "../MainNav";
import styles from "./index.module.scss";

const Header = props => (
  <div styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <MainNav {...props} />
    </div>
  </div>
);

export default Header;
