import React from "react";
import PropTypes from "prop-types";

import { Content } from "../../components/Content";

export const AboutPageTemplate = ({ title, content, contentType }) => (
  <>
    <div>{title}</div>
    <Content contentType={contentType} content={content} />
  </>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};
