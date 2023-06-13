import React from "react";
import styled from "styled-components";
import WhatsImg from "../../images/whatsapp.png"

const Button = styled.img`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

const ButtonWhatsappSocial = () => (
   <link href="https://wa.link/2luout"><Button src={WhatsImg}/></link>
);

export default ButtonWhatsappSocial;