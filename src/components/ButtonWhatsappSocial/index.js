import React from "react";
import styled from "styled-components";
import WhatsImg from "../../images/whatsapp.png"

const Link = styled.a`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    bottom: 10px;
    right: 10px;
`;

const ButtonWhatsappSocial = () => (
   <Link href="https://wa.link/2luout">
        <img width={80} height={80} src={WhatsImg} alt="whatsapp-icon"/>
    </Link>
);

export default ButtonWhatsappSocial;