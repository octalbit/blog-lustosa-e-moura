import React from "react"

import * as S from "./styled"
import BrandFooter from "../../images/brand-footer.png"

const Footer = () => (
  <S.FooterWrapper>
    <S.FooterContainer>
      <S.FooterContent>
        <S.FooterTextCopy>
          © {new Date().getFullYear()} Vicente Lustosa - Advogado Previdenciarista
          Juridica.
        </S.FooterTextCopy>
        <S.FooterCorpLink>
          <S.FooterCorpBox src={BrandFooter} />
        </S.FooterCorpLink>
      </S.FooterContent>
    </S.FooterContainer>
  </S.FooterWrapper>
)

export default Footer
