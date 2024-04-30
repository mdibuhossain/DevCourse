import React, { useContext, useEffect } from "react";
import {
  Button,
  Container,
  Dropdown,
  Nav,
  Navbar,
  SplitButton,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/auth.context";

const Header = () => {
  const { user, logout, authLoading } = useContext(AuthContext);
  console.log(authLoading)
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#1360EF" }}
        variant="dark"
        className="fw-bold"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand>
            <NavLink to="/">
              <img src="./logo.png" alt="logo" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="fs-5">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {user ? (
            <Nav>
              <SplitButton title={user?.name} id="dropdown-menu-align-right">
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/dashboard">
                    Dashboard
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </SplitButton>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link as={Link} to="/login">
                <Button variant="light">Login</Button>
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
