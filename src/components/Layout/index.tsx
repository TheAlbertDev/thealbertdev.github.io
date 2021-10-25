import React from "react"
import { PageProps } from "gatsby"
import { Box } from "@chakra-ui/layout"
import { Container, useTheme } from "@chakra-ui/react"
import Seo from "../seo"
import Footer from "../Footer"
import Navbar from "../Navbar"

type TLayoutProps = {
  location: PageProps["location"]
  title: string
  children: React.ReactNode | React.ReactNode[]
}

const Layout = ({ location, title, children }: TLayoutProps) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  // const isRootPath = location.pathname === rootPath

  const theme = useTheme()
  return (
    <Container
      height="100%"
      maxW="container.lg"
      display="flex"
      flexDirection="column"
    >
      <Seo title={title} />
      <Box flexShrink={0}>
        <Navbar />
      </Box>
      <Container
        maxW="container.md"
        flex="1 0 auto"
        margin="0 auto"
        width="100%"
        paddingY={{
          base: theme.space[3],
          sm: theme.space[3],
        }}
        paddingX={{
          base: theme.space[3],
          sm: theme.space[6],
        }}
      >
        <main>{children}</main>
      </Container>

      <Box flexShrink={0}>
        <Footer />
      </Box>
    </Container>
  )
}

export default Layout
