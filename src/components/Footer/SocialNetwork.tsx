import React from "react"
import styled from "@emotion/styled"

const A = styled.a`
  &:hover {
    & svg {
      opacity: 0.3;
    }
  }
  & svg {
    fill: ${({ theme }) => theme.colors.black};
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
