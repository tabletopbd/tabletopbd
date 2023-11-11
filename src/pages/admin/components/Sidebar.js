import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../assets/img/logo.png';
import {
    faHome,
    faUsers,
    faUtensils,
    faFileContract,
    faMessage,
    faBarcode,
    faBellConcierge
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        <>
            <Nav className="bg-grey d-block sidebar text-light">
                <Navbar className='text-light'>
                    <Container>
                        <Navbar.Brand href="/admin" className='text-light pl-3'>
                            Admin Dashboard
                        </Navbar.Brand>
                    </Container>
                </Navbar>
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link className='admin-sidenav-link' href="/admin">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className='admin-sidenav-link' href="/users">
                        <FontAwesomeIcon icon={faUsers} /> <span>Users</span>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className='admin-sidenav-link' href="/bookings">
                        <FontAwesomeIcon icon={faBellConcierge} /> <span>Bookings</span>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className='admin-sidenav-link' href="/contact">
                        <FontAwesomeIcon icon={faMessage} /> <span>Contacts</span>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link className='admin-sidenav-link' href="/restaurant">
                        <FontAwesomeIcon icon={faUtensils} /> <span>Restaurants</span>
                    </Nav.Link>
                </Nav.Item>

            </Nav>

        </>

    )
}

export default Sidebar;