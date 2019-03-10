import React from "react";
import PropTypes from "prop-types";

import { Hero } from "../../components";

export const HomePageTemplate = ({
  hero: { heroImage, heroTitle, heroSubTitle },
  callToAction,
  introduction,
  testimonials
}) => {
  console.log(callToAction, introduction, testimonials);
  return (
    <>
      <Hero
        img={heroImage}
        alt="hero image"
        title={heroTitle}
        subTitle={heroSubTitle}
      />
    </>
  );
};

HomePageTemplate.propTypes = {
  callToAction: PropTypes.object.isRequired,
  hero: PropTypes.object.isRequired,
  introduction: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired
};
