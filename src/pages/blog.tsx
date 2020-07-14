import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { COLORS } from "styles/styles";
import SectionLabel from "components/general/sectionlabel/sectionlabel";
const ComingSoonPage: React.FC = () => (
  <Layout>
    <SEO title="Tech Blog" />
    <SectionLabel accentColor={COLORS.blogPageAccent}>Blog</SectionLabel>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default ComingSoonPage;
