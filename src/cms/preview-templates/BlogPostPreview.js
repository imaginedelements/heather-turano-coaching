import React from "react";
import PropTypes from "prop-types";
import { BlogPostTemplate } from "../../templates/blog-post/blog-post.template";

const BlogPostPreview = ({ entry, widgetFor }) => (
  <BlogPostTemplate
    title={entry.getIn(["data", "title"])}
    description={entry.getIn(["data", "description"])}
    dateCreated={entry.getIn(["data", "date"])}
    content={widgetFor("body")}
    // tags={entry.getIn(["data", "tags"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
