import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../features/Header";
import logo from "../img/logo.png";
import styles from "./index.module.scss";

const TemplateWrapper = ({ children, ...restProps }) => (
  <div styleName="placeholder">
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <img src={logo} alt="under construction - heather turano coaching logo" />
    {/* <Header {...restProps} />
    <div styleName="content">{children()}</div> */}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
