import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Area from "../components/Area/index"
import * as S from "../styles/styledArea"

const area = () => (
  <Layout>
    <SEO title="Area de atuação" />
    <S.StyledAreaMargin>
      <Area />
    </S.StyledAreaMargin>
  </Layout>
)

export default area
