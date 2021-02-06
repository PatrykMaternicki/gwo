import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

const Topbar = ({basketStock}) => {
    return <Navbar bg="light" sticky="top">
     <Link to="/" replace >  
      <Navbar.Brand>GWO-React</Navbar.Brand>
    </Link>
    <Nav className="ml-auto">
    <Link to="/koszyk" replace >
      <Button variant="outline-dark">
        Koszyk
        <span className="ml-2">
          <Badge pill variant="dark">
            {basketStock}
          </Badge>
        </span>
      </Button>
      </Link>
    </Nav>
  </Navbar>
}

export default Topbar