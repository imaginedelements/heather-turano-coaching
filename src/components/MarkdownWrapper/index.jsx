import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const MarkdownWrapper = ({ children }) => (
  <section styleName="markdown">{children}</section>
);

MarkdownWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default MarkdownWrapper;
