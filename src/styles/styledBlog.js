import styled from "styled-components"

export const BlogBaseWrapper = styled.div`
  width: 100%;
`
export const BlogBaseContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  height: 100%;
`
export const BlogBaseContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
`
export const BlogBasePostItem = styled.article`
  width: 100;
  margin: 10px 10px;
  padding: 30px 15px;
  background: #eee;
  border-radius: 3px;
`
export const BlogBaseDateBoxtext = styled.span`
  color: #555;
  font-size: 14px;
  padding: 0px 0px 3px 0px;
`
export const BlogBaseTitleBoxtext = styled.h3`
  color: #b88a34;
  font-size: 20px;
  line-height: 1.4rem;
  padding: 0px 0px 8px 0px;
  font-weight: 800;
`
export const BlogBaseDescBoxtext = styled.p`
  color: #555;
  line-height: 1.4rem;
`
