import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContactMutation } from "../../features/auth/authApi";
import MobileFooter from "../../components/MobileFooter";

export default function ContactUs() {
    const [contacts, setContacts] = useState([]);    
    // Form States
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [contactAbout, setContactAbout] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    

    const [Contact, { data, isLoading, error: responseError, isSuccess :  responseSuccess}] =
        useContactMutation();

     const handleSubmit = (e) => {
        e.preventDefault();
        Contact({
            firstName,
            lastName,
            contactEmail,
            contactNumber,
            contactAbout,
        });
       
    };

    useEffect(()=> {
        if(responseSuccess) {
            setSuccess(
                <p className="text-orange h6 p-1">Thank you, Tabletop team will response your query soon.</p>
            );

            setFirstName("");
            setLastName("");
            setContactEmail("");
            setContactNumber("");
            setContactAbout("");
        }

    },[responseSuccess]);

    const device = window.cordova;

    const showContactUs = ( 
        device ? (
            <>
                <div className="row mt-3 mb-5">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="rounded-3" id="contact-sidebar" style={{ height: '500px' }}>
                            <div className="contact-sidebar-inside">
                                <Alert variant="transparent" className="mb-0">
                                    <Alert.Heading>Get In Touch.</Alert.Heading>
                                        <hr />  
                                        <p>
                                            <strong>+88 01946-191256</strong>
                                        </p>
                                        <hr />
                                        <p>
                                            <strong>info@tabletopbd.com</strong>
                                        </p>
                                        <hr />
                                        <p className="mb-0">
                                            <strong>Ga-126/2, Gulshan Link Road, Gulshan, Dhaka-1212.</strong>
                                        </p>
                                        <hr />
                                        <div className="contact-page-icon">
                                            <div className="social-media">
                                                <p className='social-icon'>
                                                    <a href="https://www.facebook.com/Tabletopbd/">
                                                        <FontAwesomeIcon icon={faFacebook} />
                                                        <span>
                                                            Facebook
                                                        </span>
                                                    </a>
                                                </p>
                                                
                                                <p className='social-icon'>
                                                    <a href="https://www.linkedin.com/company/tabletopbd/">
                                                        <FontAwesomeIcon icon={faLinkedin} />
                                                        <span>
                                                            LinkedIn
                                                        </span>
                                                    </a>
                                                </p>
                                                <p className='social-icon'>
                                                    <a href="https://www.instagram.com/tabletopbangladesh">
                                                        <FontAwesomeIcon icon={faInstagram} />
                                                        <span>
                                                            Instagram
                                                        </span>
                                                    </a>
                                                </p>    
                                            </div>
                                        </div>
                                </Alert>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6" style={{ height: '500px' }}>
                        <div className="card contact-form">
                            <div className="card-body">
                                <form className="form-horizontal" onSubmit={handleSubmit}>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                <Form.Label>First</Form.Label>
                                                <Form.Control type="text" placeholder="First name" controlid="firstName" name="firstName" autoComplete="firstName" required value={firstName}  onChange={(e) => setFirstName(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                <Form.Label>Last</Form.Label>
                                                <Form.Control type="text" placeholder="Last name" controlid="lastName" name="lastName" autoComplete="lastName" required value={lastName}  onChange={(e) => setLastName(e.target.value)} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" controlid="contactEmail" name="contactEmail" autoComplete="contactEmail" required value={contactEmail}  onChange={(e) => setContactEmail(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Label>Phone number</Form.Label>
                                        {/* <InputGroup>
                                            <InputGroup.Text id="bookingNum">+88</InputGroup.Text>
                                            <Form.Control type="number"
                                            placeholder="01710-000000"
                                            name="contactNumber"
                                            aria-describedby="contactNumber"
                                            value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                                        </InputGroup> */}
                                        <Form.Control type="number" placeholder="Enter phone" controlid="contactNumber" name="contactNumber" autoComplete="contactNumber" required value={contactNumber}  onChange={(e) => setContactNumber(e.target.value)} />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Col>
                                            <Form.Control as="textarea" type="text" controlid="contactAbout" name="contactAbout" placeholder="How we can help?" autoComplete="contactAbout" required value={contactAbout}  onChange={(e) => setContactAbout(e.target.value)} style={{ height: '100px' }} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Row>
                                            <div className="col-md-3">
                                                <Button disabled={isLoading} variant="btn btn-outline-dark btn-lg btn-block rounded-0" type="submit">
                                                    Send
                                                </Button>
                                            </div>
                                            <div className="col-md-9">
                                                { success }
                                                { error }
                                            </div>
                                        </Row>
                                    </Form.Group>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileFooter/>
            </>
        ) : (
            <div className="col-md-10 offset-2 row mt-3 mb-5">
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="rounded-3" id="contact-sidebar" style={{ height: '500px' }}>
                        <div className="contact-sidebar-inside">
                            <Alert variant="transparent" className="mb-0">
                                <Alert.Heading>Get In Touch.</Alert.Heading>
                                    <hr />  
                                    <p>
                                        <strong>+88 01946-191256</strong>
                                    </p>
                                    <hr />
                                    <p>
                                        <strong>info@tabletopbd.com</strong>
                                    </p>
                                    <hr />
                                    <p className="mb-0">
                                        <strong>Ga-126/2, Gulshan Link Road, Gulshan, Dhaka-1212.</strong>
                                    </p>
                                    <hr />
                                    <div className="contact-page-icon">
                                        <div className="social-media">
                                            <p className='social-icon'>
                                                <a href="https://www.facebook.com/Tabletopbd/">
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                    <span>
                                                        Facebook
                                                    </span>
                                                </a>
                                            </p>
                                            
                                            <p className='social-icon'>
                                                <a href="https://www.linkedin.com/company/tabletopbd/">
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                    <span>
                                                        LinkedIn
                                                    </span>
                                                </a>
                                            </p>
                                            <p className='social-icon'>
                                                <a href="https://www.instagram.com/tabletopbangladesh">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                    <span>
                                                        Instagram
                                                    </span>
                                                </a>
                                            </p>    
                                        </div>
                                    </div>
                            </Alert>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-md-6 col-lg-6" style={{ height: '500px' }}>
                    <div className="card contact-form">
                        <div className="card-body">
                            <form className="form-horizontal" onSubmit={handleSubmit}>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>First</Form.Label>
                                            <Form.Control type="text" placeholder="First name" controlid="firstName" name="firstName" autoComplete="firstName" required value={firstName}  onChange={(e) => setFirstName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Last</Form.Label>
                                            <Form.Control type="text" placeholder="Last name" controlid="lastName" name="lastName" autoComplete="lastName" required value={lastName}  onChange={(e) => setLastName(e.target.value)} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" controlid="contactEmail" name="contactEmail" autoComplete="contactEmail" required value={contactEmail}  onChange={(e) => setContactEmail(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Phone number</Form.Label>
                                    {/* <InputGroup>
                                        <InputGroup.Text id="bookingNum">+88</InputGroup.Text>
                                        <Form.Control type="number"
                                        placeholder="01710-000000"
                                        name="contactNumber"
                                        aria-describedby="contactNumber"
                                        value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
                                    </InputGroup> */}
                                    <Form.Control type="number" placeholder="Enter phone" controlid="contactNumber" name="contactNumber" autoComplete="contactNumber" required value={contactNumber}  onChange={(e) => setContactNumber(e.target.value)} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Col>
                                        <Form.Control as="textarea" type="text" controlid="contactAbout" name="contactAbout" placeholder="How we can help?" autoComplete="contactAbout" required value={contactAbout}  onChange={(e) => setContactAbout(e.target.value)} style={{ height: '100px' }} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Row>
                                        <div className="col-md-3">
                                            <Button disabled={isLoading} variant="btn btn-outline-dark btn-lg btn-block rounded-0" type="submit">
                                                Send
                                            </Button>
                                        </div>
                                        <div className="col-md-9">
                                            { success }
                                            { error }
                                        </div>
                                    </Row>
                                </Form.Group>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    )

    return (
        <div className="container">
            { showContactUs }
        </div>
    )
}