import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components/Layout";
import { AboutPageTemplate } from "./about.template";

const About = ({
  id,
  markdownRemark: {
    frontmatter: { title }
  },
  html
}) => {
  console.log(id);
  return (
    <Layout>
      <Helmet
        title="About | Heather Turano Coaching"
        bodyAttributes={{ class: "" }}
      />
      <AboutPageTemplate title={title} content={html} contentType="html" />
    </Layout>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default About;
