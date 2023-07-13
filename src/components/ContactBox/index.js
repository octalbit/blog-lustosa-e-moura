import React, { useState } from "react"
import axios from "axios"

import TitleBox from "../TitleBox"
import * as S from "./styled"
import SocialLinks from "../SocialLinks"

function ContactBox() {
  const [name, setName] = useState("")
  const [telefone, setTelefone] = useState("")
  const [email, setEmail] = useState("")
  const [areaAtuacao, setAreaAtuacao] = useState("")
  const [message, setMessage] = useState("")
  const [sucessMessage, setSucessMessage] = useState(false)

  function handleSubmit(event) {
    if (
      email === "" ||
      name === "" ||
      telefone === "" ||
      areaAtuacao === "" ||
      message === ""
    ) {
      alert("Preencha todos os campos ")
    }
    axios
      .post(`https://calm-hamlet-35252.herokuapp.com/email`, {
        name,
        message,
        telefone,
        email,
        areaAtuacao,
      })
      .then(resp => {
        console.log(resp)
        if (resp.status === 200) {
          setSucessMessage(true)
          setName("")
          setEmail("")
          setTelefone("")
          setAreaAtuacao("")
          setMessage("")
        }
      })
      .catch(err => {
        console.log(err)
        alert("Alguma coisa deu errado, por favor tente novamente.")
      })
    event.preventDefault()
  }

  const options = [
    "Direito Empresarial",
    "Direito da Familia",
    "Direito Cívil",
    "Direito do Trabalho",
    "Direito Imobiliário",
    "Direito Tributário",
    "Direito Administrativo",
  ]
  return (
    <S.ContactBoxWrapper>
      <S.ContactBoxContainer>
        <S.ContactBoxContent>
          <TitleBox style={{ color: "#fff" }} text="Contatos" />
          {sucessMessage && (
            <h4
              style={{
                color: "red",
                alignSelf: "center",
                textAlign: "center",
                fontSize: "3em",
                marginBottom: 15,
                fontFamily: "Roboto-BoldCondensed",
              }}
            >
              Mensagem enviada com sucesso.
            </h4>
          )}
          <S.ContactBoxInfoBox>
            <S.ContactBoxInfoItem>
              <S.ContactBoxInfoAndress>
                Rua Regeneração Número 23, Bairro Balão, Amarante Piauí, CEP
                64400000
              </S.ContactBoxInfoAndress>
              <S.ContactBoxInfoTel>
                Telefone:{" "}
                <S.ContactBoxInfoTelLink
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5586994471629"
                  target="_blank"
                >
                  (86) 9 9447-1629
                </S.ContactBoxInfoTelLink>
                {`  -  `}
                <S.ContactBoxInfoTelLink
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=5586999187066"
                  target="_blank"
                >
                  (86) 9 9918-7066
                </S.ContactBoxInfoTelLink>
              </S.ContactBoxInfoTel>
              <S.ContactBoxInfoMail>
                Email:{" "}
                <S.ContactBoxInfoMailLink>
                  drlustosapereira@gmail.com
                </S.ContactBoxInfoMailLink>
              </S.ContactBoxInfoMail>
            </S.ContactBoxInfoItem>
            <S.ContactBoxFormBox>
              <S.ContactBoxForm>
                <S.ContactBoxFormInput
                  type="text"
                  placeholder="Nome"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
                <S.ContactBoxFormInput
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
                <S.ContactBoxFormInput
                  type="tel"
                  placeholder="Telefone"
                  value={telefone}
                  onChange={e => setTelefone(e.target.value)}
                  required
                />
                <S.ContactBoxFormOption
                  placeholder="Selecione o assunto"
                  value={areaAtuacao}
                  onChange={e => setAreaAtuacao(e.target.value)}
                  required
                >
                  <option value="" disabled selected>
                    Selecione a área de atuação...
                  </option>
                  {options.map(item => (
                    <option style={{ color: "red" }} name={item} value={item}>
                      {item}
                    </option>
                  ))}
                </S.ContactBoxFormOption>
                <S.ContactBoxFormTextArea
                  placeholder="Menssagem"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  required
                />
                <S.ContactBoxFormBtn onClick={handleSubmit}>
                  Enviar
                </S.ContactBoxFormBtn>
              </S.ContactBoxForm>
            </S.ContactBoxFormBox>
          </S.ContactBoxInfoBox>
          {/* <SocialLinks color="white" /> */}
        </S.ContactBoxContent>
      </S.ContactBoxContainer>
    </S.ContactBoxWrapper>
  )
}

export default ContactBox
