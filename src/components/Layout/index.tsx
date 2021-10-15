import React from "react"
import { PageProps } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import { defaultTheme as theme } from "../../theme"
import FooterStyled from "../Footer"
import NavbarStyled from "../Navbar"

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Navbar = styled(NavbarStyled)`
  flex-shrink: 0;
`

const GlonalWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${props => props.theme.spacingRem(6)};
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(6)};
  flex: 1 0 auto;
  &[data-is-root-path="true"] .bio {
    margin-bottom: ${props => props.theme.spacing(10)};
  }
  ${props => props.theme.breakpoints.down(props.theme.breakpoints.values.sm)} {
    /* prettier-ignore */
    padding: ${props => props.theme.spacing(3)} ${props =>
      props.theme.spacing(3)};
  }
`
const Footer = styled(FooterStyled)`
  flex-shrink: 0;
`

type TLayoutProps = {
  location: PageProps["location"]
  title: string
  children: PageProps["children"]
}

const Layout = ({ location, title, children }: TLayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <title>{title}</title>
      <FlexWrapper>
        <Navbar />
        <GlonalWrapper data-is-root-path={isRootPath}>
          <main>{children}</main>
        </GlonalWrapper>
        <Footer />
      </FlexWrapper>
    </ThemeProvider>
  )
}

export default Layout
