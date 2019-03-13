import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components";
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
          overviewBlub
        }
        detail {
          detailTitle
          detailAvatarImage
          detailBlurb
        }
        callToAction {
          ctaButtonLabel
          catTitle
          ctaBlurb
          ctaInputPlaceholder
        }
      }
    }
  }
`;

const About = ({
  data: {
    markdownRemark: {
      frontmatter: { main, overview, detail, callToAction }
    },
    html
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

export default About;
