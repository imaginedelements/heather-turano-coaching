import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../components/typography";

import { Section } from "../../components-app/layouts";
import { BlogCardList } from "../../components-static";

export const BlogPageTemplate = ({
  title: pageTitle,
  description: pageDescription
}) => (
  <>
    <Section title={pageTitle}>
      <Text size="lg">{pageDescription}</Text>
    </Section>
    <BlogCardList />
  </>
);

BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default BlogPageTemplate;
