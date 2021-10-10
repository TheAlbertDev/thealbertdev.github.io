import { DefaultTheme } from "styled-components"

export const defaultTheme: DefaultTheme = {
  spacing: (multiplier: number) => 8 * multiplier,
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
  },
  typography: {
    htmlFontSize: 16,
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      letterSpacing: "0.01071em",
    },
  },
}
