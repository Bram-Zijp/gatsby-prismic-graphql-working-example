import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Example } from "../components/example"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Example />
  </Layout>
)

export default IndexPage
