import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

export const BlogLayout = ({ children }) => (
  <section styleName="blog-layout">{children}</section>
);

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired
};
