import { useStaticQuery, graphql } from "gatsby";

type BlogPostItemQuery = {
  frontmatter: {
    title: string | null;
    description: string | null;
    date: string | null | `Invalid date`;
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
  date: string | null;
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
export function useBlogPosts(): Array<BlogPostListItem> {
  const { allMdx } = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
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
  const response: Array<BlogPostListItem> = allMdx.nodes.map(
    (post: BlogPostItemQuery) => {
      const isPublished = post.frontmatter.published ? true : false;
      const date =
        post.frontmatter.date && post.frontmatter.date !== `Invalid date`
          ? post.frontmatter.date
          : null;
      const BlogItem: BlogPostListItem = {
        title: post.frontmatter.title || ``,
        description: post.frontmatter.description || ``,
        date,
        tags: post.frontmatter.tags || [],
        published: isPublished,
        slug: post.fields.slug,
      };
      return BlogItem;
    }
  );

  return response;
}
