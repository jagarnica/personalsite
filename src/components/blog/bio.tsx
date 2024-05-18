import * as React from "react";
import { GatsbyImage as Img } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about_image_cropped.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 250, placeholder: BLURRED, quality: 95)
        }
      }
    }
  `);

  return (
    <PortraitImage
      alt="self portrait"
      image={data.file.childImageSharp.gatsbyImageData}
    />
  );
};
/**
 * @description Displays a miniature bio with my portrait and blurb.
 * @returns
 */
export function MiniBio() {
  return (
    <BioContainer>
      <Link to="/about/">
        <AboutImage />
      </Link>
      <DetailsFlex>
        <Link to="/about/" style={{ textDecoration: `none`, color: `inherit` }}>
          <h3 style={{ fontSize: `1.1em`, marginBottom: `5px` }}>
            Jesus Garnica
          </h3>
        </Link>
        <p>
          I am a software developer in Silicon Valley passionate about good
          engineering, great code, and amazing coffee.
        </p>
      </DetailsFlex>
    </BioContainer>
  );
}
const PortraitImage = styled(Img)`
  border-style: solid;
  border: 1px;
  border-color: transparent;
  border-radius: 50%;
  align-self: stretch;
  width: 64px;
  height: 64px;
  overflow: hidden;
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
