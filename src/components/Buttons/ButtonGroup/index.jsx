import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import styles from "./index.style.scss";

export const ButtonGroup = ({ layout, children }) => (
  <div styleName={`grouping ${layout}`}>{children}</div>
);

ButtonGroup.propTypes = {
  layout: PropTypes.oneOf(["inline", "stacked"]),
  children: PropTypes.node.isRequired
};

ButtonGroup.defaultProps = {
  layout: "inline"
};

const ButtonGroupStyled = CSSModules(ButtonGroup, styles, {
  allowMultiple: true
});
export default ButtonGroupStyled;
