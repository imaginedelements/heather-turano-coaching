import React from "react";
import Link from "gatsby-link";

import MainNav from "../MainNav";
import styles from "./index.module.scss";

const Header = () => (
  <div styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <MainNav
        items={[
          {
            title: "home"
          },
          {
            title: "about"
          },
          {
            title: "services"
          },
          {
            title: "blog",
            route: "bloglist"
          }
        ]}
      />
    </div>
  </div>
);

export default Header;
