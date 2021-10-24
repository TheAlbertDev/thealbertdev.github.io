import { mode } from "@chakra-ui/theme-tools"

const styles = {
  global: (props: any) => ({
    "html,body,#___gatsby,#gatsby-focus-wrapper": {
      height: "100%",
    },
    body: {
      bg: mode("gray.100", "bgColor")(props),
      color: "whiteAlpha.900",
    },
    "h1,h2,h3,h4,h5,h6": {
      fontFamily: "heading",
      color: "whiteAlpha.900",
    },
    "h1,h2,h3,h4": {
      fontWeight: "700",
    },
    h1: {
      fontSize: "5xl",
    },
    h2: {
      fontSize: "3xl",
      marginTop: 16,
      marginBottom: 3,
    },
    h3: {
      fontSize: "xl",
      marginTop: 8,
      marginBottom: 2,
    },
    code: {
      fontFamily: "var(--chakra-fonts-mono) !important",
      fontSize: "var(--chakra-fontSizes-sm) !important",
    },
    ".gatsby-highlight pre[class*='language-']": {
      borderRadius: 5,
    },
    p: {
      textAlign: "justify",
      textIndent: "1em",
      marginTop: 4,
      marginBottom: 4,
    },
  }),
}

export default styles
