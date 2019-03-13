import React from "react";
import PropTypes from "prop-types";

import {
  Section,
  Paragraph,
  BackgroundImage,
  Avatar,
  SectionItem
} from "../../components";

export const AboutPageTemplate = ({
  main: {
    mainTitle,
    mainImage: { imgLocation, imgAlt, imgXPosition, imgYPosition, imgHeight },
    mainBlurb
  },
  overview: { overviewTitle, overviewBlub },
  detail: { detailTitle, detailAvatarImage, detailBlurb },
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
      <Paragraph>{overviewBlub}</Paragraph>
    </Section>
    <Section title={detailTitle} styleType="alt">
      <SectionItem>
        <Avatar image={detailAvatarImage} alt="heather avatar" size="lg" />
      </SectionItem>
      <SectionItem>
        <Paragraph>{detailBlurb}</Paragraph>
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
