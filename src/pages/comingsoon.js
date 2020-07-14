import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
const ComingSoonPage = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <h1>Coming soon...</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
);

export default ComingSoonPage;
