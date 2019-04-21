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
    title: mainTitle,
    body: mainBody,
    backgroundImage: { imgLocation, imgAlt, imgHeight }
  },
  sectionOne,
  sectionTwo,
  coachingSignup: {
    title: coachingTitle,
    body: coachingBody,
    prompt: coachingPrompt,
    form: coachingForm
  }
}) => (
  <>
    <BackgroundImage image={imgLocation} alt={imgAlt} height={imgHeight} fadeUp>
      <Section title={mainTitle} styleType="transparent">
        <Text size="lg">{mainBody}</Text>
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
    <Section title={coachingTitle} contentOrientation="center">
      <Text size="lg">{coachingBody}</Text>
      <FormContainer styleType="standalone">
        <FormSignup
          layout="inline"
          actionLabel={coachingForm.submitLabel}
          shouldDisplayFirstName
          placeholder={{
            firstName: coachingForm.firstNamePlaceholder,
            email: coachingForm.emailAddressPlaceholder
          }}
        />
      </FormContainer>
      {coachingPrompt && <Text size="lg">{coachingPrompt}</Text>}
    </Section>
  </>
);

AboutPageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  sectionOne: PropTypes.object.isRequired,
  sectionTwo: PropTypes.object.isRequired,
  coachingSignup: PropTypes.object.isRequired
};
