import React from "react"
import styled, { ThemeContext } from "styled-components"
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
`

const Logo = styled(LogoStyled)`
  flex-grow: 0;
`

const Navigation = styled(NavigationStyled)`
  flex-grow: 1;
  text-align: right;
`

const Navbar = () => {
  const theme = React.useContext(ThemeContext)
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
