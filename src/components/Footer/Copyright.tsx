import React from "react"
import styled from "@emotion/styled"

const DIV = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
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
