import Sidebar from "../components/Sidebar";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import {
    faUsers,
    faUtensils,
    faLocationDot,
    faBellConcierge
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../../assets/css/admin.css';
import Navigation from "../components/Navigation";
import React, { useState, useEffect } from "react";


export default function Index() {
    const [hasError, setErrors] = useState(false);
    const [getUsers, setUsers] = useState([]);
    const [bookings, setTotalBookings] = useState([]);
    const [totalUsers, setTotalUsers] = useState([]);
    const [getRestaurants, setRestaurants] = useState([]);
    const [totalRestaurants, setTotalRestaurants] = useState([]);

    const baseUrl = process.env.REACT_APP_API_URL;
    async function fetchData() {
        const getUsers = await fetch(`${baseUrl}/users`);
        const usersCount = await fetch(`${baseUrl}/total-users`);
        const totalBooking = await fetch(`${baseUrl}/total-bookings`);
        const restaurantCount = await fetch(`${baseUrl}/restaurants`);
        const totalRestaurant = await fetch(`${baseUrl}/total-restaurants`);

        getUsers
            .json()
            .then(getUsers => {
                setUsers(getUsers)
            })

        usersCount
            .json()
            .then(usersCount => {
                setTotalUsers(usersCount)
            })

        totalBooking
            .json()
            .then(bookings => {
                setTotalBookings(bookings)
            })

        restaurantCount
            .json()
            .then(getRestaurants => {
                setRestaurants(getRestaurants)
            })
        totalRestaurant
            .json()
            .then(restaurantCount => {
                setTotalRestaurants(restaurantCount)
            })
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    }, []);

    const userList = (
        getUsers.map((user) => (

            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
            </tr>

        ))
    )
    const restaurantList = (
        getRestaurants.map((restaurant) => (

            <tr key={restaurant.id}>
                <td>{restaurant.id}</td>
                <td>{restaurant.resName}</td>
                <td>{restaurant.resEmail}</td>
                <td>{restaurant.resNumber}</td>
            </tr>

        ))
    )

    return (
        <div className="row">
            <Navigation />
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                <Sidebar />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                <div className="col-10 offset-1">
                    <h1 className="mt-2 mb-2">Admin</h1>
                    <div className="row">
                        <div className="col-md-3 col-xs-12 mb-2 mt-2">
                            <Card className="admin-cards rounded-0 bg-grey text-light border-0">
                                <Card.Body>
                                    <Card.Title>{totalUsers}</Card.Title>
                                    <span className="h5">
                                        <FontAwesomeIcon icon={faUsers} />
                                    </span>
                                    <Card.Text className="h5">
                                        Users
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-xs-12 mb-2 mt-2">
                            <Card className="admin-cards rounded-0 bg-grey text-light border-0">
                                <Card.Body>
                                    <Card.Title>{totalRestaurants}</Card.Title>
                                    <span className="h5"><FontAwesomeIcon icon={faUtensils} /></span>
                                    <Card.Text className="h5">
                                        Restaurant
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-xs-12 mb-2 mt-2">
                            <Card className="admin-cards rounded-0 bg-grey text-light border-0">
                                <Card.Body>
                                    <Card.Title>{bookings}</Card.Title>
                                    <span className="h5"><FontAwesomeIcon icon={faBellConcierge} /></span>
                                    <Card.Text className="h5">
                                        Bookings
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-md-3 col-xs-12 mb-2 mt-2">
                            <Card className="admin-cards rounded-0 bg-grey text-light border-0">
                                <Card.Body>
                                    <Card.Title>0</Card.Title>
                                    <span className="h5"><FontAwesomeIcon icon={faLocationDot} /></span>
                                    <Card.Text className="h5">
                                        Area
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 mb-2 mt-2">
                                <Card className="rounded-0  border-0">
                                    <Card.Body>
                                        <Card.Title className="p-2">Recent Registered Customer</Card.Title>
                                        <hr />
                                        <Card.Text>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>Mobile</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        userList
                                                    }
                                                </tbody>
                                            </Table>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="col-12 mb-2 mt-2">
                                <Card className="rounded-0  border-0">
                                    <Card.Body>
                                        <Card.Title className="p-2">Recent Registered Restaurant</Card.Title>
                                        <hr />
                                        <Card.Text>
                                            <Table striped hover responsive>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Restaurant Name</th>
                                                        <th>Restaurant Email</th>
                                                        <th>Restaurant Mobile</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {restaurantList}
                                                </tbody>
                                            </Table>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
