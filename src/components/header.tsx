import React from 'react'
import Link from './link'

import MobileMenu from './menu'
import Nav from './nav'

const styles = {
  header: {
    marginBottom: '1.45rem',
  },
  h1: {
    margin: 0,
  },
}

class Header extends React.Component {
  state = {
    showMenu: false,
  }

  componentDidMount() {
    console.log(
      '%c\n\n\nBuilt with love and Gatsby.js\nWant to hire me? Get in touch: jacob@herper.uk\n\n\n',
      'color:#663399;font-weight:bold;font-size:14px',
    )
  }

  handleClickMenu = () => this.setState({ showMenu: true })

  render() {
    return (
      <header style={styles.header}>
        <h1 style={styles.h1}>
          <Link to="/">
            <span className="accent">Nate</span> Jombwe
          </Link>
        </h1>
        <nav>
          <Nav />
        </nav>
        <MobileMenu />
      </header>
    )
  }
}

export default Header
