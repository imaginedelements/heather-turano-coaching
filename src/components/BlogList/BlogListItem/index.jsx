import React from "react";
import PropTypes from "prop-types";

import { Heading, Paragraph } from "../../Typography";
import styles from "./index.module.scss";
import { Link } from "../../../components/Link";
import { Icon } from "../../../components/Icon";

export const BlogListItem = ({
  // id,
  title,
  dateCreated,
  templateKey,
  excerpt,
  viewLinkRoute,
  heroImage,
  heroImageAlt
}) => (
  <li styleName="post">
    <article styleName="img">
      <img src={heroImage} alt={heroImageAlt} />
    </article>
    <article styleName="summary">
      <header>
        <Heading copy={title} size="h5" />
        <div styleName="date">{dateCreated}</div>
      </header>
      <div>
        <Paragraph copy={excerpt} />
      </div>
      <Link to={viewLinkRoute}>Keep Reading →</Link>
    </article>
    <ul styleName="quick-links">
      <li styleName="link secondary">
        <Icon icon={["fal", "share"]} iconSize="xxs" iconColor="lightscale-3" />
      </li>
      <li styleName="link primary">
        <Icon icon={["fal", "heart"]} iconSize="xxs" iconColor="lightscale-3" />
      </li>
      <li styleName="link accent">
        <Icon icon={["fal", "video"]} iconSize="xxs" iconColor="lightscale-3" />
      </li>
      <li styleName="link grayscale">
        <Icon icon={["fal", "link"]} iconSize="xxs" iconColor="lightscale-3" />
      </li>
    </ul>
  </li>
);

BlogListItem.propTypes = {
  // id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  templateKey: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  viewLinkRoute: PropTypes.string.isRequired,
  heroImage: PropTypes.string.isRequired,
  heroImageAlt: PropTypes.string.isRequired
};
