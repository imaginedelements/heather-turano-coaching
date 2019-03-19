import React from "react";
import PropTypes from "prop-types";

import { InputError } from "../InputError";
import { InputLabel } from "../InputLabel";
import { InputControl } from "../InputControl";

import "./index.module.scss";

const InputText = ({
  name,
  value,
  label,
  type,
  placeholder,
  onChange,
  onBlur,
  isValid,
  isDisabled,
  isReadOnly,
  // isTouched,
  errorMessage
}) => (
  <InputControl>
    {label && <InputLabel label={label} for={name} isValid={isValid} />}
    <div>
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
    </div>
    {/* <> */}
    {!isValid && errorMessage && (
      <InputError isValid={isValid} message={errorMessage} />
    )}
    {/* </> */}
  </InputControl>
);

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "textarea"]),
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  isValid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  errorMessage: PropTypes.string
};

InputText.defaultProps = {
  label: null,
  type: "text",
  value: "",
  onChange: null,
  onBlur: null,
  isValid: true,
  isDisabled: false,
  isReadOnly: false,
  errorMessage: null
};

export default InputText;
