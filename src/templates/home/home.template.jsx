import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import { Text } from "../../components/typography";
import { Carosel, Stepper } from "../../components/navigation";

import { Section } from "../../components-app/layouts";
import { Hero } from "../../components-app/headers";
import { Testimonial } from "../../components-app/custom";
import { FormSignup } from "../../components-app/forms";
import { FormContainer } from "../../components/forms";
import { Button } from "../../components/buttons";

export const HomePageTemplate = ({
  hero: {
    heroImage,
    heroTitle,
    heroSubTitle,
    heroCta: { label: heroCtaLabel, actionRoute: heroActionRoute }
  },
  callToAction: { ctaPlaceholder, ctaButtonLabel },
  introduction: { introTitle, introDescription },
  testimonials: { testimonialTitle, testimonialEntries },
  method: { methodTitle, methodSteps }
}) => (
  <>
    <Hero
      img={heroImage}
      alt="hero image"
      title={heroTitle}
      subTitle={heroSubTitle}
    >
      <Button
        styleType="secondary"
        label={heroCtaLabel}
        onClick={() => navigate(`/${heroActionRoute}`)}
      />
    </Hero>
    <Section title={introTitle}>
      {introDescription && <Text size="lg" copy={introDescription} />}
      <FormContainer>
        <FormSignup
          layout="stacked"
          shouldDisplayFirstName
          actionLabel={ctaButtonLabel}
          placeholder={{
            email: ctaPlaceholder,
            firstName: "First name"
          }}
        />
      </FormContainer>
    </Section>
    <Section title={testimonialTitle} styleType="alt">
      <Carosel entries={testimonialEntries}>
        {({ clientImage, clientType, clientLocation, clientQuote }) => (
          <Testimonial
            image={clientImage}
            type={clientType}
            location={clientLocation}
            quote={clientQuote}
          />
        )}
      </Carosel>
    </Section>
    <Section title={methodTitle}>
      <Stepper steps={methodSteps}>
        {({ description }) => <Text size="lg" copy={description} />}
      </Stepper>
    </Section>
    <Section
      title="Let's talk"
      styleType="secondary"
      contentOrientation="center"
    >
      <Text size="lg" copy="Does this sound sweet? Cool. Let's get working." />
      <FormContainer styleType="standalone">
        <FormSignup
          layout="inline"
          actionLabel={ctaButtonLabel}
          placeholder={{
            email: ctaPlaceholder
          }}
        />
      </FormContainer>
      <Text size="lg" copy="Looking forward to hearing from you!" />
    </Section>
  </>
);

HomePageTemplate.propTypes = {
  callToAction: PropTypes.object.isRequired,
  hero: PropTypes.object.isRequired,
  introduction: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired,
  method: PropTypes.object.isRequired
};
