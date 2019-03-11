import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components";
import { ServicesPageTemplate } from "./services.template";

export const query = graphql`
  query ServicesPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const Services = ({
  data: {
    markdownRemark: {
      frontmatter: { title }
    },
    html
  }
}) => (
  <Layout>
    <Helmet
      title="Services | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <ServicesPageTemplate title={title} content={html} contentType="html" />
  </Layout>
);

export default Services;
