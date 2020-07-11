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
            repositories(
              last: 20
              orderBy: { field: UPDATED_AT, direction: ASC }
            ) {
              nodes {
                name
                url
                isFork
                description
                id
                isPrivate
                languages(first: 3) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    `
  );
  return github.user.repositories.nodes;
};
export default GetRepoData;
