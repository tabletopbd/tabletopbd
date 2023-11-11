import { useDispatch } from 'react-redux';
import { userLoggedOut } from "../features/auth/authSlice";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg';
import whiteLogo from '../assets/img/mobileLogoWhite.png';
import useAuth from "../hooks/useAuth";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

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
        <NavLink className="nav-link" to='/register'>Register</NavLink>
        <NavLink className="nav-link" to='/login'>Log In</NavLink>
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
    <>
    <Navbar bg="light" expand="lg" className='hide reshow'>
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
            <NavLink className="nav-link" to='/restaurants'>Restaurants</NavLink>
              { showLink }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;