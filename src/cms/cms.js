import CMS from "netlify-cms";

import HomePagePreview from "./preview-templates/HomePagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import BlogPagePreview from "./preview-templates/BlogPagePreview";
import BlogPostPagePreview from "./preview-templates/BlogPostPagePreview";

CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
CMS.registerPreviewTemplate("blog", BlogPagePreview);
CMS.registerPreviewTemplate("blog-post", BlogPostPagePreview);
