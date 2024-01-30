import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

const navbar = () => {
  return (
          <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="#home">Jonaki Khanam</Navbar.Brand>
                    <Nav className="mx-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                        <Nav.Link href="#Blog">Blog</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
  )
}

export default navbar