import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import { inputComponentMap } from "../utils";

const FormField = ({
  label,
  name,
  placeholder,
  type
  // options,
}) => {
  const InputControl = inputComponentMap.control;
  const InputContainer = inputComponentMap.container;
  const InputComponent = inputComponentMap[type];
  const InputLabel = inputComponentMap.label;
  const InputError = inputComponentMap.error;

  return (
    <InputControl>
      <Field name={name}>
        {(({ field, form: { touched, errors } }) => {
          const { name: fieldName } = field;
          const isTouched = touched[fieldName];
          const errMessage = errors[fieldName];
          const isValid = isTouched && errMessage;

          return (
            <>
              <InputLabel label={label} for={fieldName} isValid={isValid} />
              <InputContainer>
                <InputComponent {...field} placeholder={placeholder} />
              </InputContainer>
              {!isValid && (
                <InputError isValid={isValid} message={errMessage} />
              )}
            </>
          );
        })()}
      </Field>
    </InputControl>
  );
};

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
