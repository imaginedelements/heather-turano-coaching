import React from "react";
import PropTypes from "prop-types";

import { Hero, Section } from "../../components";
import { Paragraph } from "../../components/Typography";

export const HomePageTemplate = ({
  hero: { heroImage, heroTitle, heroSubTitle },
  callToAction,
  introduction: {
    introTitle,
    introDescription
    // introAction: { actionLabel, actionRoute }
  },
  testimonials
}) => {
  console.log(callToAction, testimonials);
  return (
    <>
      <Hero
        img={heroImage}
        alt="hero image"
        title={heroTitle}
        subTitle={heroSubTitle}
      />
      <Section title={introTitle}>
        <Paragraph copy={introDescription} />
      </Section>
    </>
  );
};

HomePageTemplate.propTypes = {
  callToAction: PropTypes.object.isRequired,
  hero: PropTypes.object.isRequired,
  introduction: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired
};
