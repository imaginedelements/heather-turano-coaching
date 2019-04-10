import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import WorkWithMePageTemplate from "./preview-templates/WorkWithMePageTemplate";
import BlogPagePreview from "./preview-templates/BlogPagePreview";
import BlogPostPagePreview from "./preview-templates/BlogPostPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("services", WorkWithMePageTemplate);
CMS.registerPreviewTemplate("blog", BlogPagePreview);
CMS.registerPreviewTemplate("blog-post", BlogPostPagePreview);
