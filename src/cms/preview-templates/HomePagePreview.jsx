import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home/home.template";

const HomePagePreview = ({ entry, getAsset }) => {
  const testis = entry.getIn(["data", "testimonials", "testimonialEntries"]);
  const testimonialEntries = testis ? testis.toJS() : [];

  const methods = entry.getIn(["data", "method", "methodSteps"]);
  const methodSteps = methods ? methods.toJS() : [];

  return (
    <HomePageTemplate
      callToAction={{
        ctaPlaceholder: entry.getIn(["data", "callToAction", "ctaPlaceholder"]),
        ctaButtonLabel: entry.getIn(["data", "callToAction", "ctaButtonLabel"])
      }}
      hero={{
        heroImage: getAsset(entry.getIn(["data", "hero", "heroImage"])),
        heroTitle: entry.getIn(["data", "hero", "heroTitle"]),
        heroSubTitle: entry.getIn(["data", "hero", "heroSubTitle"])
      }}
      introduction={{
        introTitle: entry.getIn(["data", "introduction", "introTitle"]),
        introDescription: entry.getIn([
          "data",
          "introduction",
          "introDescription"
        ]),
        introAction: {
          actionLabel: entry.getIn([
            "data",
            "introduction",
            "introAction",
            "actionLabel"
          ]),
          actionRoute: entry.getIn([
            "data",
            "introduction",
            "introAction",
            "actionRoute"
          ])
        }
      }}
      testimonials={{
        testimonials: entry.getIn(["data", "testimonials", "testimonials"]),
        testimonialEntries
      }}
      method={{
        methodTitle: entry.getIn(["data", "method", "methodTitle"]),
        methodSteps
      }}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired
};

export default HomePagePreview;
