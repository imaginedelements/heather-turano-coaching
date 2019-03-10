import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import "./index.module.scss";

export const Link = ({ styleType, ...restProps }) => (
  <GatsbyLink styleName={styleType} {...restProps} />
);

Link.propTypes = {
  styleType: PropTypes.oneOf(["default"])
};

Link.defaultProps = {
  styleType: "default"
};
