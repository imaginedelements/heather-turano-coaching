import React from "react";
import PropTypes from "prop-types";
import { Markdown } from "../../components/typography";

export const Content = ({ contentType, className, content }) =>
  contentType === "html" ? (
    <Markdown>
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Markdown>
  ) : (
    <div className={className}>{content}</div>
  );

Content.propTypes = {
  content: PropTypes.any.isRequired,
  contentType: PropTypes.oneOf(["html", "component"]),
  className: PropTypes.string
};

Content.defaultProps = {
  contentType: "html",
  className: "content"
};

export default Content;
