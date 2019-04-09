import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../components/typography";

// import { Content } from "../../components-gatsby";

import { Section, SectionItem } from "../../components-app/layouts";
import { FooterImage } from "../../components-app/background-images";
import { InteractiveCircleList } from "../../components-app/custom";
import { FormSignup } from "../../components-app/forms";
import { FormContainer } from "../../components/forms";

export const WorkWithMePageTemplate = ({
  main: {
    title: mainTitle,
    blurb: mainBlurb,
    contactForm: { inputPlaceholder, emailPlaceholder, buttonLabel }
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
        <Text size="lg">{mainBlurb}</Text>
      </SectionItem>
      <SectionItem>
        <FormContainer styleType="standalone">
          <FormSignup
            layout="inline"
            actionLabel={buttonLabel}
            placeholder={{
              firstName: inputPlaceholder,
              email: emailPlaceholder
            }}
          />
        </FormContainer>
      </SectionItem>
    </Section>
    <Section title={pillarsTitle} styleType="alt">
      <SectionItem>
        <Text size="lg">{pillarsDescription}</Text>
      </SectionItem>
      <SectionItem>
        <InteractiveCircleList list={pillarList} />
      </SectionItem>
    </Section>
    <FooterImage img={approachImage} alt={approachTitle}>
      <Section title={approachTitle} styleType="transparent">
        <Text size="lg">{approachContent}</Text>
        {/* <Content contentType="html" content={approachContent} /> */}
      </Section>
    </FooterImage>
  </>
);

WorkWithMePageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  pillars: PropTypes.object.isRequired,
  approach: PropTypes.object.isRequired
};
