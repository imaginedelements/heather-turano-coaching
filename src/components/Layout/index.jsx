import React from "react";
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

import { Header } from "../Header";
import { Footer } from "../Footer";

import "./index.module.scss";

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

const Layout = ({ children, ...restProps }) => (
  <div styleName="main">
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <Header
      {...restProps}
      navItems={[
        {
          title: "home",
          route: "/"
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
    <section styleName="content">{children}</section>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
