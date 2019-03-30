import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const InputError = ({ message }) => (
  <div styleName="input-error">{message}</div>
);

InputError.propTypes = {
  message: PropTypes.string
};

export default InputError;
