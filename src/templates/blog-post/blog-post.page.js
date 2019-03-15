import React from "react";
import { graphql } from "gatsby";

import { Layout } from "../../components";
import { BlogPostPageTemplate } from "./blog-post.template";

export const query = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        key
        description
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
`;

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date: dateCreated, title, description, tags }
    }
  },
  pageContext: { pagePrev, pageNext }
}) => (
  <Layout>
    <BlogPostPageTemplate
      content={html}
      contentType="html"
      description={description}
      tags={tags}
      title={title}
      dateCreated={dateCreated}
      pagePrev={pagePrev}
      pageNext={pageNext}
    />
  </Layout>
);

export default BlogPost;
