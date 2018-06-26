import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

export const BlogContent = ({ children }) => (
  <section styleName="blog-content">{children}</section>
);

BlogContent.propTypes = {
  children: PropTypes.node.isRequired
};
