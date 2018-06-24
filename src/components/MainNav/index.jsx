import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import styles from "./index.module.scss";

const MainNav = ({ items }) => (
  <nav>
    <ul styleName="nav">
      {items.map(({ title, route }) => (
        <li key={title}>
          <Link
            to={`/${route || title}`}
            styleName="link"
            activeClassName={styles.active}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

MainNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      route: PropTypes.string
    })
  ).isRequired
};

export default MainNav;
