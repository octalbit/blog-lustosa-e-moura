import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from '../components/Hero'
import About from '../components/About'
import Area from '../components/Area'
import Law from '../components/Lawyer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Area />
    <Law />
  </Layout>
)

export default IndexPage