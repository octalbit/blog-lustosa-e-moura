import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Hero from "../components/Hero"
import About from "../components/About"
import Area from "../components/Area"
import Law from "../components/Lawyer"
import BlogHome from "../components/BlogHome"
import ContactBox from "../components/ContactBox"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
        <Area />
        <Law />
        <BlogHome data={data} />
        <ContactBox />
      </Layout>
    )
  }
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
            description
            movieOne
            movieTwo
          }
        }
      }
    }
  }
`
