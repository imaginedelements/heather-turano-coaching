import React from "react";
import PropTypes from "prop-types";
import { BlogPostPageTemplate } from "../../templates/blog-post/blog-post.template";

const BlogPostPagePreview = ({ entry, widgetFor }) => {
  const Content = widgetFor("body");
  console.log(Content);
  console.log(<Content />);

  return (
    <BlogPostPageTemplate
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      dateCreated={entry.getIn(["data", "date"])}
      content={<Content />}
      // tags={entry.getIn(["data", "tags"])}
    />
  );
};

BlogPostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  widgetFor: PropTypes.func.isRequired
};

export default BlogPostPagePreview;
