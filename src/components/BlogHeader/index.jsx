import React from "react";
import PropTypes from "prop-types";
import { Heading, Paragraph } from "../Typography";

import styles from "./index.module.scss";

export const BlogHeader = ({ title, description }) => (
  <header styleName="page-header">
    <Heading copy={title} size="h4" />
    {description ? <Paragraph copy={description} /> : null}
  </header>
);

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

BlogHeader.defaultProps = {
  description: null
};
