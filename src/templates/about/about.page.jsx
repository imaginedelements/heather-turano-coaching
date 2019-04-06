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
          mainTitle
          mainImage {
            imgAlt
            imgLocation
            imgXPosition
            imgYPosition
            imgHeight
          }
          mainBlurb
        }
        overview {
          overviewTitle
          body
        }
        detail {
          detailTitle
          detailAvatarImage
          body
        }
        callToAction {
          ctaTitle
          ctaBlurb
          ctaInputPlaceholder
          ctaButtonLabel
        }
      }
    }
  }
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { main, overview, detail, callToAction }
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
      overview={overview}
      detail={detail}
      callToAction={callToAction}
    />
  </Layout>
);

About.propTypes = {
  data: PropTypes.object.isRequired
};

export default About;
