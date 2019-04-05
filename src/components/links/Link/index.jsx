import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

export const Link = ({ children, ...restProps }) => (
  <GatsbyLink {...restProps}>{children}</GatsbyLink>
);

Link.propTypes = {
  children: PropTypes.any.isRequired
};

export default Link;
