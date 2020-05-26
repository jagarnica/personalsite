import React from "react"
import TypedInEffect from "../components/texteffects/typedindev"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>
      <TypedInEffect speed={15} message="Developer For Hire." />
    </h1>
    <p>
      My name is Jesus Garnica, welcome to my website. I am a developer in the
      bay area.
    </p>
    <p>
      I just graduated from San Francisco State University with a B.S. in
      Computer Science. I have experience with a wide variety of technologies.
    </p>
  </Layout>
)

export default IndexPage
