import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const InputContainer = ({ children }) => (
  <div styleName="input-container">{children}</div>
);

InputContainer.propTypes = {
  children: PropTypes.string
};

export default InputContainer;
