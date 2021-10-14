import React from "react"
import styled from "styled-components"
import LogoStyled from "./Logo"
import NavigationStyled from "./Navigation"
import LogoSVG from "../../images/logo.svg"

const TopBar = styled.div`
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(6)};
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  gap: ${props => props.theme.spacing(1)};
  ${props => props.theme.breakpoints.down(props.theme.breakpoints.values.sm)} {
    /* prettier-ignore */
    padding: ${props => props.theme.spacing(3)} ${props =>
      props.theme.spacing(3)};
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
      <Logo to="/" logoSVG={<LogoSVG />} />
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
