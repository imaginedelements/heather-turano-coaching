import React from "react";
import PropTypes from "prop-types";

import { Markdown } from "../../components/typography";

const Content = ({ content: Content, className }) => (
  <Markdown>
    <div className={className}>
      <Content />
    </div>
  </Markdown>
);

Content.propTypes = {
  content: PropTypes.object.isRequired,
  className: PropTypes.string
};

Content.defaultProps = {
  className: ""
};

export default Content;
