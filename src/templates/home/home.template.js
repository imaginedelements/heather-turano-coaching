import React from "react";
import PropTypes from "prop-types";

import { Content } from "../../components/Content";

export const HomePageTemplate = ({ title, content, contentType }) => (
  <>
    <div>{title}</div>
    <Content contentType={contentType} content={content} />
  </>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};
