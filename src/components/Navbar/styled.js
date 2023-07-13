import styled from "styled-components"

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
  z-index: 999;
`
export const NavbarContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  height: 100%;
`

export const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0px 15px;
  }
`
