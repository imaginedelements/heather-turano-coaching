import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

export const BlogContainer = ({ children }) => (
  <section styleName="blog">{children}</section>
);

BlogContainer.propTypes = {
  children: PropTypes.node.isRequired
};
