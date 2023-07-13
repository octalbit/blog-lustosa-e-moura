import React from "react"

import * as S from "./styled"
import MenuLink from "../MenuLink"
import Brand from "../Brand"
import Toggle from "../Toggle"
import SocialLinks from "../SocialLinks"

const Navbar = () => (
  <S.NavbarWrapper>
    <S.NavbarContainer>
      <S.NavbarContent>
        <Brand />
        <MenuLink />
        <Toggle />
      </S.NavbarContent>
    </S.NavbarContainer>
    <SocialLinks color="white"/>
  </S.NavbarWrapper>
)

export default Navbar
