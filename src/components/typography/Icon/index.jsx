import React from "./node_modules/react";
import PropTypes from "./node_modules/prop-types";

import { FontAwesomeIcon } from "./node_modules/@fortawesome/react-fontawesome";
import { library } from "./node_modules/@fortawesome/fontawesome-svg-core";
import { fal } from "./node_modules/@fortawesome/pro-light-svg-icons";
import { fab } from "./node_modules/@fortawesome/free-brands-svg-icons";

import "./index.module.scss";

library.add(fal, fab);

const Icon = ({ icon, size, position, spin, color }) => (
  <div className={`icon ${color}`} styleName={`icon ${size} ${position}`}>
    <FontAwesomeIcon fixedWidth icon={["fal", icon]} spin={spin} />
  </div>
);

Icon.propTypes = {
  /**
   * Icon string name. example, "file-export".
   * Always use "light" icons
   * it should match an icon from: https://fontawesome.com/icons?d=gallery
   */
  icon: PropTypes.string.isRequired,
  /**
   * icon type consists of a typography type and a size
   */
  size: PropTypes.oneOf([
    "hxl",
    "hlg",
    "hmd",
    "hsm",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
  ]).isRequired,
  /**
   * Include if the icon should spin
   */
  spin: PropTypes.bool,
  /**
   * The position of the icon inside of its container
   */
  position: PropTypes.oneOf(["default", "center"]),
  color: PropTypes.string.isRequired
};

Icon.defaultProps = {
  spin: false,
  position: "default"
};

export default Icon;
