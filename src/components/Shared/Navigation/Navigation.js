import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, handleLogOut } = useAuth();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="nav-logo">
          DRONE-ZONE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navi-hov">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to={`/home`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={`/explore`}>
              Explore
            </Nav.Link>
            {user.email && (
              <Nav.Link as={Link} to={`/dashboard`}>
                Dashboard
              </Nav.Link>
            )}
          </Nav>
          {!user?.email ? (
            <Nav.Link as={Link} to={`/login`}>
              <Button variant="outline-success">Login</Button>
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to={`/login`} onClick={handleLogOut}>
              <Button variant="outline-success">Logout</Button>
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
