import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  width: 167px;
  svg {
    fill: white;
  }
`

type TLogo = {
  to: string
  logoSVG: any
}

const Logo = (props: TLogo) => {
  return <LinkStyled to={props.to}>{props.logoSVG}</LinkStyled>
}

export default Logo
