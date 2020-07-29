import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLORS } from "styles/styles";
import SectionLabel from "components/general/sectionlabel/sectionlabel";
const ComingSoonPage: React.FC = () => (
  <Layout>
    <SEO title="Tech Blog" />
    <SectionLabel accentColor={COLORS.blogPageAccent}>Blog</SectionLabel>
    <h4>
      Coming soon! Stay tuned for posts about tech, audio, hi-fi, and
      programming.
    </h4>
  </Layout>
);

export default ComingSoonPage;
