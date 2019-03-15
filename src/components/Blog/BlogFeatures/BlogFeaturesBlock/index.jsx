import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

export const BlogFeaturesBlock = ({ title, children }) => (
  <section styleName="block">
    <header>{title}</header>
    {children()}
  </section>
);

BlogFeaturesBlock.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
};
