import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import ContactBox from "../components/ContactBox"
import * as S from "../styles/styledContact"

const contact = () => (
  <Layout>
    <SEO title="Contatos" />
    <S.StyledContactMargin>
      <ContactBox />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1667.5550622160404!2d-42.85417548609269!3d-6.245711551521393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x784dfbad8634fcf%3A0xb1ab5604d436602d!2sLustosa%20e%20Moura%20-%20Advocacia%20e%20Consultoria%20Jur%C3%ADdica.!5e0!3m2!1spt-BR!2sbr!4v1571086124130!5m2!1spt-BR!2sbr"
        width="100%"
        height="600"
        frameborder="0"
        allowfullscreen=""
      ></iframe>
    </S.StyledContactMargin>
  </Layout>
)

export default contact
