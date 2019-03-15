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

import { Header } from "../Header";
import { Footer } from "../Footer";
import { UnderConstruction } from "../UnderConstruction";

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

const Layout = ({ children, ...restProps }) => (
  <UnderConstruction>
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
  </UnderConstruction>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
