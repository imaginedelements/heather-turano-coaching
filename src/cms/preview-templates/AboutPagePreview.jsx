import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about/about.template";

const AboutPagePreview = ({ entry, getAsset }) => (
  <AboutPageTemplate
    main={{
      title: entry.getIn(["data", "main", "title"]),
      body: entry.getIn(["data", "main", "body"]),
      backgroundImage: {
        imgLocation: getAsset(
          entry.getIn(["data", "main", "backgroundImage", "imgLocation"])
        ),
        imgAlt: entry.getIn(["data", "main", "backgroundImage", "imgAlt"]),
        imgHeight: entry.getIn(["data", "main", "backgroundImage", "imgHeight"])
      }
    }}
    sectionOne={{
      title: entry.getIn(["data", "sectionOne", "title"]),
      body: entry.getIn(["data", "sectionOne", "body"])
    }}
    sectionTwo={{
      title: entry.getIn(["data", "sectionTwo", "title"]),
      body: entry.getIn(["data", "overview", "body"]),
      avatar: getAsset(entry.getIn(["data", "sectionTwo", "avatar"]))
    }}
    callToAction={{
      title: entry.getIn(["data", "callToAction", "title"]),
      body: entry.getIn(["data", "callToAction", "body"]),
      placeholder: entry.getIn(["data", "callToAction", "placeholder"]),
      label: entry.getIn(["data", "callToAction", "label"])
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired
};

export default AboutPagePreview;
