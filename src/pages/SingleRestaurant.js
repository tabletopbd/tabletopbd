import axios from "axios";    
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import moment from 'moment';
import {
    faBowlRice,
    faLocationDot,
    faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from "react-datepicker";
import MobileFooter from "../components/MobileFooter";
import "react-datepicker/dist/react-datepicker.css";

export default function SingleRestaurant() {
    const [bookingResId, setBookingResId] = useState("");
    const [bookingResName, setBookingResName] = useState("");
    const [bookingDate, setBookingDate] = useState(new Date());
    const [bookingTime, setBookingTime] = useState("");
    const [bookingNum, setBookingNum] = useState("");
    const [numberOfPeople, setNumberOfPeople] = useState("");
    const [bookingAvailOffer, setBookingAvailOffer] = useState("");
    const [restaurant, setRestaurant] = useState([]);
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState("");
    // Get ID from URL
    const params = useParams();

    // const endURL = process.env.LARAVEL_APP_URL;
    const endURL = "https://api.tabletopbd.com";
    useEffect(()=> {
        // const baseUrl = process.env.REACT_APP_API_URL;
        const baseUrl = "https://api.tabletopbd.com/api";
        axios.get(`${baseUrl}/restaurant/${params.id}`)
        .then(res => {
            // console.log(res)
            setRestaurant(res.data)
        })
            .catch(err => {
            console.log(err);
            if (err.response.status) {
                setErrors(e.response.data.errors);
            }
        })
    }, [params.id])

        
    function handleBooking(event, accessToken) {
        event.preventDefault();
        // const baseUrl = process.env.REACT_APP_API_URL;
        const baseUrl = "https://api.tabletopbd.com/api";
        const url = `${baseUrl}/booking`;
        const formData = new FormData();
        formData.append('_method', 'POST');
        formData.append('bookingResId', params.id);
        formData.append('bookingDate', moment(bookingDate).format('YYYY-MM-DD'));
        formData.append('bookingTime', bookingTime);
        formData.append('bookingNum', bookingNum);
        formData.append('numberOfPeople', numberOfPeople);
        formData.append('bookingAvailOffer', bookingAvailOffer);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${accessToken}`,
            },
        };


        axios.post(url, formData, config)
        .then((response) => {           
            
            if(response) {
                setSuccess("Booking is confirmed, You'll Receive an SMS Soon.");

                setBookingResId("");
                setBookingResName("");
                setBookingTime("");
                setBookingNum("");
                setNumberOfPeople("");
                setBookingAvailOffer("");
              
            }
        })
            .catch(e => {
                console.log(e);
                if (e.response.status === 401) {
                    setErrors(e.response.data.errors);
                }
                if(e) {
                    // setErrors(e);

                    setBookingResId("");
                    setBookingResName("");
                    setBookingTime("");
                    setBookingNum("");
                    setNumberOfPeople("");
                    setBookingAvailOffer("");
                }
            
        })
    }

    const device = window.cordova;

    const showMobileFooter = ( 
        device ? (
            <>
                <MobileFooter />
            </>
        ) : (
            ""
        )
    )
    
    return (
        <>
            <div className="container">
                <div className="row mt-2 mb-4 pb-4 text-secondary">
                    <div className="col-lg-6">
                        <Card className="rounded-0">
                            <Card.Body>
                                <Image src={`${endURL}/restaurant_images/` + restaurant.resImage} style={{ width: "100%", height: "100%" }} alt="Restaurant Image"/>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <Card className="rounded-0 text-center">
                                <Card.Body>
                                    <span className="h1">
                                        <FontAwesomeIcon icon={faBowlRice} />
                                    </span>
                                    <Card.Title>{ restaurant.resName }</Card.Title>
                                    
                                    <Card.Subtitle className="mb-2 text-muted">
                                        <span className="h6 mx-2">
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span> 
                                        { restaurant.resAddress }
                                    </Card.Subtitle>

                                    <Card.Text>
                                        { restaurant.resAbout }
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-lg-12">
                            <Card className="rounded-0 text-center">
                                <Card.Body>
                                    <div className="h5 mb-3 mt-0">
                                        <span className="h1">
                                            <FontAwesomeIcon icon={faClockFour} />
                                        </span>
                                        <br /> 
                                        Pick A Date & Time
                                    </div>
                                    <div>
                                       
                                    </div>
                                    
                                </Card.Body>
                            </Card>
                            <Card className="rounded-0">
                                <Card.Body>
                                    <div>
                                        <Form onSubmit={handleBooking}>
                                            <input type="hidden" name="bookingResId" defaultValue={restaurant.id} key={restaurant.id} />
                                            <input type="hidden" name="bookingResName" defaultValue={restaurant.resName} key={restaurant.resName} />
                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Date
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <DatePicker  className="form-control" name="bookingDate" value={bookingDate} selected={bookingDate} onChange={(date) => setBookingDate(date)} dateFormat="dd/MM/yyyy" />
                                                    {errors.bookingDate && (
                                                        <div className="flex">
                                                            <span className="text-danger text-sm pt-3">
                                                                {errors.bookingDate[0]}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Time
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <Form.Select aria-label="time" name="bookingTime" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)}>
                                                        <option>Pick</option>
                                                        <option value="9:00 AM">9:00 AM</option>
                                                        <option value="10:00 AM">10:00 AM</option>
                                                        <option value="11:00 AM">11:00 AM</option>
                                                        <option value="12:00 PM">12:00 PM</option>
                                                        <option value="1:00 PM">1:00 PM</option>
                                                        <option value="2:00 PM">2:00 PM</option>
                                                        <option value="3:00 PM">3:00 PM</option>
                                                        <option value="4:00 PM">4:00 PM</option>
                                                        <option value="5:00 PM">5:00 PM</option>
                                                        <option value="6:00 PM">6:00 PM</option>
                                                        <option value="7:00 PM">7:00 PM</option>
                                                        <option value="8:00 PM">8:00 PM</option>
                                                        <option value="9:00 PM">9:00 PM</option>
                                                        <option value="10:00 PM">10:00 PM</option>
                                                        <option value="11:00 PM">11:00 PM</option>
                                                    </Form.Select>
                                                    {errors.bookingTime && (
                                                        <div className="flex">
                                                            <span className="text-danger text-sm pt-3">
                                                                {errors.bookingTime[0]}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Contact
                                                </Form.Label>
                                                <Col sm={8}>
                                                     <InputGroup>
                                                        <InputGroup.Text id="bookingNum">+88</InputGroup.Text>
                                                        <Form.Control type="number"
                                                        placeholder="01710-000000"
                                                        name="bookingNum"
                                                        aria-describedby="bookingNum"
                                                        value={bookingNum} onChange={(e) => setBookingNum(e.target.value)} />
                                                    </InputGroup>
                                                    {errors.bookingNum && (
                                                        <div className="flex">
                                                            <span className="text-danger text-sm pt-3">
                                                                {errors.bookingNum[0]}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Number of People
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <Form.Select aria-label="numberOfPeople" name="numberOfPeople" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)}>
                                                        <option>Select</option>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </Form.Select>
                                                    {errors.numberOfPeople && (
                                                        <div className="flex">
                                                            <span className="text-danger text-sm pt-3">
                                                                {errors.numberOfPeople[0]}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                                <Form.Label column sm={4}>
                                                Select Offer
                                                </Form.Label>
                                                <Col sm={8}>
                                                    <Form.Select aria-label="bookingAvailOffer" name="bookingAvailOffer" value={bookingAvailOffer} onChange={(e) => setBookingAvailOffer(e.target.value)}>
                                                        <option selected>{ restaurant.resName } offer by (%)</option>
                                                        <option>{ restaurant.resOfferAmount }%</option>
                                                    </Form.Select>
                                                    {errors.resOfferAmount && (
                                                        <div className="flex">
                                                            <span className="text-danger text-sm pt-3">
                                                                {errors.resOfferAmount[0]}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} className="mb-3">
                                                <Col sm={{ span: 4}}>
                                                    <button className="rounded-0 btn orange-button border-2 rounded-0 mt-2 mb-2" type="submit">Book Now</button>
                                                </Col>
                                                <Col sm={{ span: 8 }}>
                                                    <h6 className="text-success">{success}</h6>
                                                    <h6 className="text-danger">{errors.message}</h6>
                                                </Col>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                { showMobileFooter }
            </div>
        </>
    )
}