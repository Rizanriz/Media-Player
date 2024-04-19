import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Link to={'/'}>
          <Navbar.Brand href="#home">
          <i className="fa-solid fa-music"></i>
           Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
  )
}

export default Header