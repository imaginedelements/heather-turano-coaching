import React from "react";
import PropTypes from "prop-types";

import { Link } from "../../Link";
import { Icon } from "../../Icon";
import "./index.module.scss";

export const BlogNavigation = ({ pagePrev, pageNext }) => (
  <footer styleName="blog-footer">
    <div styleName="link left">
      {pagePrev && (
        <>
          <Icon
            icon={["far", "long-arrow-left"]}
            iconSize="xs"
            iconColor="accent-0"
          />
          <Link to={pagePrev}>Older</Link>
        </>
      )}
    </div>
    <div styleName="link right">
      {pageNext && (
        <>
          <Link to={pageNext}>Newer</Link>
          <Icon
            icon={["far", "long-arrow-right"]}
            iconSize="xs"
            iconColor="accent-0"
          />
        </>
      )}
    </div>
  </footer>
);

BlogNavigation.propTypes = {
  pagePrev: PropTypes.string,
  pageNext: PropTypes.string
};

BlogNavigation.defaultProps = {
  pagePrev: null,
  pageNext: null
};