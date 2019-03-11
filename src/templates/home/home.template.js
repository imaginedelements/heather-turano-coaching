import React from "react";
import PropTypes from "prop-types";

import { Hero, Section, Carosel, Testimonial } from "../../components";
import { Paragraph } from "../../components/Typography";

export const HomePageTemplate = ({
  hero: { heroImage, heroTitle, heroSubTitle },
  callToAction,
  introduction: {
    introTitle,
    introDescription
    // introAction: { actionLabel, actionRoute }
  },
  testimonials: { testimonialTitle, testimonialEntries }
}) => {
  console.log(callToAction);
  return (
    <>
      <Hero
        img={heroImage}
        alt="hero image"
        title={heroTitle}
        subTitle={heroSubTitle}
      />
      <Section title={introTitle}>
        <Paragraph copy={introDescription} />
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
      <Section title="My methodology">methodology</Section>
      <Section title="Let's talk" styleType="secondary">
        <Paragraph copy="Does this sound sweet? Cool. Let's get working." />
        contact form
        <Paragraph copy="Looking forward to hearing from you!" />
      </Section>
    </>
  );
};

HomePageTemplate.propTypes = {
  callToAction: PropTypes.object.isRequired,
  hero: PropTypes.object.isRequired,
  introduction: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired
};
