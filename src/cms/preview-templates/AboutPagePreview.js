import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about/about.template";

const AboutPagePreview = ({ entry, widgetFor, getAsset }) => (
  <AboutPageTemplate
    main={{
      mainTitle: entry.getIn(["data", "main", "mainTitle"]),
      mainImage: {
        imgLocation: getAsset(
          entry.getIn(["data", "main", "mainImage", "imgLocation"])
        ),
        imgAlt: entry.getIn(["data", "main", "mainImage", "imgAlt"]),
        imgXPosition: entry.getIn([
          "data",
          "main",
          "mainImage",
          "imgXPosition"
        ]),
        imgYPosition: entry.getIn([
          "data",
          "main",
          "mainImage",
          "imgYPosition"
        ]),
        imgHeight: entry.getIn(["data", "main", "mainImage", "imgHeight"])
      },
      mainBlurb: entry.getIn(["data", "main", "mainBlurb"])
    }}
    overview={{
      overviewTitle: entry.getIn(["data", "overview", "overviewTitle"]),
      overviewBlub: entry.getIn(["data", "overview", "overviewBlub"])
    }}
    detail={{
      detailTitle: entry.getIn(["data", "detail", "detailTitle"]),
      detailAvatarImage: getAsset(
        entry.getIn(["data", "detail", "detailAvatarImage"])
      ),
      detailBlurb: entry.getIn(["data", "overview", "detailBlurb"])
    }}
    callToAction={{
      ctaTitle: entry.getIn(["data", "callToAction", "ctaTitle"]),
      ctaBlurb: entry.getIn(["data", "callToAction", "ctaBlurb"]),
      ctaInputPlaceholder: entry.getIn([
        "data",
        "callToAction",
        "ctaInputPlaceholder"
      ]),
      ctaButtonLabel: entry.getIn(["data", "callToAction", "ctaButtonLabel"])
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
