import React from "react"
import "./blogpost.css"
import * as S from "../styles/styledBlogPost"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import SocialLinks from "../components/SocialLinks"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <S.BlogPostWrapper>
          <S.BlogPostContainer>
            <S.BlogPostContent>
              <header>
                <S.BlogPostTitle
                  style={{
                    marginTop: rhythm(1),
                    marginBottom: 0,
                  }}
                >
                  {post.frontmatter.title}
                </S.BlogPostTitle>
                <S.BlogPostInfoPost>
                  <S.BlogPostInfoTextBox>
                    <Bio />
                    <S.BlogPostInfoDate>
                      {post.frontmatter.date}
                    </S.BlogPostInfoDate>
                  </S.BlogPostInfoTextBox>
                  {/* <SocialLinks /> */}
                  <div>
                    {post.frontmatter.movieOne.lenght > 16 && (
                      <S.BlogPostVideo src={post.frontmatter.movieOne}
                      ></S.BlogPostVideo>
                    )}
                  </div>
                </S.BlogPostInfoPost>
              </header>
              <S.BlogPostContentPost
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
              <hr
                style={{
                  marginBottom: rhythm(1),
                }}
              />
              {post.frontmatter.movieTwo.length > 16 && (
                <S.BlogPostVideo src={post.frontmatter.movieTwo}
                ></S.BlogPostVideo>
              )}
            </S.BlogPostContent>
          </S.BlogPostContainer>
        </S.BlogPostWrapper>

        <S.BlogPostNextPrev>
          <ul
            style={{
              display: `flex`,
              width: '100%',
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li className="">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← Ultima notícia
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  Proxima notícia →
                </Link>
              )}
            </li>
          </ul>
        </S.BlogPostNextPrev>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        movieOne
        movieTwo
      }
    }
  }
`
