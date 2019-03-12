import React from "react";
import PropTypes from "prop-types";

import { Content, Section } from "../../components";

export const ServicesPageTemplate = ({ title, content, contentType }) => (
  <Section title="Services">
    <Content contentType={contentType} content={content} />
  </Section>
);

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};
