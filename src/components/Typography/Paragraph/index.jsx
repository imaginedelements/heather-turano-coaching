import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const Paragraph = ({ color, copy, children }) => (
  <p styleName={`${color}`}>{copy || children}</p>
);

Paragraph.propTypes = {
  /**
   * The text of the paragraph element
   * @type {string}
   */
  copy: PropTypes.string,
  /**
   * The color of the text
   * @type {string}
   */
  color: PropTypes.oneOf([
    "grayscale-0",
    "grayscale-1",
    "grayscale-2",
    "grayscale-3",
    "lightscale-0",
    "lightscale-1",
    "lightscale-2",
    "lightscale-3",
    "invalid",
    "success"
  ]),
  children: PropTypes.any
};

Paragraph.defaultProps = {
  color: "grayscale-1",
  copy: null,
  children: null
};

export default Paragraph;
