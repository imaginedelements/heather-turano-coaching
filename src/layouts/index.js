import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShare,
  faHeart,
  faVideo,
  faLink
} from "@fortawesome/pro-light-svg-icons";
import { faLongArrowLeft } from "@fortawesome/pro-regular-svg-icons";
import Header from "../components/Header";

import styles from "./index.module.scss";

library.add(faShare, faHeart, faVideo, faLink, faLongArrowLeft);

const TemplateWrapper = ({ children, ...restProps }) => (
  <div styleName="main">
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <Header
      {...restProps}
      navItems={[
        {
          title: "home"
        },
        {
          title: "about"
        },
        {
          title: "services"
        },
        {
          title: "blogs"
        }
      ]}
    />
    <div styleName="content">
      {children({
        ...restProps
      })}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
