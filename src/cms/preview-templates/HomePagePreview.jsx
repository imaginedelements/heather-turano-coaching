import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home/home.template";

const HomePagePreview = ({ entry, getAsset }) => (
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
      testimonialEntries: entry.getIn([
        "data",
        "testimonials",
        "testimonialEntries"
      ])
    }}
    method={{
      methodTitle: entry.getIn(["data", "method", "methodTitle"]),
      methodSteps: entry.getIn(["data", "method", "methodSteps"])
    }}
  />
);

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired
};

export default HomePagePreview;
