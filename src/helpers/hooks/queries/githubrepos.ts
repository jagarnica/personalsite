import { useStaticQuery, graphql } from "gatsby";
import { GitHubRepo } from "githubquery";
/**
 * @name githubrepos This returns an array with the repos from github, they contain the name and url. This is a query so it could be
 * undefined if something goes wrong.
 */
const GetRepoData = (): [GitHubRepo] => {
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
                    url
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  const response: [GitHubRepo] = github.user.itemShowcase.items.nodes.map(
    repo => {
      const repoObject: GitHubRepo = {
        description: repo.description,
        name: repo.name,
        languages: repo.languages,
        id: repo.id,
        url: repo.url,
      };
      return repoObject;
    }
  );
  return response;
};
export default GetRepoData;
