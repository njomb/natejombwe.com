import React from 'react'

import Header from './header'
import '../assets/sass/style.scss'

interface IProps {
  children: React.ReactNode
}

const Layout = ({ children }: IProps) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()} <strong>Nate Jombwe</strong> – Cloud Engineer in Perth
    </footer>
  </React.Fragment>
)

export default Layout
