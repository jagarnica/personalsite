import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about_image_cropped.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PotraitImage
      alt="self potrait"
      backgroundColor={true}
      fluid={data.file.childImageSharp.fluid}
    />
  );
};
function Bio(): React.ReactElement {
  return (
    <BioContainer>
      <Link to="/">
        <AboutImage />
      </Link>
      <DetailsFlex>
        <h3 style={{ fontSize: `1.1em`, marginBottom: `5px` }}>
          Jesus Garnica
        </h3>
        <p>
          I am a software developer in Silicon Valley passionate about good
          engineering, great code, and amazing coffee (of course).
        </p>
      </DetailsFlex>
    </BioContainer>
  );
}
export default Bio;
const PotraitImage = styled(Img)`
  border-style: solid;
  border: 1px;
  border-color: transparent;
  border-radius: 50%;
  align-self: stretch;
  width: 64px;
  height: 64px;

  margin-right: 16px;
`;
const BioContainer = styled.div`
  display: flex;
  margin-bottom: 1.45rem;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
`;
const DetailsFlex = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;

  * {
    margin-bottom: 0;
  }
  p {
    font-size: 0.97em;
    color: ${props => props.theme.colors.darkGrey};
  }
`;
