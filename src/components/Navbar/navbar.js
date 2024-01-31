import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="home">Jonaki Khanam</Navbar.Brand>
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="/services">
            Services
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link as={NavLink} to="/blog">
            Blog
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navbar;
