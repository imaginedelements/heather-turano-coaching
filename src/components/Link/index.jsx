import React from "react";
import PropTypes from "prop-types";
import { default as GatsbyLink } from "gatsby-link";

import styles from "./index.module.scss";

export const Link = ({ styleType, ...restProps }) => (
  <GatsbyLink styleName={styleType} {...restProps} />
);

Link.propTypes = {
  styleType: PropTypes.oneOf(["default"])
};

Link.defaultProps = {
  styleType: "default"
};
