import React from "react"
import styled from "@emotion/styled"
import Copyright from "./Copyright"
import SocialNetworks from "./SocialNetworks"

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 0 ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[6]} 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.space[1]};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0 ${({ theme }) => theme.space[3]};
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
