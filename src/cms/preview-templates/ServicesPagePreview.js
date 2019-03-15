import React from "react";
import PropTypes from "prop-types";
import { ServicesPageTemplate } from "../../templates/services/services.template";

const ServicesPagePreview = ({ entry, getAsset }) => (
  <ServicesPageTemplate
    main={{
      title: entry.getIn(["data", "main", "title"]),
      blurb: entry.getIn(["data", "main", "blurb"]),
      contactForm: {
        inputPlaceholder: entry.getIn([
          "data",
          "main",
          "contactForm",
          "inputPlaceholder"
        ]),
        emailPlaceholder: entry.getIn([
          "data",
          "main",
          "contactForm",
          "emailPlaceholder"
        ]),
        buttonLabel: entry.getIn(["data", "main", "contactForm", "buttonLabel"])
      }
    }}
    pillars={{
      title: entry.getIn(["data", "pillars", "title"]),
      description: entry.getIn(["data", "pillars", "description"]),
      pillarList: entry.getIn(["data", "pillars", "pillarList"])
    }}
    approach={{
      title: entry.getIn(["data", "approach", "title"]),
      body: entry.getIn(["data", "approach", "body"]),
      image: getAsset(entry.getIn(["data", "approach", "image"]))
    }}
  />
);

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ServicesPagePreview;
