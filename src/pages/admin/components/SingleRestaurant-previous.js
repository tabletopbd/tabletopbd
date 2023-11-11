import axios from "axios";    
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import logo from '../../../assets/img/logo.png';
import {
    faBowlRice,
    faLocationDot,
    faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function SingleRestaurant() {
    const [bookingDate, setBookingDate] = useState(new Date());
    const [bookingTime, setBookingTime] = useState("");
    const [bookingNum, setBookingNum] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [bookingAvailOffer, setBookingAvailOffer] = useState("");
    // Get ID from URL
    const params = useParams();
    const [restaurant, setRestaurant] = useState([]);
    
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/restaurant/${params.id}`)
        .then(res => {
            console.log(res)
            setRestaurant(res.data)
            // setName(name => ({ ...name, a: props.a }));
        })
        .catch(err =>{
            console.log(err)
        })
    }, [params.id])

    function handleBooking(event) {
        event.preventDefault()
        const params = useParams();
        const url = `http://localhost:8000/api/add-image/${params.id}`;
        const formData = new FormData();
        formData.append('booking_date', bookingDate);
        formData.append('booking_time', bookingTime);
        formData.append('booking_number', bookingNum);
        formData.append('bookingAvailOffer', setBookingAvailOffer);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        axios.post(url, formData, config).then((response) => {
            console.log(response.data);
        });

    }

    return (
        <>
            <div className="container">
                <div className="row mt-2 mb-2">
                    <div className="col-lg-6">
                        <div className="h5 mb-3 mt-3">Restaurant Image:</div>
                        <Card className="rounded-0">
                            <Card.Body>
                                <Image src={"http://localhost:8000/restaurant_images/" + restaurant.resImage} style={{ width: "100%", height: "100%" }} alt="Restaurant Image"/>
                            </Card.Body>
                        </Card>
                        {/* <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={logo}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={logo}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={logo}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}
                    </div>
                    <div className="col-lg-6">
                        <div className="h5 mb-3 mt-3">Restaurant details:</div>
                        <div className="col-lg-12">
                            <Card className="rounded-0 text-center">
                                <Card.Body>
                                    <span className="h1">
                                        <FontAwesomeIcon icon={faBowlRice} />
                                    </span>
                                    <Card.Title>{ restaurant.resName }</Card.Title>
                                    
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <span className="h6">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span> 
                                        { restaurant.resAddress }
                                    </Card.Subtitle>

                                    <Card.Text>
                                        { restaurant.resAbout }
                                    </Card.Text>
                                    {/* <Card.Link href="#">Card Link</Card.Link>
                                    <Card.Link href="#">Another Link</Card.Link> */}
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-12">
                        <div className="h5 mb-3 mt-3">Book for me:</div>
                            <Card className="rounded-0 text-center">
                                <Card.Body>
                                    <div className="h5 mb-3 mt-0">
                                        <span className="h1">
                                            <FontAwesomeIcon icon={faClockFour} />
                                        </span>
                                        <br /> 
                                        Pick A Date & Time:
                                    </div>
                                    <div>
                                       
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                            <Card className="rounded-0">
                                <Card.Body>
                                    <div>
                                        <Form onSubmit={handleBooking}>
                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Date
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <DatePicker className="form-control" name="booking_date" value={bookingDate} selected={bookingDate} onChange={(e) => setBookingDate(e.target.value)} />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Time
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <Form.Select aria-label="time" name="booking_time" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)}>
                                                        <option>Pick</option>
                                                        <option value="Morning">9:00AM To 12:00PM</option>
                                                        <option value="Afternoon">2:00PM to 10:00PM</option>
                                                        <option value="wholeDay">Open till 11:00pm</option>
                                                    </Form.Select>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Contact
                                                </Form.Label>
                                                <Col sm={8}>
                                                     <InputGroup>
                                                        <InputGroup.Text id="booking_number">+88</InputGroup.Text>
                                                        <Form.Control type="number"
                                                        placeholder="01710-000000"
                                                        name="booking_number"
                                                        aria-describedby="booking_number"
                                                        value={bookingNum} onChange={(e) => setBookingNum(e.target.value)} />
                                                    </InputGroup>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Number of People
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <Form.Select aria-label="offer" name="number_of_people" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}>
                                                        <option>Select</option>
                                                        <option value="2">2</option>
                                                        <option value="4">4</option>
                                                        <option value="6">6</option>
                                                        <option value="10">10</option>
                                                        <option value="12">12</option>
                                                        <option value="18">18</option>
                                                    </Form.Select>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Select Offer
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <Form.Select aria-label="offer" name="booking_available_offer" value={bookingAvailOffer} onChange={(e) => setBookingAvailOffer(e.target.value)}>
                                                        
                                                        <option>Available Offer</option>
                                                        <option value="10">10%</option>
                                                        <option value="15">15%</option>
                                                        <option value="20">20%</option>
                                                        <option value="25">25%</option>
                                                    </Form.Select>
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm={{ span: 8, offset: 4 }}>
                                                <Button className="rounded-0" type="submit">Book Now</Button>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
             
        </>
    )
}