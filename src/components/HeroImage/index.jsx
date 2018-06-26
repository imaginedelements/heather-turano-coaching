import React from "react";
import PropTypes from "prop-types";

export const HeroImage = ({ img, alt }) => (
  <div style="hero">
    <img src={img} alt={alt} />
  </div>
);
