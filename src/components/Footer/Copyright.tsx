import React from "react"
import { Text } from "@chakra-ui/layout"
import { useTheme } from "@chakra-ui/react"

const Copyright = () => {
  const theme = useTheme()
  return (
    <Text
      fontFamily={theme.fonts.body}
      fontSize={theme.fontSizes.sm}
      fontWeight={theme.fontWeights.medium}
      flexGrow={0}
      textAlign="center"
      color="whiteAlpha.900"
      opacity={0.4}
    >
      © {new Date().getFullYear()} por Albert Álvarez Carulla. Todos los
      Derechos Reservados.
    </Text>
  )
}

export default Copyright
