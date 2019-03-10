import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components";
import { AboutPageTemplate } from "./about.template";

export const query = graphql`
<<<<<<< HEAD
  query AboutPageQuery($id: String!) {
=======
  query($id: String!) {
>>>>>>> develop
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { title }
    },
    html
  }
}) => (
  <Layout>
    <Helmet
      title="About | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <AboutPageTemplate title={title} content={html} contentType="html" />
  </Layout>
);

export default About;
