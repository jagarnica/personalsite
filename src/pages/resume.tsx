import * as React from "react";
import { SEO } from "../components/seo/";
import { PageLabel } from "components/general/pagelabel/";
import { graphql, useStaticQuery } from "gatsby";
import useTheme from "helpers/hooks/usestyledtheme";
const resumeFile = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "jesusgarnicaresume.pdf" }) {
        publicURL
        name
        prettySize
      }
    }
  `);
  return data;
};
function ResumePageContent(): JSX.Element {
  const themeFound = useTheme();
  const resumePageAccent = themeFound.colors.resumePageAccent;
  const resumeLink = resumeFile().file.publicURL;
  const resumeFileSize = resumeFile().file.prettySize;
  console.log("resumeFileSize", resumeFileSize);
  return (
    <>
      <SEO
        title="Resume"
        description="Download an easy to print version of my resume!"
      />
      <PageLabel margin="0px 0px 20px 0px" accentColor={resumePageAccent}>
        Resume
      </PageLabel>
      <p>
        Need a printer-friendly summary of my professional history? My resume is
        just a click away.
      </p>
      <a href={resumeLink} type="application/pdf" download>
        Download my resume (PDF {resumeFileSize})
      </a>
    </>
  );
}

export default ResumePageContent;
