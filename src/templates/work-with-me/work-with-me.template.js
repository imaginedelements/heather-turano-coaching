import React from "react";
import PropTypes from "prop-types";

import { Content } from "../../components-gatsby";
import {
  Section,
  SectionItem,
  Paragraph,
  FooterImage,
  InteractiveCircleList
} from "../../components";

export const WorkWithMePageTemplate = ({
  main: {
    title: mainTitle,
    blurb: mainBlurb
    // contactForm: { inputPlaceholder, emailPlaceholder, buttonLabel }
  },
  pillars: { title: pillarsTitle, description: pillarsDescription, pillarList },
  approach: {
    title: approachTitle,
    body: approachContent,
    image: approachImage
  }
}) => (
  <>
    <Section title={mainTitle}>
      <SectionItem>
        <Paragraph>{mainBlurb}</Paragraph>
      </SectionItem>
      <SectionItem>contactFormPlaceholder</SectionItem>
    </Section>
    <Section title={pillarsTitle} styleType="alt">
      <SectionItem>
        <Paragraph>{pillarsDescription}</Paragraph>
      </SectionItem>
      <SectionItem>
        <InteractiveCircleList list={pillarList} />
      </SectionItem>
    </Section>
    <FooterImage img={approachImage} alt={approachTitle}>
      <Section title={approachTitle} styleType="transparent">
        <Content contentType="html" content={approachContent} />
      </Section>
    </FooterImage>
  </>
);

WorkWithMePageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  pillars: PropTypes.object.isRequired,
  approach: PropTypes.object.isRequired
};
