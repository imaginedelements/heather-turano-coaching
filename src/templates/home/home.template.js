import React from "react";
import PropTypes from "prop-types";

export const HomePageTemplate = ({
  hero,
  callToAction,
  introduction,
  testimonials
}) => {
  console.log(hero, callToAction, introduction, testimonials);
  return (
    <>
      <div>Template</div>
    </>
  );
};

HomePageTemplate.propTypes = {
  callToAction: PropTypes.object.isRequired,
  hero: PropTypes.object.isRequired,
  introduction: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired
};
