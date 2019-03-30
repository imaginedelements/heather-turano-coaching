import React from "react";
import PropTypes from "prop-types";
import { Heading } from "../typography";

import "./index.module.scss";

export const PageHeader = ({ title, description }) => (
  <header styleName="page-header">
    <Heading copy={title} size="h2" />
    {description ? <Heading copy={description} size="h4" /> : null}
  </header>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

PageHeader.defaultProps = {
  description: null
};
