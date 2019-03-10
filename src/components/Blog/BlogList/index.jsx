import React from "react";
import PropTypes from "prop-types";

import { BlogListItem } from "./BlogListItem";
import "./index.module.scss";

export const BlogList = ({ posts }) => (
  <ul styleName="blog-list">
    {posts.map((post, i) => (
      <BlogListItem key={post.id} {...post} />
    ))}
  </ul>
);

BlogList.propTypes = {
  posts: PropTypes.array.isRequired
};
