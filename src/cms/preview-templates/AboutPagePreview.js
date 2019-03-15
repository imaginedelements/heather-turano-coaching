import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about/about.template";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    main={entry.getIn(["data", "main"])}
    overview={entry.getIn(["data", "overview"])}
    detail={entry.getIn(["data", "detail"])}
    callToAction={entry.getIn(["data", "callToAction"])}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default AboutPagePreview;
