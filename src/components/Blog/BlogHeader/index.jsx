import React from "react";
import PropTypes from "prop-types";

import { Heading, Paragraph } from "../../Typography";
import { Link } from "../../Link";
import { Icon } from "../../Icon";
import styles from "./index.module.scss";

export const BlogHeader = ({
  title,
  description,
  backLinkRoute,
  backLinkText,
  dateCreated,
  author
}) => (
  <header styleName="page-header">
    <div styleName="link space">
      <Icon
        icon={["far", "long-arrow-left"]}
        iconSize="xs"
        iconColor="accent-0"
      />
      <Link to={backLinkRoute}>{backLinkText}</Link>
    </div>
    <div styleName="date space">
      <span>{dateCreated}</span>
      <span>|</span>
      <span>Written by {author}</span>
    </div>
    <Heading copy={title} size="h3" />
    {description ? <Paragraph copy={description} /> : null}
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
