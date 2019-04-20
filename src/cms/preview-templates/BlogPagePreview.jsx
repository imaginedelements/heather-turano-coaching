import React from "react";
import PropTypes from "prop-types";
import { BlogPageTemplate } from "../../templates/blog/blog.template";

const BlogPostPreview = ({ entry }) => (
  <BlogPageTemplate
    title={entry.getIn(["data", "title"])}
    body={entry.getIn(["data", "body"])}
    form={{
      firstName: {
        placeholder: entry.getIn(["data", "form", "firstName", "placeholder"])
      },
      emailAddress: {
        placeholder: entry.getIn([
          "data",
          "form",
          "emailAddress",
          "placeholder"
        ])
      },
      submit: {
        placeholder: entry.getIn(["data", "form", "submit", "label"])
      }
    }}
    prompt={entry.getIn(["data", "prompt"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default BlogPostPreview;
