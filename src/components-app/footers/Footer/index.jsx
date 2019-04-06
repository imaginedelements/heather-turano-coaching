import React from "react";
import { Link as GatsbyLink } from "gatsby";

import { Paragraph, Text } from "../../../components/typography";

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
          <Text size="sm" color="grayscale-0">
            Copyright &copy; 2018, Heather Turano Coaching, LLC, All Rights
            Reserved
          </Text>
        </div>
        <div styleName="created-by">
          <Text size="sm" color="grayscale-0">
            Designed and developed by
          </Text>
          <span>&nbsp;</span>
          <Text size="sm" color="secondary-0">
            <a
              href="http://www.imaginedelements.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imagined Elements, LLC
            </a>
          </Text>
        </div>
      </div>
      <div styleName="privacy">
        <GatsbyLink to="/privacy-policy">
          <Text size="sm" color="secondary-0">
            Privary Policy &amp; Terms of Use
          </Text>
        </GatsbyLink>
      </div>
    </div>
  </footer>
);

export default Footer;
