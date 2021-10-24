// theme.ts
import { extendTheme } from "@chakra-ui/react"
import styles from "./styles"
import fonts from "./fonts"
import config from "./config"

const theme = extendTheme({
  styles,
  fonts,
  config,
})

type Theme = typeof theme

export type { Theme }
export default theme
