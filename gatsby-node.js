const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
/**
 * @name getMonth
 * @description Returns the month as a string. Return null if the index is invalid.
 * Starts counting at 0.
 * @param {number} monthNum
 * @return string | null
 */
const getMonth = function (monthNum) {
  switch (monthNum) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return null;
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blogpost.js`);
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
  // If we are in a development enviroment, create a page for it so
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
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  /**
   * Create blog page slugs
   */
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    let value = null;
    if (process.env.NODE_ENV === "development" || node.frontmatter.published) {
      // we will only create that slug if it marked as 'published' or if we are in a development environment
      // Here we actually create the slug value that can be queried by all the nodes.

      const { title, date } = node.frontmatter;
      // console.log("frontmatter props", title, date);
      const parsedDate = new Date(date);
      const year = parsedDate.getFullYear();
      const month = getMonth(parsedDate.getMonth());
      const day = parsedDate.getDate();

      const genSlug = encodeURI(`${year}}-${month}}-${day}}_${title}`);
      //console.log("parsed slug", genSlug);
      value = `blog` + createFilePath({ node, getNode, basePath: `` });
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
