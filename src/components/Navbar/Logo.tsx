import React from "react"
import { Box } from "@chakra-ui/layout"
import { Link } from "gatsby"

type TLogo = {
  to: string
  logoSVG: any
}

const Logo = (props: TLogo) => {
  return (
    <Box
      sx={{
        a: {
          width: "175px",
        },
        svg: {
          fill: "white",
        },
      }}
    >
      <Link to={props.to}>{props.logoSVG}</Link>
    </Box>
  )
}

export default Logo
