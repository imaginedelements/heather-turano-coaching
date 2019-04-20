import React from "react";
import PropTypes from "prop-types";
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
          heroCta {
            label
            actionRoute
          }
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

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export default Home;
