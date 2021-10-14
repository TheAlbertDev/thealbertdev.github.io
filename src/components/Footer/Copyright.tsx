import React from "react"
import styled from "styled-components"

const DIV = styled.div`
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
