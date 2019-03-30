import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const Label = ({ size, copy, children, type }) =>
  type !== "input" ? (
    <p styleName={`label ${size}`}>{copy || children}</p>
  ) : (
    <span styleName={`label ${size}`}>{copy || children}</span>
  );

Label.propTypes = {
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
  children: PropTypes.string,
  /**
   * The type of the input determines what type of HTML
   * node is rendered
   */
  type: PropTypes.oneOf(["default", "input"])
};

Label.defaultProps = {
  copy: null,
  children: null,
  type: "default"
};

export default Label;
