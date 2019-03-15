import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link as GatsbyLink } from "gatsby";

import "./index.module.scss";

export const BlogTag = ({ tag }) => (
  <GatsbyLink styleName="blog-tag" to={`/tags/${kebabCase(tag)}/`}>
    {tag}
  </GatsbyLink>
);

BlogTag.propTypes = {
  tag: PropTypes.string.isRequired
};
