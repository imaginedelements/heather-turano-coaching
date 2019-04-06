import React from "react";
import PropTypes from "prop-types";

import { HeroImage } from "./HeroImage";
import { Heading } from "../../../components/typography";

import "./index.module.scss";

const Hero = ({ img, alt, title, children }) => (
  <section styleName="hero">
    <HeroImage img={img} alt={alt} />
    <div styleName="top">
      <Heading size="xl" copy={`'${title}'`} color="lightscale-0" />
    </div>
    <div styleName="bottom">
      <div>{children}</div>
    </div>
  </section>
);

Hero.propTypes = {
  children: PropTypes.any.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Hero;
