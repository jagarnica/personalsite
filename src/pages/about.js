import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import SEO from "../components/seo";
const AboutImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "about_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Img
      backgroundColor={true}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <GridLayout>
      <div style={{ maxWidth: `300px`, margin: `0 auto`, width: `100%` }}>
        <AboutImage />
      </div>
      <div>
        <h1>Hello, my name is Jesus Garnica.</h1>
        <p>
          I recently just graduated from San Francisco State University with a
          B.S. in Computer Science. I finished working as an intern at Trueclap
          where I leveraged React to create multiple UI elements made for the
          modern web.
        </p>
        <p>
          During my time at SFSU I worked with wide variety of technologies. I
          used Swift and Google's Places API to create an iOS app. I worked with
          React on two seperate projects with a team. One was to get an
          E-commerce website built for SFSU students. The latter was a web app
          built with ChessJS, NodeJS, AWS, and MongoDB to allow users to play
          games of chess with each other online.
        </p>
        <p>
          When I am not programming, I am usually busy restoring vintage hi-fi
          recievers or other electronics. I have spent a lot free time bringing
          an old Marantz 2230 back alive from the grave, making a La Pavoni
          Espresso machine look better than ever, and restoring other various
          electronics.
        </p>
        <p>
          Want to build something great together? Feel free to contact me at{" "}
          <b>jgarnicacc@gmail.com</b>.
        </p>
      </div>
    </GridLayout>
  </Layout>
);

export default AboutPage;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  grid-gap: 1rem;
`;
