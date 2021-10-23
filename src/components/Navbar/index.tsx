import React from "react"
import styled from "@emotion/styled"
import LogoStyled from "./Logo"
import NavigationStyled from "./Navigation"
import LogoSVG from "../../images/logo.svg"

const TopBar = styled.div`
  padding: ${({ theme }) => theme.space[6]} ${({ theme }) => theme.space[6]};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: ${({ theme }) => theme.space[1]};
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* prettier-ignore */
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]};
  }
`

const Logo = styled(LogoStyled)`
  flex-grow: 0;
`

const Navigation = styled(NavigationStyled)`
  flex-grow: 1;
  text-align: right;
`

const Navbar = () => {
  return (
    <TopBar>
      {/* <Logo to="/" logoSVG={<LogoSVG />} /> */}
      <Navigation
        pages={[
          { text: "blog", to: "/" },
          { text: "publicaciones", to: "/publicaciones" },
        ]}
      />
    </TopBar>
  )
}

export default Navbar
