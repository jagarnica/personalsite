import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { HeroButton } from "components/general/buttons/";
import PageLabel from "components/general/pagelabel/pagelabel";
import { graphql, useStaticQuery } from "gatsby";
import useTheme from "helpers/hooks/usestyledtheme";
const resumeFile = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "jesusgarnicaresume.pdf" }) {
        publicURL
        name
      }
    }
  `);
  return data;
};
function PageContent() {
  const themeFound = useTheme();
  const resumePageAccent = themeFound.colors.resumePageAccent;
  const resumeLink = resumeFile().file.publicURL;
  return (
    <>
      <PageLabel margin="0px 0px 20px 0px" accentColor={resumePageAccent}>
        Resume
      </PageLabel>
      <p>
        Need a printer-friendly summary of my professional history? My resume is
        just a click away below.
      </p>
      <a href={resumeLink} target="_blank" rel="noreferrer" download>
        <HeroButton mainColor={resumePageAccent}>Get My Resume</HeroButton>
      </a>
    </>
  );
}
const ResumePage: React.ReactNode = () => {
  return (
    <Layout>
      <SEO title="Resume" />
      <PageContent />
    </Layout>
  );
};

export default ResumePage;
