import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "./index.module.scss";

library.add(fal, fab);

export const Icon = ({ icon, size, spin }) => (
  <div styleName={`icon ${size}`}>
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
    "heading-xl",
    "heading-lg",
    "heading-md",
    "heading-sm",
    "xl",
    "lg",
    "md",
    "sm",
    "xs"
  ]).isRequired,
  /**
   * Include if the icon should spin
   */
  spin: PropTypes.bool
};

Icon.defaultProps = {
  spin: false
};
export default Icon;
