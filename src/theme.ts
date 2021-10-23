// theme.ts
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
})

type Theme = typeof theme

export type { Theme }
export { theme }
