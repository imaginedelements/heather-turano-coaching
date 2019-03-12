import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { Layout, Section } from "../../components";
import { BlogList } from "../../components/Blog";

const Blog = () => (
  <StaticQuery
    query={graphql`
      query Blog {
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
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges: posts } }) => (
      <Layout>
        <Section title="Blog"></Section>
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
      </Layout>
    )}
  />
);

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default Blog;
