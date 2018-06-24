import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.scss";

export const Heading = ({ size, color, copy }) => {
  switch (size) {
    case "h1":
      return <h1 styleName={size}>{copy}</h1>;
    case "h2":
      return <h2 styleName={size}>{copy}</h2>;
    case "h3":
      return <h3 styleName={size}>{copy}</h3>;
    case "h4":
      return <h4 styleName={size}>{copy}</h4>;
    case "h5":
      return <h5 styleName={size}>{copy}</h5>;
    case "section":
      return <h6 styleName={`section ${color}`}>{copy}</h6>;
    case "grouping":
      return <h6 styleName={`grouping ${color}`}>{copy}</h6>;
    default:
      return <h1>{copy}</h1>;
  }
};

Heading.propTypes = {
  /**
   * @type {string}
   */
  copy: PropTypes.string.isRequired,
  /**
   * @type {string}
   */
  size: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "section",
    "grouping",
    "para"
  ]),
  /**
   * @type {string}
   */
  color: PropTypes.oneOf([
    "default",
    "grayscale-0",
    "grayscale-1",
    "grayscale-2",
    "grayscale-3"
  ])
};

Heading.defaultProps = {
  size: "h1",
  color: "default"
};

export default Heading;
