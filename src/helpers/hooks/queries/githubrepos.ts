import { useStaticQuery, graphql } from "gatsby";
/**
 * @name githubrepos This returns an array with the repos from github, they contain the name and url. This is a query so it could be
 * undefined if something goes wrong.
 */
const GetRepoData = () => {
  const { github } = useStaticQuery(
    graphql`
      {
        github {
          user(login: "jagarnica") {
            itemShowcase {
              hasPinnedItems
              items(first: 10) {
                nodes {
                  ... on GitHub_Repository {
                    id
                    name
                    description
                    languages(
                      orderBy: { field: SIZE, direction: ASC }
                      first: 10
                    ) {
                      nodes {
                        id
                        name
                        color
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return github.user.itemShowcase.items.nodes;
};
export default GetRepoData;
