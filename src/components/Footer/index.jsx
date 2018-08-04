import React from "react";
// import PropTypes from "prop-types";
import { default as GatsbyLink } from "gatsby-link";

import styles from "./index.module.scss";

export const Footer = () => (
  <footer styleName="footer">
    <div styleName="links">
      <div />
    </div>
    <div styleName="credits">
      <div>
        <div styleName="info">
          <div>Copyright &copy; 2018</div>
          <div>Heather Turano Coaching, LLC</div>
          <div>All Rights Reserved</div>
        </div>
        <div styleName="created-by">
          <span>Designed and developed by </span>
          <a href="http://www.imaginedelements.com" target="_blank">
            Imagined Elements, LLC
          </a>
        </div>
      </div>
      <div styleName="privacy">
        <GatsbyLink to="/privacy-policy">
          Privary Policy &amp; Terms of Use
        </GatsbyLink>
      </div>
    </div>
  </footer>
);
