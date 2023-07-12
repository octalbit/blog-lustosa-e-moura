import React from "react"
import styled from "styled-components"

const Link = styled.a`
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#25d366;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 1px 1px 2px #888;
`;

const ButtonWhatsappSocial = () => (
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <Link
      href="https://wa.link/2luout"
      target="_blank"
    >
      <i style={{ marginTop: 16 }} className="fa fa-whatsapp"></i>
    </Link>
  </div>
)

export default ButtonWhatsappSocial
