import React from "react";
import PropTypes from "prop-types";

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: ""
};

export default Content;
