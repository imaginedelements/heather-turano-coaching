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
import {
  faLongArrowLeft,
  faLongArrowRight
} from "@fortawesome/pro-regular-svg-icons";
import {
  faInstagram,
  faFacebookSquare,
  faPinterest,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import styles from "./index.module.scss";

library.add(
  faShare,
  faHeart,
  faVideo,
  faLink,
  faLongArrowLeft,
  faLongArrowRight,
  faInstagram,
  faFacebookSquare,
  faPinterest,
  faLinkedin
);

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
          title: "blog"
        }
      ]}
    />
    <section styleName="content">
      {children({
        ...restProps
      })}
    </section>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
