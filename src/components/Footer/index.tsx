import React from "react"
import styled from "styled-components"
import Copyright from "./Copyright"
import SocialNetworks from "./SocialNetworks"

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: ${props => props.theme.spacing(2)} ${props => props.theme.spacing(6)};
  font-size: ${props => props.theme.typography.body2.fontSize};
  ${props => props.theme.breakpoints.down(800)} {
    flex-direction: column;
    justify-content: center;
    gap: ${props => props.theme.spacing(1)};
  }
`

const FooterStyled = () => {
  return (
    <Footer>
      <Copyright />
      <SocialNetworks />
    </Footer>
  )
}

export default FooterStyled
