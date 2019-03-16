import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
import { WorkWithMePageTemplate } from "./work-with-me.template";

export const query = graphql`
  query WorkWithMePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        main {
          title
          blurb
          contactForm {
            inputPlaceholder
            emailPlaceholder
            buttonLabel
          }
        }
        pillars {
          title
          description
          pillarList {
            title
            icon
            blurb
          }
        }
        approach {
          title
          body
          image
        }
      }
    }
  }
`;

const Services = ({
  data: {
    markdownRemark: {
      frontmatter: { main, pillars, approach }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Services | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <WorkWithMePageTemplate main={main} pillars={pillars} approach={approach} />
  </Layout>
);

export default Services;
