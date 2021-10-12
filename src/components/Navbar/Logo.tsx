import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const LinkStyled = styled(Link)`
  width: 167px;
`

type TLogo = {
  to: string
  logoSVG: any
}

const Logo = (props: TLogo) => {
  return <LinkStyled to={props.to}>{props.logoSVG}</LinkStyled>
}

export default Logo
