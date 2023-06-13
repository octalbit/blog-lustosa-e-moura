import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import About from "../components/About"
import Area from "../components/Area"
import BlogHome from "../components/BlogHome"
import ContactBox from "../components/ContactBox"
import ButtonWhatsappSocial from "../components/ButtonWhatsappSocial"

const IndexPage = props => {
  const { data } = props

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Area />
      <BlogHome data={data} />
      <ContactBox />
      <ButtonWhatsappSocial />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            movieOne
            movieTwo
          }
        }
      }
    }
  }
`
