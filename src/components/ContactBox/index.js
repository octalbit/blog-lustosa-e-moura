import React from 'react'

import TitleBox from '../TitleBox'
import * as S from './styled'

const ContactBox = () => (
    <S.ContactBoxWrapper>
        <S.ContactBoxContainer>
            <S.ContactBoxContent>
                <TitleBox style={{ color: '#fff' }} text="Notícias" />
                <S.ContactBoxInfoBox>
                    <S.ContactBoxInfoItem>
                        <S.ContactBoxInfoAndress>
                            Avenida Desembargador Amaral, n° 221, Centro, Amarante - PI, 64400-000
                        </S.ContactBoxInfoAndress>
                        <S.ContactBoxInfoTel>
                            Telefone: <S.ContactBoxInfoTelLink href="https://api.whatsapp.com/send?1=pt_BR&phone=5586994694942" target="blanck">(86) 9 9851-3970</S.ContactBoxInfoTelLink>
                        </S.ContactBoxInfoTel>
                        <S.ContactBoxInfoMail>
                            E-mail: <S.ContactBoxInfoMailLink>vicenteemoura@gmail.com</S.ContactBoxInfoMailLink> 
                        </S.ContactBoxInfoMail>
                    </S.ContactBoxInfoItem>
                    <S.ContactBoxInfoItem>
                        <S.ContactBoxInfoAndress>
                            Avenida Alberto Leal Nunes, n° 396, Centro, Regeneração - PI, 64490-000
                        </S.ContactBoxInfoAndress>
                        <S.ContactBoxInfoTel>
                            Telefone: <S.ContactBoxInfoTelLink href="https://api.whatsapp.com/send?1=pt_BR&phone=5586994694942" target="blanck">(86) 9 9469-4942</S.ContactBoxInfoTelLink>
                        </S.ContactBoxInfoTel>
                        <S.ContactBoxInfoMail>
                            E-mail: <S.ContactBoxInfoMailLink>vicenteemoura@gmail.com</S.ContactBoxInfoMailLink> 
                        </S.ContactBoxInfoMail>
                    </S.ContactBoxInfoItem>
                    <S.ContactBoxFormBox>
                        <S.ContactBoxForm>
                            <S.ContactBoxFormInput 
                                type="text" 
                                placeholder="Nome" />
                            <S.ContactBoxFormInput 
                                type="text" 
                                placeholder="Email" />
                            <S.ContactBoxFormInput 
                                type="text" 
                                placeholder="Telefone" />
                            <S.ContactBoxFormOption 
                                placeholder="Selecione o assunto">

                            </S.ContactBoxFormOption>
                            <S.ContactBoxFormTextArea 
                                placeholder="Menssagem">

                            </S.ContactBoxFormTextArea>
                            <S.ContactBoxFormBtn>Enviar</S.ContactBoxFormBtn>
                        </S.ContactBoxForm>
                    </S.ContactBoxFormBox>
                </S.ContactBoxInfoBox>
            </S.ContactBoxContent>
        </S.ContactBoxContainer>
    </S.ContactBoxWrapper>
)

export default ContactBox