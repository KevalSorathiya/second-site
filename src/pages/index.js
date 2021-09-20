import * as React from "react"
import Layout from "../components/Layout"
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home page">
      <p>I am making this by following the gatsby tutorial.</p>
      <StaticImage alt="Dog image" src="../images/dogs.jpeg"></StaticImage>
    </Layout>
  )
}

export default IndexPage
