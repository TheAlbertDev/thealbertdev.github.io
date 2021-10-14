import React from "react"
import styled from "styled-components"

const A = styled.a`
  &:hover {
    & svg {
      opacity: 1;
    }
  }
  & svg {
    fill: ${props => props.theme.palette.common.black};
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
`

type TSocialNetworkProp = {
  to: string
  svg: React.ReactNode
}

const SocialNetwork = (props: TSocialNetworkProp) => {
  return (
    <A href={props.to} target="_blank" rel="noopener noreferrer nofollow">
      {props.svg}
    </A>
  )
}

export default SocialNetwork
