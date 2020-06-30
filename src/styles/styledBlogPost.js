import styled from "styled-components"

export const BlogPostWrapper = styled.div`
  width: 100%;
`
export const BlogPostContainer = styled.div`
  max-width: 70rem;
  margin: auto;
  height: 100%;
`
export const BlogPostContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0px;
`
export const BlogPostTitle = styled.h2`
  font-size: 45px;
  font-weight: 800;
  text-align: center;
  color: #b88a34;
`
export const BlogPostInfoPost = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 25px 0px;
`
export const BlogPostInfoTextBox = styled.div``
export const BlogPostInfoDate = styled.p`
  padding: 8px 15px 8px 15px;
`
export const BlogPostVideo = styled.iframe`
  width: 100%;
  margin: auto;
  height: 450px;
`
export const BlogPostContentPost = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 2rem 5rem;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #333;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: #333;
    border-left: 0.3rem solid #b88a34;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  a {
    border-bottom: 1px dashed #b88a34;
    color: #b88a34;
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: #333;
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
export const BlogPostNextPrev = styled.section`
  align-items: center;
  width: 100%;
  border-top: 1px solid #b88a34;
  color: #b88a34;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: #b88a34;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #b88a48;
    }
  }
`
