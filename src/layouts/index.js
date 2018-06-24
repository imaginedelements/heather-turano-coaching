import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";

import styles from "./index.module.scss";

const TemplateWrapper = ({ children, ...restProps }) => (
  <div styleName="main">
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <Header {...restProps} />
    <div styleName="content">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
