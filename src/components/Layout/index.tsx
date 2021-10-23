import React from "react"
import { PageProps } from "gatsby"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../../theme"
import styled from "@emotion/styled"
import FooterStyled from "../Footer"
import NavbarStyled from "../Navbar"
console.log(theme)
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Navbar = styled(NavbarStyled)`
  flex-shrink: 0;
`

const GlobalWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${({ theme }) => theme.space[6]};
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[6]};
  flex: 1 0 auto;
  &[data-is-root-path="true"] .bio {
    margin-bottom: ${({ theme }) => theme.space[10]};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    /* prettier-ignore */
    padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[3]};
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
    <>
      //{" "}
      <ChakraProvider theme={theme} resetCSS>
        <title>{title}</title>
        <FlexWrapper>
          <Navbar />
          <GlobalWrapper data-is-root-path={isRootPath}>
            <main>{children}</main>
          </GlobalWrapper>
          <Footer />
        </FlexWrapper>
        //{" "}
      </ChakraProvider>
    </>
  )
}

export default Layout
