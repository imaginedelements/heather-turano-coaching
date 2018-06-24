import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../features/Header";
// import logo from '../img/logo.png';
import "./all.sass";
import "./index.module.css";

const TemplateWrapper = ({ children }) => (
  <Fragment>
    <Header />
    {/* <Helmet title="Home | Heather Turano Coaching" bodyAttributes={{ class: ''}}/> */}
    {/* <img
      src={logo}
      alt="under construction - heather turano coaching logo"
    /> */}
    {/* <div>{children()}</div> */}
  </Fragment>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
