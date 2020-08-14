import { useStaticQuery, graphql } from "gatsby";

type BlogPostItemQuery = {
  frontmatter: {
    title: string | null;
    description: string | null;
    date: string | null;
    tags: Array<string> | null;
    published: boolean | null;
  };
  fields: {
    slug: string; // this cannot be null because all published posts have a slug
  };
};
type BlogPostListItem = {
  title: string;
  description: string;
  date: string;
  tags: Array<string>;
  published: boolean;
  slug: string;
};
/**
 * @name useBlogPosts
 * @description Will return an array of blogpostlistitems. Only items with the
 * "published" key set to true will show up.
 * be returned
 */
const useBlogPosts = (): Array<BlogPostListItem> => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { published: { eq: true } } }) {
        nodes {
          frontmatter {
            title
            description
            date
            tags
            published
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  const response: Array<BlogPostListItem> = allMarkdownRemark.nodes.map(
    (post: BlogPostItemQuery) => {
      const isPublished = post.frontmatter.published ? true : false;

      const BlogItem: BlogPostListItem = {
        title: post.frontmatter.title || ``,
        description: post.frontmatter.description || ``,
        date: post.frontmatter.date || ``,
        tags: post.frontmatter.tags || [],
        published: isPublished,
        slug: post.fields.slug,
      };
      return BlogItem;
    }
  );

  return response;
};
export default useBlogPosts;
