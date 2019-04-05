import React from "react";
import PropTypes from "prop-types";

import { HeroImage } from "./HeroImage";
import { Heading } from "../../../components/typography";

import "./index.module.scss";

const Hero = ({ img, alt, title }) => (
  <section styleName="hero">
    <HeroImage img={img} alt={alt} />
    <div styleName="top">
      <Heading size="xl" copy={`'${title}'`} color="light" />
    </div>
    <div styleName="bottom">
      <div>InputPlaceholder</div>
    </div>
  </section>
);

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Hero;
