import React from "react"
import styled from "styled-components"

const DIV = styled.div`
  font-family: ${props => props.theme.typography.navLink.fontFamily};
  font-size: ${props => props.theme.typography.navLink.fontSize};
  font-weight: ${props => props.theme.typography.navLink.fontWeight};
  flex-grow: 0;
  text-align: center;
`

const Copyright = () => {
  return (
    <DIV>
      © {new Date().getFullYear()} por Albert Álvarez Carulla. Todos los
      Derechos Reservados.
    </DIV>
  )
}

export default Copyright
