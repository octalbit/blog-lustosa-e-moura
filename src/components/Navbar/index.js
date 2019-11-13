import React from 'react'

import * as S from './styled'
import MenuLink from '../MenuLink'
import Brand from '../Brand'


const Navbar = () => (
    <S.NavbarWrapper>
        <S.NavbarContainer>
            <S.NavbarContent>
                <Brand />
                <MenuLink />
                
            </S.NavbarContent>
        </S.NavbarContainer>
    </S.NavbarWrapper>
)

export default Navbar