import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import About from "../components/About/index"
import * as S from "../styles/styledAbout"

const contact = () => (
  <Layout>
    <SEO title="Sobre Nós" />
    <S.StyledAboutMargin>
      <About />
      <S.StyledAboutWrapper>
        <S.StyledAboutContainer>
          <S.StyledAboutContent>
            <S.StyledAboutItem>
              <S.StyledAboutItemTitle>Missão</S.StyledAboutItemTitle>
              <S.StyledAboutItemText>
                Entregar aos nossos clientes, de forma satisfatória e técnica
                acompanhamento jurídico-previdenciário, sempre procurando os
                melhores resultados, exercendo com zelo o seu direito de
                exercício da cidadania em busca da dignidade da pessoa humana.
              </S.StyledAboutItemText>
            </S.StyledAboutItem>
            <S.StyledAboutItem>
              <S.StyledAboutItemTitle>Visão</S.StyledAboutItemTitle>
              <S.StyledAboutItemText>
                Buscar garantir a credibilidade e o reconhecimento dos clientes
                no Piauí, Maranhão e outros estados do Brasil.
              </S.StyledAboutItemText>
            </S.StyledAboutItem>
            <S.StyledAboutItem>
              <S.StyledAboutItemTitle>Valores</S.StyledAboutItemTitle>
              <S.StyledAboutItemText>
                <ul>
                  <li>• Agilidade</li>
                  <li>• Transparência</li>
                  <li>• Qualidade no atendimento aos clientes; </li>
                  <li>• Comprometimento; </li>
                  <li>• Ética </li>
                  <li>• Respeito aos clientes; </li>
                  <li>• Responsabilidade social;</li>
                </ul>
              </S.StyledAboutItemText>
            </S.StyledAboutItem>
          </S.StyledAboutContent>
        </S.StyledAboutContainer>
      </S.StyledAboutWrapper>
    </S.StyledAboutMargin>
  </Layout>
)

export default contact
