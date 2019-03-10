import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components";
import { HomePageTemplate } from "./home.template";

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        callToAction {
          ctaPlaceholder
          ctaButtonLabel
        }
        hero {
          heroImage
          heroTitle
          heroSubTitle
        }
        introduction {
          introTitle
          introDescription
        }
        testimonials {
          testimonialTitle
          testimonialEntries {
            clientType
            clientLocation
            clientQuote
          }
        }
      }
    }
  }
`;

const Home = ({
  data: {
    markdownRemark: {
      frontmatter: { callToAction, hero, introduction, testimonials }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <HomePageTemplate
      hero={hero}
      callToAction={callToAction}
      introduction={introduction}
      testimonials={testimonials}
    />
  </Layout>
);

export default Home;
