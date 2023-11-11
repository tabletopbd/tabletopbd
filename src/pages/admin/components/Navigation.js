import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/logo.png';
import whiteLogo from '../../../assets/img/mobileLogoWhite.png';
import { userLoggedOut } from "../../../features/auth/authSlice";
import useAuth from "../../../hooks/useAuth";
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation() {
  const dispatch = useDispatch();
  const logout = () => {
      dispatch(userLoggedOut());
      localStorage.clear();
  };
  
  const isLoggedIn = useAuth();
  const showLink = (
    isLoggedIn ? (
      <>
        <NavDropdown
              id="nav-dropdown"
              title="Logout"
              menuVariant="secondary"
            >
            <NavDropdown.Item href="/admin">
              Admin Panel
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#" onClick={logout}>Logout</NavDropdown.Item>
          </NavDropdown>
      </>
    ) : (
      <>
        <Nav.Link href='/register'>Register</Nav.Link>
        <Nav.Link href='/login'>Log In</Nav.Link>
      </>
    )
  );

  const device = window.cordova;

  const showLogoBasedOnApp = ( 
    device ? (
      <img
        alt=""
        src={whiteLogo}
        height="40"
        className="d-inline-block align-top"
      />
    ) : (
      <img
        alt=""
        src={logo}
        height="40"
        className="d-inline-block align-top"
      />
    )
)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          { showLogoBasedOnApp }
        </Navbar.Brand>
        <Navbar.Brand href="/">Tabletop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
            <Nav.Link href='/restaurants'>Restaurants</Nav.Link>
            {
              showLink
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;