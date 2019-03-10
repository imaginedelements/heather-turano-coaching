import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../Typography";
import "./index.module.scss";

const Section = ({ title, children }) => (
  <section styleName="section">
    <header>
      <Heading copy={title} size="title" />
    </header>
    <article>
      <div>{children}</div>
    </article>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Section;
