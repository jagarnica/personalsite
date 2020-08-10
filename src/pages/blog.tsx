import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import useTheme from "helpers/hooks/usestyledtheme";
import PageLabel from "components/general/pagelabel/pagelabel";
function PageContent() {
  const blogPageAccent = useTheme().colors.blogPageAccent;
  return (
    <>
      <PageLabel margin="0px 0px 20px 0px" accentColor={blogPageAccent}>
        Blog
      </PageLabel>
      <p>
        Coming soon! Stay tuned for posts about tech, audio, hi-fi, and
        programming.
      </p>
    </>
  );
}
const ComingSoonPage: React.ReactNode = () => (
  <Layout>
    <SEO
      title="Tech Blog"
      description="The unfocused tech posts from Jesus Garnica"
    />
    <PageContent />
  </Layout>
);

export default ComingSoonPage;
