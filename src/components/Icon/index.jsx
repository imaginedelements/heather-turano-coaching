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
    "grayscale-0",
    "grayscale-1",
    "grayscale-2",
    "grayscale-3",
    "lightscale-0",
    "lightscale-1",
    "lightscale-2",
    "lightscale-3",
    "primary-0",
    "primary-1",
    "primary-2",
    "primary-3",
    "secondary-0",
    "secondary-1",
    "secondary-2",
    "secondary-3",
    "accent-0",
    "accent-1",
    "accent-2",
    "accent-3",
    "invalid-0",
    "invalid-1",
    "invalid-2",
    "invalid-3",
    "warning-0",
    "warning-1",
    "warning-2",
    "warning-3",
    "success-0",
    "success-1",
    "success-2",
    "success-3"
  ]),
  spin: PropTypes.bool
};

Icon.defaultProps = {
  iconColor: "default",
  iconSize: "xxs",
  spin: false
};

export default Icon;
