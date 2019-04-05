import React from "react";
import PropTypes from "prop-types";

import { Paragraph } from "../../components/typography";

import { Content } from "../../components-gatsby";

import { BackgroundImage } from "../../components-app/background-images";
import { Avatar } from "../../components-app/images";
import { Section, SectionItem } from "../../components-app/layouts";

export const AboutPageTemplate = ({
  main: {
    mainTitle,
    mainImage: { imgLocation, imgAlt, imgXPosition, imgYPosition, imgHeight },
    mainBlurb
  },
  overview: { overviewTitle, body: overviewBody },
  detail: { detailTitle, detailAvatarImage, body: detailBody },
  callToAction: { ctaTitle, ctaBlurb, ctaInputPlaceholder, ctaButtonLabel }
}) => (
  <>
    <BackgroundImage
      image={imgLocation}
      alt={imgAlt}
      xPos={imgXPosition}
      yPos={imgYPosition}
      height={imgHeight}
      fadeUp
    >
      <Section title={mainTitle} styleType="transparent">
        <Paragraph>{mainBlurb}</Paragraph>
      </Section>
    </BackgroundImage>
    <Section title={overviewTitle}>
      <Content content={overviewBody} contentType="html" />
    </Section>
    <Section title={detailTitle} styleType="alt">
      <SectionItem>
        <Avatar image={detailAvatarImage} alt="heather avatar" size="lg" />
      </SectionItem>
      <SectionItem>
        <Content content={detailBody} contentType="html" />
      </SectionItem>
    </Section>
    <Section title={ctaTitle}>
      <Paragraph>{ctaBlurb}</Paragraph>
    </Section>
  </>
);

AboutPageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  overview: PropTypes.object.isRequired,
  detail: PropTypes.object.isRequired,
  callToAction: PropTypes.object.isRequired
};
