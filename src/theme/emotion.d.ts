import "@chakra-ui/react"
import { Theme as CustomTheme } from "./theme"

declare module "@chakra/react" {
  export interface Theme extends CustomTheme {}
}
