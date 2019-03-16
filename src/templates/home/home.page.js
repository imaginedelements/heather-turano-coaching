import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
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
            clientImage
            clientType
            clientLocation
            clientQuote
          }
        }
        method {
          methodTitle
          methodSteps {
            description
            icon
            label
          }
        }
      }
    }
  }
`;

const Home = ({
  data: {
    markdownRemark: {
      frontmatter: { callToAction, hero, introduction, testimonials, method }
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
      method={method}
    />
  </Layout>
);

export default Home;
