import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import { inputComponentMap } from "../utils";

const FormField = ({
  type,
  name,
  placeholder,
  label
  // options,
}) => (
  <Field name={name}>
    {({ field, form: { touched, errors } }) => {
      const InputComponent = inputComponentMap[type];
      const { name: fieldName } = field;
      const derrivedProps = {
        label,
        placeholder,
        isTouched: touched[fieldName],
        errorMessage: errors[fieldName],
        isValid: errors[fieldName]
      };
      return <InputComponent {...field} {...derrivedProps} />;
    }}
  </Field>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "textarea", "email"]).isRequired,
  onChange: PropTypes.string,
  onBlur: PropTypes.string
};

FormField.defaultProps = {
  onChange: null,
  onBlur: null
};

export default FormField;
