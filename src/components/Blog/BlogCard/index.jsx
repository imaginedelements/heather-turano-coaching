import React from "react";
import PropTypes from "prop-types";

import { Heading, Paragraph } from "../../Typography";
import { Link } from "../../../components/Link";
import { Icon } from "../../../components/Icon";

import "./index.module.scss";

export const BlogCard = ({
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
          <div styleName="date">{dateCreated}</div>
        </header>
        <div>
          <Paragraph copy={prompt} />
        </div>
        <Link to={blogLinkRoute}>Keep Reading →</Link>
      </article>
      <ul styleName="quick-links">
        <li styleName="link secondary">
          <Icon
            icon={["fab", "facebook"]}
            iconSize="xxs"
            iconColor="lightscale-3"
          />
        </li>
        <li styleName="link primary">
          <Icon
            icon={["fab", "pinterest"]}
            iconSize="xxs"
            iconColor="lightscale-3"
          />
        </li>
        <li styleName="link accent">
          <Icon
            icon={["fab", "instagram"]}
            iconSize="xxs"
            iconColor="lightscale-3"
          />
        </li>
        <li styleName="link grayscale">
          <Icon
            icon={["fab", "twitter"]}
            iconSize="xxs"
            iconColor="lightscale-3"
          />
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
