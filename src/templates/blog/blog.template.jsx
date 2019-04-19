import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../components/typography";

import { Section } from "../../components-app/layouts";
import { BlogList, BlogCard } from "../../components-app/blog";

export const BlogPageTemplate = ({
  title: pageTitle,
  description: pageDescription,
  posts
}) => (
  <>
    <Section title={pageTitle}>
      <Text size="lg">{pageDescription}</Text>
    </Section>
    <BlogList>
      {posts &&
        posts.map(
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
