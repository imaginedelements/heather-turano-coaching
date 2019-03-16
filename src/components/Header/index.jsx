import React from "react";
import { Link } from "gatsby";

import MainNav from "../MainNav";
import "./index.module.scss";

const Header = ({ route, ...restProps }) => (
  <header styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <Link to={route} styleName="logo" />
      <MainNav {...restProps} />
    </div>
  </header>
);

export default Header;
