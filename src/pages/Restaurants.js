import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import logoImage from "../assets/img/logo.png";
import MobileFooter from "../components/MobileFooter";
import Loader from "../components/Looder";
import {
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Image from "react-bootstrap/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import RestaurantsBG from '../assets/img/mobileDashboardBG.jpg';


export default function Restaurants() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setErrors] = useState(false);
    const [restaurants, setRestaurants] = useState([]);
   
    const params = useParams();
    
    useEffect(() => {
        // const baseUrl = process.env.REACT_APP_API_URL;
        const baseUrl = "https://api.tabletopbd.com/api";

        const fetchRestaurants = async () => {
            try {
                // Try 
                const response = await axios.get(`${baseUrl}/restaurants`)
                setRestaurants(response.data)
                // console.log(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }

        const fetchRestaurantsFiltered = async () => {
            try {
                // Try 
                const response = await axios.get(`${baseUrl}/restaurants/${params.filter}/${params.value}`)
                setRestaurants(response.data)
                console.log(response.data)
                setIsLoading(false)
            } catch (err) {
                console.log(err)
            }
        }


        if(params && params.filter && params.value) {
            fetchRestaurantsFiltered()
        } else {
            fetchRestaurants()
        }
            

    }, [params])

    const device = window.cordova;

    const showContentOn = ( 
        device ? (
            <MobileFooter/>
        ) : (
            ""
        )
    )
    
    // const endURL = process.env.LARAVEL_APP_URL;
    const endURL = "https://api.tabletopbd.com";
   
    const basedOnDevice = ( 
        device ? (
           restaurants.map((restaurant) => (
                <div className='col'>
                    <Link to={`/restaurant/${restaurant.id}`}>
                        <Card key={ restaurant.id } text='light' bg="transparent" className='rounded-0 mobile-cards'>
                            <Card.Img variant="top" src={ 
                            `${endURL}/restaurant_images/` + restaurant.resImage
                            } />
                        </Card>
                    </Link>
                </div>
            ))
        ) : (
            restaurants.map((restaurant) => (
                <div className="col-md-4 col-lg-3 mt-2 mb-2 text-center restaurant-card">
                    <Card key={ restaurant.id }>
                        <Card.Img variant="top" src={ 
                        `${endURL}/restaurant_images/` + restaurant.resImage
                        } />
                        <Card.Body className="bg-alternate-blue text-light">
                            <Card.Title className="p-1">{ restaurant.resName }</Card.Title>
                            <hr />
                            <Card.Text className="rounded-0 p-1 h6">
                                <FontAwesomeIcon icon={faLocationDot} /> 
                                <span className="m-1">
                                    { restaurant.resLocations }
                                </span>
                            </Card.Text>
                            <Card.Text className="p-1">
                                { restaurant.resAbout }
                            </Card.Text>
                            <Link to={`/restaurant/${restaurant.id}`} className="btn orange-button border-2 rounded-0 mt-2 mb-2">Book Now</Link>
                        </Card.Body>
                    </Card>
                </div>
            ))
    )
    )
    
     
     const restaurantList = basedOnDevice;

    return (
        <div className="container">
            { device ? <div id="restaurantBGM"></div> : "" }
            {/* { device ? <Image className='dashboard' src={RestaurantsBG} /> : "" } */}
            { device ? "" : <h1 className='text-center mt-3 mb-3'>Restaurants</h1> }
            <div className="row">
                { isLoading == false ? <> { restaurantList } </> : <Loader/> }
                { hasError }
            </div>
            { showContentOn }
        </div>

        
    )
}