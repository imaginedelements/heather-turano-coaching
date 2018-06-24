import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./index.module.scss";

export const Icon = ({ iconSize, icon, iconColor, spin }) => (
  <div styleName={`${iconSize} ${iconColor}`} className="icon">
    <FontAwesomeIcon icon={icon} fixedWidth spin={spin} />
  </div>
);

Icon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  iconSize: PropTypes.oneOf([
    "tiny",
    "xxs",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
    "major",
    "minor"
  ]),
  iconColor: PropTypes.oneOf([
    "default",
    "primary",
    "grayscale-0",
    "grayscale-1",
    "grayscale-2",
    "grayscale-3",
    "lightscale-0",
    "lightscale-1",
    "lightscale-2",
    "lightscale-3",
    "primary",
    "secondary",
    "tertiary",
    "invalid",
    "success",
    "warning",
    "accent"
  ]),
  spin: PropTypes.bool
};

Icon.defaultProps = {
  iconColor: "default",
  iconSize: "xxs",
  spin: false
};

export default Icon;
