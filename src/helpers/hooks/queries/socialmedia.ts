import { useStaticQuery, graphql } from "gatsby";
import { SocialMedia } from "types/sitequery";
/**
 * @name SocialMediaLinks Return the site metadata with social media links.
 */
const SocialMediaLinks = (): SocialMedia => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          linkedin
          github
        }
      }
    }
  `);
  console.log(site.siteMetadata);
  const linkedinlink: string = site.siteMetadata.linkedin
    ? site.siteMetadata.linkedin
    : "";
  const githublink: string = site.siteMetadata.github
    ? site.siteMetadata.github
    : "";
  const response = {
    linkedin: linkedinlink,
    github: githublink,
  };
  return response;
};
export default SocialMediaLinks;
