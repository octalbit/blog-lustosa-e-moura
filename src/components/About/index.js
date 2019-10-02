import React from 'react'

import * as S from './styled'
import ImgAbout from '../../images/img-about.png'

const About = () => (
    <S.AboutWrapper>
        <S.AboutContainer>
            <S.AboutContent>
                <S.AboutBoxText>
                    <S.AboutTitle>quem nós somos</S.AboutTitle>
                    <S.AboutText>
                        LUSTOSA E MOURA - ADVOCACIA E CONSULTORIA JURÍDICA é um escritório de advocacia localizado em Amarante - PI e Regeneração - PI, atuante nas áreas do direito civil, consumidor, trabalhista, tributário e previdenciário, oferecendo toda a assistência e consultoria jurídica para seus clientes.
                    </S.AboutText>
                    <S.AboutText>
                        LUSTOSA E MOURA - ADVOCACIA E CONSULTORIA JURÍDICA é formada por advogadas com formação e especialização nas mais importantes universidades públicas e privadas do Estado. Acreditamos no aperfeiçoamento da sociedade pelo Direito. E uma advocacia com ética, responsabilidade, excelência das soluções legais, satisfação de nossos clientes e realização pessoal de nossos integrantes.
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