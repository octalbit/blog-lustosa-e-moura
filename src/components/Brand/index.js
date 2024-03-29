import React from "react"

import * as S from "./styled"
import BrandImg from "../../images/logo.png"

const Brand = () => (
  <S.BrandWrapper to="/">
    <S.BrandBox src={BrandImg} alt="" />
  </S.BrandWrapper>
)

export default Brand
