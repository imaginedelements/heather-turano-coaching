import React from "react";
import PropTypes from "prop-types";

import { BlogFeaturesBlock } from "./BlogFeaturesBlock";
import styles from "./index.module.scss";

export const BlogFeatures = ({ features }) => (
  <section styleName="blog-features">
    {features.map(
      ({ title, feature }) =>
        feature ? (
          <BlogFeaturesBlock key={title} title={title}>
            {feature}
          </BlogFeaturesBlock>
        ) : null
    )}
  </section>
);

BlogFeatures.propTypes = {
  features: PropTypes.array
};

BlogFeatures.defaultProps = {
  features: []
};
