import React from "react";
import PropTypes from "prop-types";
import { BlogPostPageTemplate } from "../../templates/blog-post/blog-post.template";

const BlogPostPagePreview = ({ entry, widgetFor }) => (
  <BlogPostPageTemplate
    title={entry.getIn(["data", "title"])}
    description={entry.getIn(["data", "description"])}
    dateCreated={entry.getIn(["data", "date"])}
    content={widgetFor("body")}
    // tags={entry.getIn(["data", "tags"])}
  />
);

BlogPostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  widgetFor: PropTypes.func.isRequired
};

export default BlogPostPagePreview;