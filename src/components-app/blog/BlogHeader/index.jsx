import React from "react";
import PropTypes from "prop-types";

import { Heading, Icon, Label } from "../../../components/typography";
import { Link } from "../../../components/links";

import "./index.module.scss";

const BlogHeader = ({
  title,
  description,
  backLinkRoute,
  backLinkText,
  dateCreated,
  author
}) => (
  <header>
    <div styleName="page-header">
      <div styleName="link">
        <Link to={backLinkRoute}>
          <Icon icon="long-arrow-left" size="sm" color="accent-0" />
          <Label size="sm" color="accent-0">
            {backLinkText}
          </Label>
        </Link>
      </div>
      <div styleName="date">
        <Label size="md" color="grayscale-3">
          <span>{dateCreated}</span>
          <span>|</span>
        </Label>
        <Label size="md" color="secondary-0">
          <span>{dateCreated}</span>
          <span>|</span>
        </Label>
        <span>Written by {author}</span>
      </div>
      <Heading copy={title} size="h3" />
      {description ? (
        <div styleName="description">
          <Heading copy={description} size="h6" />
        </div>
      ) : null}
    </div>
  </header>
);

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  backLinkRoute: PropTypes.string.isRequired,
  backLinkText: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

BlogHeader.defaultProps = {
  description: null
};

export default BlogHeader;
