import React from "react"
import { useTheme } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"
import { Link } from "gatsby"

type TNavigation = {
  pages: Array<{ text: string; to: string }>
}

const Navigation = (props: TNavigation) => {
  const theme = useTheme()

  const NavigationPages = props.pages.map((page, index) => (
    <li key={index}>
      <Link to={page.to}>{page.text}</Link>
    </li>
  ))

  return (
    <Box
      sx={{
        nav: {
          fontFamily: theme.fonts.heading,
          fontSize: theme.fontSizes.md,
          fontWeight: theme.fontWeights.light,
        },
        ul: {
          margin: 0,
          textAlign: "right",
        },
        li: {
          display: "inline-block",
          margin: 0,
          a: {
            textDecoration: "none",
            color: theme.colors.white,
            transition: "opacity 0.2s ease-in-out",
            "&:hover": {
              opacity: 0.5,
            },
          },
          "&:not(:first-of-type)": {
            marginLeft: theme.space[2],
          },
        },
      }}
    >
      <nav>
        <ul>{NavigationPages}</ul>
      </nav>
    </Box>
  )
}

export default Navigation
