import React from "react"

import GlobalStyles from "../../styles/global"

import * as S from "./styled"
import Navbar from "../Navbar"
import Footer from "../Footer"

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Navbar />
    <main>{children}</main>
    <Footer />
  </S.LayoutWrapper>
)

export default Layout
