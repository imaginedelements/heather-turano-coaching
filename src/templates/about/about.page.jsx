import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
import { AboutPageTemplate } from "./about.template";

export const pageQuery = graphql`
  query AboutPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        main {
          title
          body
          backgroundImage {
            imgAlt
            imgLocation
            imgHeight
          }
        }
        sectionOne {
          title
          body
        }
        sectionTwo {
          title
          avatar
          body
        }
        callToAction {
          title
          body
          placeholder
          label
        }
      }
    }
  }
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { main, sectionOne, sectionTwo, callToAction }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="About | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <AboutPageTemplate
      main={main}
      sectionOne={sectionOne}
      sectionTwo={sectionTwo}
      callToAction={callToAction}
    />
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
