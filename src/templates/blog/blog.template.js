import React from "react";
import PropTypes from "prop-types";

import { Section, Paragraph } from "../../components";
import { BlogList, BlogCard } from "../../components/Blog";

export const BlogPageTemplate = ({
  title: pageTitle,
  description: pageDescription,
  posts
}) => (
  <>
    <Section title={pageTitle}>
      <Paragraph>{pageDescription}</Paragraph>
    </Section>
    <BlogList>
      {posts.map(
        ({
          node: {
            id,
            fields: { slug: blogLinkRoute },
            frontmatter: {
              category,
              title,
              prompt,
              date: dateCreated,
              thumbnail,
              thumbnailAlt
            }
          }
        }) => (
          <BlogCard
            key={id}
            category={category}
            title={title}
            prompt={prompt}
            blogLinkRoute={blogLinkRoute}
            dateCreated={dateCreated}
            thumbnail={thumbnail}
            thumbnailAlt={thumbnailAlt}
          />
        )
      )}
    </BlogList>
  </>
);

BlogPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired
};

export default BlogPageTemplate;
