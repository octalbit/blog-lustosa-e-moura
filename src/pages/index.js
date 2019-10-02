import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from '../components/Hero'
//import About from '../components/About'
//import Area from '../components/Area'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage