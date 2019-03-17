import React from "react";
import PropTypes from "prop-types";

const InputText = ({
  name,
  value,
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
      type={`text ${!isValid ? "invalid" : ""}`}
      id={name}
      name={name}
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
  value: PropTypes.string,
  onChange: PropTypes.string,
  onBlur: PropTypes.string,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool
};

InputText.defaultProps = {
  value: "",
  onChange: null,
  onBlur: null,
  isValid: true,
  isDisabled: false,
  isReadOnly: false
};

export default InputText;
