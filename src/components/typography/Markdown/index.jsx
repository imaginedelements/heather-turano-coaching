import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const Markdown = ({ children }) => (
  <section styleName="markdown">{children}</section>
);

Markdown.propTypes = {
  children: PropTypes.node.isRequired
};

export default Markdown;
