import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShare,
  faHeart,
  faVideo,
  faLink,
  faCoffee,
  faListOl,
  faSeedling,
  faSpa,
  faHandHoldingHeart,
  faComments,
  faCheeseburger,
  faCoffeeTogo
} from "@fortawesome/pro-light-svg-icons";
import {
  faLongArrowLeft,
  faLongArrowRight
} from "@fortawesome/pro-regular-svg-icons";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

import { Header, Footer } from "../../components";

import "./index.module.scss";

library.add(
  faShare,
  faHeart,
  faVideo,
  faLink,
  faLongArrowLeft,
  faLongArrowRight,
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
  faCoffee,
  faListOl,
  faSeedling,
  faSpa,
  faHandHoldingHeart,
  faComments,
  faCheeseburger,
  faCoffeeTogo
);

const menuItems = [
  {
    title: "home",
    route: "/"
  },
  {
    title: "about",
    route: "/about"
  },
  {
    title: "work with me",
    route: "/work-with-me"
  },
  {
    title: "contact",
    route: "/contact"
  },
  {
    title: "blog",
    route: "/blog"
  }
];

const Layout = ({ children, ...restProps }) => (
  <div styleName="main">
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <Header {...restProps} navItems={menuItems} route={menuItems[0].route} />
    <section styleName="content">{children}</section>
    <Footer quickLinks={menuItems} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
