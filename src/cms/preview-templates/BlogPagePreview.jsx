import React from "react";
import PropTypes from "prop-types";
import { BlogPageTemplate } from "../../templates/blog/blog.template";

const BlogPostPreview = ({ entry }) => (
  <BlogPageTemplate
    title={entry.getIn(["data", "title"])}
    description={entry.getIn(["data", "description"])}
    posts={entry.getIn(["data", "posts"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default BlogPostPreview;
