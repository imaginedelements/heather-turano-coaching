import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const InputLabel = ({ label, for: htmlFor, isValid }) => (
  <label styleName={`input-label ${!isValid ? "error" : ""}`} htmlFor={htmlFor}>
    {label}
  </label>
);

InputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  for: PropTypes.string.isRequired,
  isValid: PropTypes.bool
};

InputLabel.defaultProps = {
  isValid: true,
  styleType: "default"
};

export default InputLabel;
