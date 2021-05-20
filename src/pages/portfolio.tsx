import * as React from "react";
import { Layout } from "../components/layout";
import { SEO } from "../components/seo/";

const ComingSoonPage: React.FC = () => (
  <Layout>
    <SEO title="Coming Soon" />
    <h1>Coming soon...</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
  </Layout>
);

export default ComingSoonPage;
