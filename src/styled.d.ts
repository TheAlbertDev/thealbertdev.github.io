import "styled-components"

interface IPalette {
  main: string
  light: string
  dark: string
  contrastText: string
}

interface ITypography {
  fontFamily: string
  fontWeight: number
  fontSize: string
  lineHeight: number
  letterSpacing: string
}

declare module "styled-components" {
  export interface DefaultTheme {
    typography: {
      htmlFontSize: number
      body2: ITypography
    }
    spacing: (multiplier: number) => number
    palette: {
      common: {
        black: string
        white: string
      }
      primary: IPalette
      secondary: IPalette
    }
  }
}
