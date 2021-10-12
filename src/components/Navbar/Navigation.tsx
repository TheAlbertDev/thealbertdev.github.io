import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server"
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NAV = styled.nav`
  font-family: ${props => props.theme.typography.navLink.fontFamily};
  font-size: ${props => props.theme.typography.navLink.fontSize};
  font-weight: ${props => props.theme.typography.navLink.fontWeight};
`

const UL = styled.ul`
  margin: 0;
  text-align: right;
`

const LI = styled.li`
  display: inline-block;
  margin: 0;
  & a {
    text-decoration: none;
    color: ${props => props.theme.palette.common.black};
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }

  &:not(:first-child) {
    margin-left: ${props => props.theme.spacing(2)};
  }
`

type TNavigation = {
  pages: Array<{ text: string; to: string }>
}

const Navigation = (props: TNavigation) => {
  const NavigationPages = props.pages.map((page, index) => (
    <LI key={index}>
      <Link to={page.to}>{page.text}</Link>
    </LI>
  ))

  return (
    <NAV>
      <UL>{NavigationPages}</UL>
    </NAV>
  )
}

export default Navigation
