import Sidebar from "../components/Sidebar";
import Table from 'react-bootstrap/Table';
import AddRestaurant from "./../components/AddRestaurant";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import moment from "moment";
import axios from "axios";
import Swal from 'sweetalert2';
import { useParams, useNavigate } from "react-router-dom";

export default function Restaurant() {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [restaurants, setRestaurants] = useState([]);
    // Get ID from URL
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const baseUrl = process.env.REACT_APP_API_URL;
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get(`${baseUrl}/restaurants`)
                setRestaurants(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
            fetchRestaurants()
    }, [])


    const deleteRestaurant = async (id) => {
        try {
            const baseUrl = process.env.REACT_APP_API_URL;
            const isConfirm = await Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#212529',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Delete!'
            }).then((result) => {
                return result.isConfirmed
            });

            if(!isConfirm){
                return;
            }
            const response = await axios.post(`${baseUrl}/restaurant/${id}`)
            if(response === 200){
                 Swal.fire({
                    icon:"success",
                    text:response.data.message
                })
                window.location.reload(false);
            }
            console.log(response.data)
            // navigate("/restaurant");

        } catch (err) {
            console.log(err)
        }
    }

    const restaurantList = (
        restaurants.map((restaurant) => (
                        
            <tr key={ restaurant.id }>
                <td>{ restaurant.id }</td>
                <td>{ restaurant.resName }</td>
                <td>{ restaurant.resEmail }</td>
                <td>{ restaurant.resNumber }</td>
                <td>{ restaurant.resAddress }</td>
                <td>{ restaurant.resOpenTime }</td>
                <td>{ restaurant.resCloseTime }</td>
                {/* <td>{ moment(restaurant.resOpenTime).format('LT') }</td>
                <td>{ moment(restaurant.resCloseTime).format('LT') }</td> */}
                {/* <td>
                    <Link to={`/restaurant/${restaurant.id}`} className="btn btn-outline-warning btn-sm btn-block rounded-0">Edit</Link>
                </td> */}
                <td>
                    {/* <form action={`/restaurant/${restaurant.id}/destroy`} method="PUT">
                        <button type="submit" className="btn btn-outline-danger btn-sm btn-block rounded-0">Delete</button>
                    </form> */}
                    <button className="btn btn-outline-danger btn-sm btn-block rounded-0" onClick={()=>deleteRestaurant(restaurant.id)}>
                        Delete
                    </button>
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
                    
                    <div className="row">
                        
                        <div className="col-9">
                            <h1 className="pt-2 pb-2">Restaurant</h1>
                        </div>
                        <div className="col-3 pt-3">
                            <AddRestaurant />
                        </div>
                        <span className="py-2"></span>
                        <hr />
                        <div className="col-12">
                            <Table striped hover responsive>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Restaurant Name</th>
                                        <th>Restaurant Email</th>
                                        <th>Restaurant Mobile</th>
                                        <th>Restaurant Address</th>
                                        <th>Restaurant Open</th>
                                        <th>Restaurant Close</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { isLoading == false ? <>{ restaurantList }</> :<td>Loading....</td> }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
