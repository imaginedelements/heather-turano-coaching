import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

export const BlogFeatures = ({ children }) => (
  <section styleName="blog-features">{children}</section>
);

BlogFeatures.propTypes = {
  children: PropTypes.node.isRequired
};
