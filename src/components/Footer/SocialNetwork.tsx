import React from "react"
import { Box, useTheme } from "@chakra-ui/react"

type TSocialNetworkProp = {
  to: string
  svg: React.ReactNode
}

const SocialNetwork = (props: TSocialNetworkProp) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        "a:hover": {
          svg: {
            opacity: 0.3,
          },
        },
        svg: {
          fill: theme.colors.white,
          opacity: 0.5,
          transition: "opacity 0.2s ease-in-out",
        },
      }}
    >
      <a
        href={props.to}
        target="_blank"
        rel="noopener noreferrer nofollow"
        style={{}}
      >
        {props.svg}
      </a>
    </Box>
  )
}

export default SocialNetwork
