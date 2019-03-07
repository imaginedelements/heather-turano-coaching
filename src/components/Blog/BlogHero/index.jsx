import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const BlogHero = ({ heroImage, heroImageAlt }) => (
  <div styleName="hero">
    <img src={heroImage} alt={heroImageAlt} />
  </div>
);

BlogHero.propTypes = {
  heroImage: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string.isRequired
};
