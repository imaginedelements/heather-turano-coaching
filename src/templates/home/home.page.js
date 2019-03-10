import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components";
import { HomePageTemplate } from "./home.template";

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          image
          subTitle
          title
          cta_input {
            buttonLabel
            placeholder
            shouldDisplay
          }
        }
      }
    }
  }
`;

const Home = ({
  data: {
    markdownRemark: {
      frontmatter: {
        hero: {
          image: heroImage,
          subTitle: heroSubTitle,
          title: heroTitle,
          cta_input: {
            buttonLabel: heroButtonLabel,
            placeholder: heroInputPlaceholder,
            shouldDisplay: shouldHeroInputDisplay
          }
        }
      }
    }
  }
}) => {
  console.log(heroImage);
  return (
    <Layout>
      <Helmet
        title="Home | Heather Turano Coaching"
        bodyAttributes={{ class: "" }}
      />
      <HomePageTemplate heroTitle={heroImage} />
    </Layout>
  );
};

export default Home;
