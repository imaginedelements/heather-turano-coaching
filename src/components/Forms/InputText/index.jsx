import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const InputText = ({
  name,
  value,
  type,
  placeholder,
  onChange,
  onBlur,
  isValid,
  isDisabled,
  isReadOnly,
  ...restFieldProps
}) => {
  console.log("restFieldProps", restFieldProps);
  return (
    <input
      id={name}
      name={name}
      type={type}
      styleName={`input-${type} ${!isValid ? "invalid" : ""}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={isDisabled}
      readOnly={!onChange || isReadOnly}
    />
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "textarea"]),
  value: PropTypes.string,
  onChange: PropTypes.string,
  onBlur: PropTypes.string,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool
};

InputText.defaultProps = {
  type: "text",
  value: "",
  onChange: null,
  onBlur: null,
  isValid: true,
  isDisabled: false,
  isReadOnly: false
};

export default InputText;
