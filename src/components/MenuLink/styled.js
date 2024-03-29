import styled from "styled-components"
import device from "../../styles/device"
import { Link } from "gatsby"

export const MenuLinksWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuLinksList = styled.ul`
  display: flex;
  align-items: center;
`

export const MenuLinksItem = styled.li`
  padding: 0 0.8rem;

  .active {
    color: #b88a34;
  }
`

export const MenuLinksLink = styled(Link)`
  color: #111231;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  transition: color 0.2s;

  &:hover {
    color: #b88a34;
  }
`
export const MenuLinksBtn = styled(Link)`
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
