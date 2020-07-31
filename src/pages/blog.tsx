import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageLabel from "components/general/pagelabel/pagelabel";
import { COLORS } from "styles/styles";
const ComingSoonPage: React.FC = () => (
  <Layout>
    <SEO title="Tech Blog" />
    <PageLabel margin="0px 0px 20px 0px" accentColor={COLORS.blogPageAccent}>
      Blog
    </PageLabel>
    <h4>
      Coming soon! Stay tuned for posts about tech, audio, hi-fi, and
      programming.
    </h4>
  </Layout>
);

export default ComingSoonPage;
