import React from "react";

import MainNav from "../MainNav";
import "./index.module.scss";

export const Header = props => (
  <header styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <MainNav {...props} />
    </div>
  </header>
);
