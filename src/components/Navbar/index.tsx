import React from "react"
import { useTheme } from "@chakra-ui/react"
import { Flex, Box } from "@chakra-ui/layout"
import Logo from "./Logo"
import Navigation from "./Navigation"
import LogoSVG from "../../images/logo.svg"

const Navbar = () => {
  const theme = useTheme()
  return (
    <Flex
      padding={{ base: theme.space[3], sm: theme.space[6] }}
      flexWrap="nowrap"
      justifyContent="space-between"
      alignItems="center"
      alignContent="center"
      gridGap={theme.space[1]}
    >
      <Box flexGrow={0} width="175px">
        <Logo to="/" logoSVG={<LogoSVG />} />
      </Box>
      <Box flexGrow={1} textAlign="right">
        <Navigation
          pages={[
            { text: "blog", to: "/" },
            { text: "publicaciones", to: "/publicaciones" },
          ]}
        />
      </Box>
    </Flex>
  )
}

export default Navbar
