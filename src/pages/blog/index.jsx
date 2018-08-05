import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { PageHeader } from "../../components/PageHeader";
import { BlogList } from "../../components/BlogList";

const Blog = ({
  data: {
    allMarkdownRemark: { edges: posts }
  },
  ...restProps
}) => {
  console.log(restProps);
  return (
    <Fragment>
      <Helmet
        title="Blog | Heather Turano Coaching"
        bodyAttributes={{ class: "" }}
      />
      <PageHeader
        title="Blog"
        description="Cras mattis consectetur purus sit amet fermentum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      />
      <BlogList
        posts={posts.map(({ node }) => ({
          id: node.id,
          title: node.frontmatter.title,
          dateCreated: node.frontmatter.date,
          templateKey: node.frontmatter.templateKey,
          excerpt: node.excerpt,
          viewLinkRoute: node.fields.slug
        }))}
      />
    </Fragment>
  );
};

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default Blog;

export const query = graphql`
  query BlogList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
