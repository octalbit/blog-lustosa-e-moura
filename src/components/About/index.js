import React from "react"

import * as S from "./styled"
import ImgAbout from "../../images/vic.jpg"

const About = () => (
  <S.AboutWrapper>
    <S.AboutContainer>
      <S.AboutContent>
        <S.AboutBoxText>
          <S.AboutTitle>quem nós somos</S.AboutTitle>
          <S.AboutText>
            VICENTE LUSTOSA ADVOCACIA E CONSULTORIA JURIDICA
          </S.AboutText>
          <S.AboutText>
            Nosso escritório atua em todas as causas previdenciárias, e sempre
            busca os melhores benefícios e resultados para os clientes.
            Trabalhamos com agilidade e transparência junto aos nossos
            contratantes, se tornando referência na recomendação de serviços
            jurídicas nas nossas áreas de atuação.
          </S.AboutText>
        </S.AboutBoxText>
        <S.AboutBoxImg>
          <S.AboutImgBox>
            <S.AboutImg src={ImgAbout} alt="Lustosa & Moura" />
          </S.AboutImgBox>
        </S.AboutBoxImg>
      </S.AboutContent>
    </S.AboutContainer>
  </S.AboutWrapper>
)

export default About
