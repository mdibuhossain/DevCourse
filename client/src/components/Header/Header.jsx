import React, { useContext, useEffect } from "react";
import {
  Badge,
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
  console.log(user)
  return (
    <>
      <header class="p-3 mb-3 border-bottom" style={{ backgroundColor: "#1360EF" }}>
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" class="d-flex align-items-center mb-2 mb-lg-0 me-4 text-dark text-decoration-none">
              <img src="./logo.png" alt="logo" />
            </Link>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/home" class="link-light fw-bold fs-5 text-decoration-none me-3">Home</Link></li>
              <li><Link to="/services" class="link-light fw-bold fs-5 text-decoration-none me-3">Courses</Link></li>
              <li><Link to="/about" class="link-light fw-bold fs-5 text-decoration-none me-3">About</Link></li>
              <li><Link to="/contact" class="link-light fw-bold fs-5 text-decoration-none me-3">Contact</Link></li>
            </ul>

            {
              user ?
                <>
                  <div class="rounded-pill bg-light d-flex justify-content-center align-items-center me-3" style={{ height: "100%" }}>
                    <img src="./assets/gem.svg" alt="gem" className="ps-2 pe-1" />
                    <span className="fs-4 pe-3">{user?.wallet?.balance}</span>
                  </div>
                  <div class="dropdown text-end">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1"
                      data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                      <li><p class="dropdown-item">{user?.name}</p></li>
                      <li><Link class="dropdown-item" to="/dashboard">Dashboard</Link></li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li><button class="dropdown-item" onClick={logout}>Sign out</button></li>
                    </ul>
                  </div>
                </> :
                <Link to="/login" class="btn btn-outline-light me-2">Login</Link>
            }

          </div>
        </div>
      </header>

      {/* <Navbar
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
            <Nav className="">
              <div class="rounded-pill bg-light d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                <img src="./assets/gem.svg" alt="gem" className="ps-2 pe-1" />
                <span className="fs-4 pe-3">{user?.wallet?.balance}</span>
              </div>
              <SplitButton title={user?.name} id="dropdown-menu-align-right" F>
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
      </Navbar> */}
    </>
  );
};

export default Header;
