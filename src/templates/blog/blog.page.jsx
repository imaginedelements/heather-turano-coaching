import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
import BlogPageTemplate from "./blog.template";

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { key: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            key
            prompt
            pageKey
            protected
            category
            thumbnail
            thumbnailAlt
            subTitle
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;

const Blog = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description }
    },
    allMarkdownRemark: { edges: posts }
  }
}) => (
  <Layout>
    <Helmet
      title="Blog | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <BlogPageTemplate title={title} description={description} posts={posts} />
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired
};

export default Blog;
