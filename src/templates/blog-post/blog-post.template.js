import React from "react";
import PropTypes from "prop-types";

import { Content } from "../../components/Content";
import {
  BlogContainer,
  BlogHeader,
  BlogContent,
  BlogTagGroup,
  BlogNavigation,
  BlogHero,
  BlogLayout,
  BlogFeatures
} from "../../components/Blog";

export const BlogPostTemplate = ({
  content,
  contentType,
  description,
  tags,
  title,
  dateCreated,
  heroImage,
  heroImageAlt
}) => (
  <BlogLayout>
    <BlogHero heroImage={heroImage} heroImageAlt={heroImageAlt} />
    <div className="content">
      <BlogContainer>
        <BlogHeader
          title={title}
          description={description}
          backLinkRoute="/blog"
          backLinkText="Back to the list"
          dateCreated={dateCreated}
          author="Heather Turano"
        />
        <BlogContent>
          <Content contentType={contentType} content={content} />
          <BlogTagGroup tags={tags} />
        </BlogContent>
        <BlogNavigation tags={tags} />
      </BlogContainer>
      <BlogFeatures
        features={[
          {
            title: "Peep the instagram",
            feature: () => <div>Bomb ass instagram content</div>
          }
        ]}
      />
    </div>
  </BlogLayout>
);

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentType: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array,
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string.isRequired
};
