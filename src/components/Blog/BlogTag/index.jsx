import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { default as GatsbyLink } from "gatsby-link";

import styles from "./index.module.scss";

export const BlogTag = ({ tag }) => (
  <GatsbyLink styleName="blog-tag" to={`/tags/${kebabCase(tag)}/`}>
    {tag}
  </GatsbyLink>
);

BlogTag.propTypes = {
  tag: PropTypes.string.isRequired
};
