import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../Typography";
import "./index.module.scss";

const Section = ({ styleType, title, children }) => (
  <section styleName={`section ${styleType}`}>
    <header>
      <Heading copy={title} size="title" />
    </header>
    <article>
      <div>{children}</div>
    </article>
  </section>
);

Section.propTypes = {
  styleType: PropTypes.oneOf(["default", "secondary", "alt", "clear"]),
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

Section.defaultProps = {
  styleType: "default"
};

export default Section;
