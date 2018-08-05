import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Content, { HTMLContent } from "../components/Content";
import { Link } from "../components/Link";
import { Icon } from "../components/Icon";
import {
  BlogContainer,
  BlogHeader,
  BlogContent,
  BlogTagGroup,
  BlogTag,
  BlogNavigation,
  BlogHero,
  BlogLayout
} from "../components/Blog";
import { SocialBar } from "../components/SocialBar";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  dateCreated,
  heroImage,
  heroImageAlt
}) => {
  const PostContent = contentComponent || Content;
  console.log(heroImage, heroImageAlt);
  return (
    <BlogLayout>
      <BlogHero heroImage={heroImage} heroImageAlt={heroImageAlt} />
      <BlogContainer>
        {helmet || ""}
        <BlogHeader
          title={title}
          description={description}
          backLinkRoute="/blog"
          backLinkText="Back to the list"
          dateCreated={dateCreated}
          author="Heather Turano"
        />
        <BlogContent>
          <PostContent content={content} />
          <BlogTagGroup tags={tags} />
          <SocialBar />
        </BlogContent>
        <BlogNavigation tags={tags} />
      </BlogContainer>
    </BlogLayout>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data: { markdownRemark: post } }) => (
  <BlogPostTemplate
    content={post.html}
    contentComponent={HTMLContent}
    description={post.frontmatter.description}
    helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
    tags={post.frontmatter.tags}
    title={post.frontmatter.title}
    dateCreated={post.frontmatter.date}
    heroImage={post.frontmatter.heroImage}
    heroImageAlt={post.frontmatter.heroImageAlt}
  />
);

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        heroImage
        heroImageAlt
      }
    }
  }
`;
