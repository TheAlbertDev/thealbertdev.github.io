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
      h5: ITypography
      h6: ITypography
      subtitle1: ITypography
      body1: ITypography
      body2: ITypography
      caption: ITypography
      navLink: ITypography
    }
    spacing: (multiplier: number) => string
    spacingRem: (multiplier: number) => string
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
