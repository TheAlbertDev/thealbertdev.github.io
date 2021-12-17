// theme.ts
import { extendTheme } from "@chakra-ui/react"
import styles from "./styles"
import Tag from "./components/Tag"
import fonts from "./fonts"
import config from "./config"
import colors from "./colors"

const theme = {
  styles,
  fonts,
  config,
  colors,
  components: { Tag },
}
export const Theme = typeof extendTheme(theme)
export default extendTheme(theme)
