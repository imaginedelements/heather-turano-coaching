import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const Heading = ({ size, color, copy }) => {
  switch (size) {
    case "h1":
      return <h1 styleName={`${size} ${color}`}>{copy}</h1>;
    case "h2":
      return <h2 styleName={`${size} ${color}`}>{copy}</h2>;
    case "h3":
      return <h3 styleName={`${size} ${color}`}>{copy}</h3>;
    case "h4":
      return <h4 styleName={`${size} ${color}`}>{copy}</h4>;
    case "h5":
      return <h5 styleName={`${size} ${color}`}>{copy}</h5>;
    case "h6":
      return <h6 styleName={`${size} ${color}`}>{copy}</h6>;
    case "section":
      return <h6 styleName={`section ${color}`}>{copy}</h6>;
    case "grouping":
      return <h6 styleName={`grouping ${color}`}>{copy}</h6>;
    case "title":
      return <h3 styleName="title">{copy}</h3>;
    case "subtitle":
      return <h5 styleName="subtitle">{copy}</h5>;
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
    "para",
    "title",
    "subtitle"
  ]),
  /**
   * @type {string}
   */
  color: PropTypes.oneOf([
    "default",
    "grayscale-0",
    "grayscale-1",
    "grayscale-2",
    "grayscale-3",
    "grayscale-3",
    "light"
  ])
};

Heading.defaultProps = {
  size: "h1",
  color: "default"
};

export default Heading;
