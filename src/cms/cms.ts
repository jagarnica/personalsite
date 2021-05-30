// This module is used to modify the CMS
// eslint-disable-next-line
import CMS from "netlify-cms-app";
import BlogTemplate from "./preview-templates/previewtemplate";

CMS.registerPreviewStyle("../components/layout/layout.css");
CMS.registerPreviewTemplate("PersonalSite", BlogTemplate);
