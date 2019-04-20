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
  }
`;

const Blog = ({
  data: {
    markdownRemark: {
      frontmatter: { title, description }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Blog | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <BlogPageTemplate title={title} description={description} />
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired
};

export default Blog;
