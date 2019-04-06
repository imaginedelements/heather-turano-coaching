import React from "react";
import { Link as GatsbyLink } from "gatsby";

import { Paragraph } from "../../../components/typography";

import { FormSignup } from "../../forms";
import "./index.module.scss";

const Footer = ({ quickLinks }) => (
  <footer styleName="footer">
    <div styleName="links">
      <div styleName="block">
        <header>
          <Paragraph size="md" color="grayscale-0">
            Explore
          </Paragraph>
        </header>
        <ul>
          {quickLinks.map(({ title, route }) => (
            <li key={title}>
              <GatsbyLink to={route || title.split(" ").join("-")}>
                <Paragraph size="md" color="white">
                  {title}
                </Paragraph>
              </GatsbyLink>
            </li>
          ))}
        </ul>
      </div>
      <div styleName="block">
        <header>
          <Paragraph size="md" color="grayscale-0">
            Join the movement
          </Paragraph>
        </header>
        <div styleName="mail">
          <FormSignup
            layout="inline"
            actionLabel="I have candy"
            placeholder={{
              email: "youremailaddress@awesome.com"
            }}
          />
        </div>
      </div>
    </div>
    <div styleName="credits">
      <div>
        <div styleName="info">
          <div>
            <Paragraph size="md" color="grayscale-0">
              Copyright &copy; 2018
            </Paragraph>
          </div>
          <div>
            <Paragraph size="md" color="grayscale-0">
              Heather Turano Coaching, LLC
            </Paragraph>
          </div>
          <div>
            <Paragraph size="md" color="grayscale-0">
              All Rights Reserved
            </Paragraph>
          </div>
        </div>
        <div styleName="created-by">
          <span>
            <Paragraph size="md" color="grayscale-0">
              Designed and developed by
            </Paragraph>{" "}
          </span>
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
