import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "../Typography";

import "./index.module.scss";

const Testimonial = ({ image, type, location, quote }) => (
  <div styleName="testimonial">
    <div styleName="image">
      <div />
      <img src={image} alt={type} />
    </div>
    <div styleName="content">
      <Paragraph copy={quote} />
      <div styleName="meta">
        <span>{type}</span>
        <span>&nbsp;from&nbsp;</span>
        <span>{location}</span>
      </div>
    </div>
  </div>
);

Testimonial.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};

export default Testimonial;
