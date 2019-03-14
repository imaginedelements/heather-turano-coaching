import React from "react";
import PropTypes from "prop-types";

import { Section, Paragraph } from "../../components";
import { BlogList } from "../../components/Blog";

const BlogPageTemplate = ({ title, description, posts }) => (
  <>
    <Section title={title}>
      <Paragraph>{description}</Paragraph>
    </Section>
    <BlogList
      posts={posts.map(({ node }) => ({
        id: node.id,
        title: node.frontmatter.title,
        dateCreated: node.frontmatter.date,
        key: node.frontmatter.key,
        excerpt: node.excerpt,
        viewLinkRoute: node.fields.slug
      }))}
    />
  </>
);

BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
};

export default BlogPageTemplate;
