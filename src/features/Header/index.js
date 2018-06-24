import React from "react";
import Link from "gatsby-link";

// import github from '../../img/github-icon.svg'
// import logo from '../../img/logo.png'

import styles from "./index.module.scss";

const items = ["home", "about", "services", "blog", "products"];

const Header = () => (
  <div styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <nav>
        <ul styleName="nav">
          {items.map(item => (
            <li key={item}>
              <Link
                to={`/${item}`}
                styleName="link"
                activeClassName={styles["active"]}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
