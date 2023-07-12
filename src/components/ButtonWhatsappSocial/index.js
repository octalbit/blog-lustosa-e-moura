import React from "react"

const ButtonWhatsappSocial = () => (
  <div>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
    />
    <a
      href="https://wa.link/2luout"
      style={{
        position: "fixed",
        width: 60,
        height: 60,
        bottom: 40,
        right: 40,
        backgroundColor: "#25d366",
        color: "#FFF",
        borderRadius: 50,
        textAlign: "center",
        fontSize: 30,
        boxShadow: "1px 1px 2px #888",
        zIndex: 1000,
      }}
      target="_blank"
    >
      <i style="margin-top:16px" class="fa fa-whatsapp"></i>
    </a>
  </div>
)

export default ButtonWhatsappSocial
