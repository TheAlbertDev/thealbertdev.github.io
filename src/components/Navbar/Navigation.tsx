import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const NAV = styled.nav`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.light};
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
    color: ${({ theme }) => theme.colors.white};
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }

  &:not(:first-of-type) {
    margin-left: ${({ theme }) => theme.space[2]};
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
