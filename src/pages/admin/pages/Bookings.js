
import { useState, useEffect } from "react";
import { useTermMutation } from "../../../features/auth/authApi";
import { convertToHTML } from 'draft-convert';
import { useNavigate } from "react-router-dom";
import DOMPurify from 'dompurify';
import Sidebar from "../components/Sidebar";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    
    // const [Terms, { data, isLoading, error: responseError }] =
    //     useTermMutation();

    const navigate = useNavigate();

    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL;
        const fetchBookings = async () => {
            try {
                const response = await axios.get(`${baseUrl}/bookings`)
                setBookings(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log('There was a problem or request was cancelled.')
            }
        }

        fetchBookings()

    }, []);

   
    const bookingsData = (
        bookings.map((booking) => (
                        
            <tr key={ booking.id }>
                <td>{ booking.id }</td>
                <td>{ moment(booking.bookingDate).format('DD/MM/YYYY') }</td>
                {/* fetch restaurant name here */}
                {/* <td>{ booking.resName }</td> */}
                <td>{ booking.bookingNum }</td>
                <td>{ booking.bookingTime }</td>
                <td>{ booking.numberOfPeople }</td>
                <td>{ booking.bookingAvailOffer }</td>
                {/* <td>
                    <Link to={`/bookings/${booking.id}`} className="btn btn-outline-warning btn-sm btn-block rounded-0">Edit</Link>
                </td> */}
                <td>
                    <Link to={`/bookings/${booking.id}`} className="btn btn-outline-danger btn-sm btn-block rounded-0">Delete</Link>
                </td>
            </tr>
            
        ))
    )

    return (
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div className="col-10 offset-1">
                    <h1 className="pt-2 pb-2">Bookings</h1>
                    <hr />
                    <div className="col-12">
                        <Table striped hover responsive>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Booking Date</th>
                                    {/* <th>Restaurant Name</th> */}
                                    <th>Booking Number</th>
                                    <th>Booking Time</th>
                                    <th>Number of People</th>
                                    <th>Offer Getting</th>
                                </tr>
                            </thead>
                            <tbody>
                                { isLoading == false ? <>{ bookingsData }</> :<td>Loading....</td> }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
