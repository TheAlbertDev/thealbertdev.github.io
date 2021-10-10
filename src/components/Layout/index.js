import React from "react"
import { ThemeProvider } from "styled-components"
import { Link } from "gatsby"
import { defaultTheme as theme } from "../../theme"
import Footer from "./Footer"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
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
