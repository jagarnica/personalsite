import path from "path";
import { createFilePath } from "gatsby-source-filesystem";
export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`./src/templates/blogpost.js`);
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                published
              }
              internal {
                contentFilePath
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  // Files that are not "published" will not get any pages created if it is a production
  // enviroment.
  let posts = result.data.allMdx.edges;

  // If we are in a development environment, create a page for it so
  // we can preview it during development.
  posts = posts.filter(
    post =>
      process.env.NODE_ENV === "development" || post.node.frontmatter.published
  );
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${post.node.internal.contentFilePath}`,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

export const onCreateNode = ({ node, actions, getNode }) => {
  /**
   * Create blog page slugs
   */
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    let value = null;
    if (process.env.NODE_ENV === "development" || node.frontmatter.published) {
      // we will only create that slug if it marked as 'published' or if we are in a development environment
      // Here we actually create the slug value that can be queried by all the nodes.

      value =
        `blog` +
        createFilePath({ node, getNode, basePath: ``, trailingSlash: false });
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
