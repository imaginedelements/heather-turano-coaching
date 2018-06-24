import React from "react";
import PropTypes from "prop-types";

import { Heading, Paragraph } from "../Typography";
import img from "../../img/backlit-beach-color-258109.jpg";
import styles from "./index.module.scss";
import { Link } from "../../components/Link";

export const BlogListItem = ({
  // id,
  title,
  dateCreated,
  templateKey,
  excerpt,
  viewLinkRoute
}) => (
  <li styleName="post">
    <article styleName="img">
      <img src={img} alt="stuff" />
    </article>
    <article styleName="summary">
      <header>
        <Heading copy={title} size="h5" />
      </header>
      <div>
        <Paragraph copy={excerpt} />
      </div>
      <Link to={viewLinkRoute}>Keep Reading →</Link>
    </article>
  </li>
);

BlogListItem.propTypes = {
  // id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  templateKey: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  viewLinkRoute: PropTypes.string.isRequired
};
