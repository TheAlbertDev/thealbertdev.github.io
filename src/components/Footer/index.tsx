import React from "react"
import { Flex } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/react"
import Copyright from "./Copyright"
import SocialNetworks from "./SocialNetworks"

const FooterStyled = () => {
  const theme = useTheme()
  return (
    <Flex
      as="footer"
      flexDirection={{ base: "column", lg: "row" }}
      flexWrap="nowrap"
      justifyContent={{ base: "center", lg: "space-between" }}
      gridGap={theme.space[1]}
      alignItems="center"
      alignContent="center"
      marginY={0}
      marginX={{ base: theme.space[3], lg: theme.space[6] }}
      paddingX={0}
      paddingY={theme.space[6]}
    >
      <Copyright />
      <SocialNetworks />
    </Flex>
  )
}

export default FooterStyled
