import React from "react";
import Link from "gatsby-link";

import styles from "./index.module.scss";

const items = ["home", "about", "services", "blog"];

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
                activeClassName={styles.active}
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
