import React from "react";
import PropTypes from "prop-types";

import {
  Heading,
  Paragraph,
  Icon,
  Caption
} from "../../../components/typography";
import { Link } from "../../../components/links";

import "./index.module.scss";

const BlogCard = ({
  category,
  title,
  prompt,
  dateCreated,
  thumbnail,
  thumbnailAlt,
  blogLinkRoute
}) => (
  <li styleName="container">
    <Heading copy={category} size="category" />
    <div styleName="post">
      <article styleName="img">
        <img src={thumbnail} alt={thumbnailAlt} />
      </article>
      <article styleName="summary">
        <header>
          <Heading copy={title} size="h5" />
          <div styleName="date">
            <Caption size="sm" color="grayscale-2">
              {dateCreated}
            </Caption>
          </div>
        </header>
        <div>
          <Paragraph copy={prompt} />
        </div>
        <Link to={blogLinkRoute}>Keep Reading →</Link>
      </article>
      <ul styleName="quick-links">
        <li styleName="link secondary">
          <Icon icon="facebook" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link primary">
          <Icon icon="pinterest" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link accent">
          <Icon icon="instagram" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link grayscale">
          <Icon icon="twitter" size="xs" color="lightscale-3" />
        </li>
      </ul>
    </div>
  </li>
);

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  prompt: PropTypes.string.isRequired,
  blogLinkRoute: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  thumbnailAlt: PropTypes.string.isRequired
};

export default BlogCard;
