import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from "react-router-dom";




function Footer() {
    const currentYear = (new Date().getFullYear())
    const navigate = useNavigate();
   
    const home = () => { 
        navigate("/");
    }

  return (
        <Navbar expand="lg" variant="light" bg="light" id='footer' className='footer' style={{ position: 'absolute' }}>
                <Container>
                        <Nav.Link href="/terms-and-conditions">
                                Terms & Conditions
                        </Nav.Link>
                        <Nav.Link href="/user-conditions">
                                User Condition
                        </Nav.Link>
                        <Nav.Link href="/privacy-policy">
                                Privacy Policy 
                        </Nav.Link>
                        <Nav.Link href="/about">
                                About Us
                        </Nav.Link>
                        <Nav.Link href="/contactus">
                                Contact Us
                        </Nav.Link>
                        <Nav.Link href="/" disabled>
                                Copyright &copy;Tabletop { currentYear }
                        </Nav.Link>
                </Container>
        </Navbar>
        );
}

export default Footer;