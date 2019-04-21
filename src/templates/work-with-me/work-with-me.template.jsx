import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../components/typography";

import { Content } from "../../components-gatsby";
import { Section, SectionItem } from "../../components-app/layouts";
import { FooterImage } from "../../components-app/background-images";
import { InteractiveCircleList } from "../../components-app/custom";
import { FormSignup } from "../../components-app/forms";
import { FormContainer } from "../../components/forms";

export const WorkWithMePageTemplate = ({
  contentComponent,
  content,
  main: { title: mainTitle, body: mainBody, coachingSignup: mainForm },
  pillars: { title: pillarsTitle, description: pillarsDescription, pillarList },
  approach: {
    title: approachTitle,
    prompt: approachPrompt,
    image: approachImage,
    coachingSignup: approachForm
  }
}) => {
  const ApproachContent = contentComponent || Content;

  return (
    <>
      <Section title={mainTitle}>
        <SectionItem>
          <Text size="lg">{mainBody}</Text>
        </SectionItem>
        <SectionItem>
          <FormContainer styleType="standalone">
            <FormSignup
              layout="inline"
              actionLabel={mainForm.submitLabel}
              shouldDisplayFirstName
              placeholder={{
                firstName: mainForm.firstNamePlaceholder,
                email: mainForm.emailAddressPlaceholder
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
          <ApproachContent content={content} />
          <FormContainer styleType="standalone">
            <FormSignup
              layout="inline"
              actionLabel={approachForm.submitLabel}
              shouldDisplayFirstName
              placeholder={{
                firstName: approachForm.firstNamePlaceholder,
                email: approachForm.emailAddressPlaceholder
              }}
            />
          </FormContainer>
          <Text size="lg">{approachPrompt}</Text>
        </Section>
      </FooterImage>
    </>
  );
};

WorkWithMePageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  pillars: PropTypes.object.isRequired,
  approach: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.any.isRequired
};
