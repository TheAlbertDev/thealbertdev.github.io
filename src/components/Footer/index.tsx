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
  margin: 0 ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(6)} 0;
  border-top: ${props => props.theme.border};
  ${props => props.theme.breakpoints.down(800)} {
    flex-direction: column;
    justify-content: center;
    gap: ${props => props.theme.spacing(1)};
  }
  ${props => props.theme.breakpoints.down(props.theme.breakpoints.values.sm)} {
    margin: 0 ${props => props.theme.spacing(3)};
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
