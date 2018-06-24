import React from "react";
import Link from "gatsby-link";

import styles from "./index.module.scss";

const items = [
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
];

const Header = () => (
  <div styleName="container">
    <div styleName="search" />
    <div styleName="main">
      <div styleName="logo" />
      <nav>
        <ul styleName="nav">
          {items.map(item => (
            <li key={item.title}>
              <Link
                to={`/${item.route || item.title}`}
                styleName="link"
                activeClassName={styles.active}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
);

export default Header;
