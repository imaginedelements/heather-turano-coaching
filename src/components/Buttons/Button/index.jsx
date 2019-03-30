import React from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";

import Label from "@bit/cadent.components.typography.label";
import Icon from "@bit/cadent.components.typography.icon";

import styles from "./index.style.scss";

export const Button = ({
  label,
  styleType,
  htmlType,
  disabled,
  loading,
  onClick,
  onSubmit
}) => (
  /* eslint-disable react/button-has-type */
  <button
    styleName={styleType}
    type={htmlType}
    disabled={disabled || loading}
    onClick={onClick}
    onSubmit={onSubmit}
  >
    {loading ? (
      <Icon
        size={styleType === "small" ? "md" : "lg"}
        copy={label}
        icon="spinner"
        spin
      />
    ) : (
      <Label size={styleType === "small" ? "md" : "lg"}>{label}</Label>
    )}
  </button>
  /* eslint-enable react/button-has-type */
);

Button.propTypes = {
  /**
   * the button text
   */
  label: PropTypes.string.isRequired,
  /**
   * the type of button style that should be applied
   */
  styleType: PropTypes.oneOf([
    "primary",
    "secondary",
    "alt",
    "small",
    "destructive"
  ]),
  /**
   * the htmlType of the button
   */
  htmlType: PropTypes.oneOf(["button", "submit", "reset"]),

  /**
   * the action that is fired after the user clicks the button
   */
  onClick: PropTypes.func,
  /**
   * the action that is fired after the user submits the form
   */
  onSubmit: PropTypes.func,
  /**
   * a truthy value disables the button and the user can no longer click on it
   */
  disabled: PropTypes.bool,
  /**
   * a truthy value disables the button and displays a loading spinner.
   * If a button is loading, then it is also disabled as well
   */
  loading: PropTypes.bool
};

Button.defaultProps = {
  styleType: "primary",
  htmlType: "button",
  disabled: false,
  onClick: null,
  onSubmit: null,
  loading: false
};

const ButtonStyled = CSSModules(Button, styles, {
  allowMultiple: true
});
export default ButtonStyled;
