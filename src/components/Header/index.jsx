import React from "react";
import Link from "gatsby-link";

import MainNav from "../MainNav";
import styles from "./index.module.scss";

export const Header = props => (
  <header styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <MainNav {...props} />
    </div>
  </header>
);
