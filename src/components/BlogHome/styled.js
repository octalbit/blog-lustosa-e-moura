import styled from "styled-components"
import { Link } from "gatsby"

export const BlogHomeWrapper = styled.section`
  width: 100%;
  height: 100%;
`
export const BlogHomeContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  height: 100%;
`
export const BlogHomeContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0px;
`
export const BlogHomeBoxItems = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`
export const BlogHomeBoxItem = styled.div`
  flex: 1 1 300px;
  margin: 10px 10px;
  padding: 30px 15px;
  border-bottom: 1px #eee solid;
`
export const BlogHomeDateBoxtext = styled.span`
  color: #555;
  font-size: 14px;
  padding: 0px 0px 15px 0px;
`
export const BlogHomeTitleBoxtext = styled.h3`
  color: #b88a34;
  font-size: 20px;
  line-height: 1.4rem;
  padding: 0px 0px 15px 0px;
  font-weight: 800;
`
export const BlogHomeDescBoxtext = styled.p`
  color: #555;
  line-height: 1.4rem;
`
export const BlogHomeBoxBtn = styled(Link)`
  margin: auto;
  width: 150px;
  height: 40px;
  background-color: #b88a34;
  transition: 0.2s;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #111231;
  }
`
