import React from "react";
import { Link as GatsbyLink } from "gatsby";

import "./index.module.scss";

const Footer = ({ quickLinks }) => (
  <footer styleName="footer">
    <div styleName="links">
      <div styleName="block">
        <header>Explore</header>
        <ul>
          {quickLinks.map(({ title, route }) => (
            <li key={title}>
              <GatsbyLink to={route || title.split(" ").join("-")}>
                {title}
              </GatsbyLink>
            </li>
          ))}
        </ul>
      </div>
      <div styleName="block">
        <header>Join the movement</header>
      </div>
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
          <a
            href="http://www.imaginedelements.com"
            target="_blank"
            rel="noopener noreferrer"
          >
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

export default Footer;
