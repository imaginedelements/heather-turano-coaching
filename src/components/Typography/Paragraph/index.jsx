import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

export const Paragraph = ({ color, copy }) => (
  <p styleName={`${color}`}>{copy}</p>
);

Paragraph.propTypes = {
  /**
   * The text of the paragraph element
   * @type {string}
   */
  copy: PropTypes.string.isRequired,
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
  ])
};

Paragraph.defaultProps = {
  color: "grayscale-1"
};

export default Paragraph;
