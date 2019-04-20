import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../components/typography";

// import { Content } from "../../components-gatsby";

import { BackgroundImage } from "../../components-app/background-images";
import { Avatar } from "../../components-app/images";
import { Section, SectionItem } from "../../components-app/layouts";
import { FormSignup } from "../../components-app/forms";
import { FormContainer } from "../../components/forms";

export const AboutPageTemplate = ({
  main: {
    backgroundImage: { imgLocation, imgAlt, imgHeight },
    ...main
  },
  sectionOne,
  sectionTwo,
  callToAction
}) => (
  <>
    <BackgroundImage image={imgLocation} alt={imgAlt} height={imgHeight} fadeUp>
      <Section title={main.title} styleType="transparent">
        <Text size="lg">{main.body}</Text>
      </Section>
    </BackgroundImage>
    <Section title={sectionOne.title}>
      <Text size="lg">{sectionOne.body}</Text>
      {/* <Content content={sectionOne.body} contentType="html" /> */}
    </Section>
    <Section title={sectionTwo.title} styleType="alt">
      <SectionItem>
        <Avatar image={sectionTwo.avatar} alt="heather avatar" size="lg" />
      </SectionItem>
      <SectionItem>
        <Text size="lg">{sectionTwo.body}</Text>
        {/* <Content content={sectionTwo.body} contentType="html" /> */}
      </SectionItem>
    </Section>
    <Section title={callToAction.title} contentOrientation="center">
      <Text size="lg">{callToAction.body}</Text>
      <FormContainer styleType="standalone">
        <FormSignup
          layout="inline"
          actionLabel={callToAction.label}
          placeholder={{
            email: callToAction.placeholder
          }}
        />
      </FormContainer>
    </Section>
  </>
);

AboutPageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  sectionOne: PropTypes.object.isRequired,
  sectionTwo: PropTypes.object.isRequired,
  callToAction: PropTypes.object.isRequired
};
