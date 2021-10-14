import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  font-size: ${props => props.theme.typography.body2.fontSize} !important;
  text-align: center;
  padding: ${props => props.theme.spacingRem(1 / 8)} 0;
`

const FooterStyled = () => {
  return (
    <Footer>
      © {new Date().getFullYear()} por Albert Álvarez Carulla. Todos los
      Derechos Reservados. Hecho con
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </Footer>
  )
}

export default FooterStyled
