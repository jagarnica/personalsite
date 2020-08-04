import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { COLORS } from "styles/styles";
import { HeroButton } from "components/general/buttons/";
import PageLabel from "components/general/pagelabel/pagelabel";
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
      <PageLabel
        margin="0px 0px 20px 0px"
        accentColor={COLORS.resumePageAccent}
      >
        Resume
      </PageLabel>
      <p>
        Need a printer friendly summary of my professional history? My resume is
        just a click away below.
      </p>
      <a href={resumeLink} target="_blank" rel="noreferrer" download>
        <HeroButton mainColor={COLORS.resumePageAccent}>
          Get My Resume
        </HeroButton>
      </a>
    </Layout>
  );
};

export default ResumePage;
