import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const Paragraph = ({ size, copy, children }) => (
  <p styleName={`paragraph ${size}`}>{copy || children}</p>
);

Paragraph.propTypes = {
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

Paragraph.defaultProps = {
  copy: null,
  children: null
};

export default Paragraph;
