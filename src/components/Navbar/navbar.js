import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import '../../styles/HomePage.css'
import logo from "../../Image/Jonaki-Khanam-Logo-150x150.png"
import Button from 'react-bootstrap/Button';

const navbar = () => {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" sticky="top" className="navSize">
      <Container>
        <Navbar.Brand href="home" >
          <img src={logo} alt="Logo" className="navBrand" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto navItem">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item as={NavLink} to="/sem">
                Search Engine Marketing (SEM)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/seo">
                Search Engine Optimization (SEO)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/dms">
                Digital Marketing Service
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/smm">
                Social Media Marketing (SMM)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ems">
                Email Marketing Service
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/wd">
                Web Development (WordPress)
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ym">
                YouTube Marketing
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">
              Gallery
            </Nav.Link>  
          </Nav>
          <Button variant="primary" size="lg" className="me-auto">Get a Quote</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navbar;
