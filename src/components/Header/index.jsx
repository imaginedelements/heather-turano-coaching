import React from "react";

import MainNav from "../MainNav";
import "./index.module.scss";

const Header = props => (
  <header styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <MainNav {...props} />
    </div>
  </header>
);

export default Header;
