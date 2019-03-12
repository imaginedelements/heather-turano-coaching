import React from "react";
import PropTypes from "prop-types";

import { Content, Section } from "../../components";

export const AboutPageTemplate = ({ title, content, contentType }) => (
  <>
    <Section title={title}>
      <Content contentType={contentType} content={content} />
    </Section>
  </>
);

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};
