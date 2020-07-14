import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionLabel from "components/general/sectionlabel/sectionlabel";
import { COLORS } from "styles/styles";
import { HeroButton } from "components/general/buttons/";
import { graphql, useStaticQuery } from "gatsby";
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
const ResumePage: React.FC = () => {
  const resumeLink = resumeFile().file.publicURL;
  return (
    <Layout>
      <SEO title="Resume" />
      <SectionLabel accentColor={COLORS.resumePageAccent}>Resume</SectionLabel>
      <h4>
        Need a printer friendly summary of my professional history? My resume is
        just a click away below.
      </h4>
      <a href={resumeLink} download>
        <HeroButton mainColor={COLORS.resumePageAccent}>
          Get My Resume
        </HeroButton>
      </a>
    </Layout>
  );
};

export default ResumePage;
