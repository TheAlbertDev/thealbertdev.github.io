import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import theme from "./theme/theme"

export const wrapPageElement = ({ element }: any) => {
  return <ChakraProvider theme={theme}>{element}</ChakraProvider>
}
