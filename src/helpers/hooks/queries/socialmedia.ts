import { useStaticQuery, graphql } from "gatsby";
/**
 * @name SocialMediaLinks Return the site metadata with social media links.
 */
const SocialMediaLinks = () => {
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
  return site;
};
export default SocialMediaLinks;
