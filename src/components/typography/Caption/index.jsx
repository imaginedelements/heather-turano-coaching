import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const Caption = ({ size, copy, children }) => (
  <p styleName={`caption ${size}`}>{copy || children}</p>
);

Caption.propTypes = {
  /**
   * Size of the paragraph text
   */
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]).isRequired,
  /**
   * The copy of the paragraph font
   */
  copy: PropTypes.string,
  /**
   * The copy of the paragraph font
   */
  children: PropTypes.string
};

Caption.defaultProps = {
  copy: null,
  children: null
};

export default Caption;
