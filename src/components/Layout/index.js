import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme as theme } from "../../theme"
import Footer from "./Footer"
import Navbar from "../Navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()} por Albert Álvarez Carulla. Todos los
          Derechos Reservados. Hecho con
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </div>
    </ThemeProvider>
  )
}

export default Layout
