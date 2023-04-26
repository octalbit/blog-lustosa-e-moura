import React from "react"

import * as S from "./styled"
import TitleBox from "../../components/TitleBox"
import law from "./content"

const Lawyer = () => (
  <S.LawWrapper>
    <S.LawContainer>
      <S.LawContent>
        <TitleBox text="Nossos advogados" />
        <S.LawBoxItems>
          {law.map((id, i) => (
            <S.LawBoxItem key={i}>
              <S.LawBoxImg>
                <S.LawImg src={id.avatar} alt={id.nome} />
              </S.LawBoxImg>
              <S.LawBoxNome>{id.nome}</S.LawBoxNome>
            </S.LawBoxItem>
          ))}
        </S.LawBoxItems>
      </S.LawContent>
    </S.LawContainer>
  </S.LawWrapper>
)

export default Lawyer
