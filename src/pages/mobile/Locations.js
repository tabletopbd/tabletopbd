import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import MobileFooter from "../../components/MobileFooter";
import LocationsBG from '../../assets/img/mobileDashboardBG.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function Locations() {

    return (
        <>
            <Image className='locations' src={LocationsBG} />
            <div className="container" id='locations'>
                <div className="row mobile-cards-wrapper">
                    <div className='col'>
                        <Link to='/restaurants/location/Banani'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} /> 
                                    <h3>
                                        Banani
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='/restaurants/location/Baily Road'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h3>
                                        Baily Road
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='/restaurants/location/Mirpur'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h3>
                                        Mirpur
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='/restaurants/location/Uttara'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h3>
                                        Uttara
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='/restaurants/location/Dhanmondi'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h3>
                                        Dhanmondi
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='/restaurants/location/Khilgaon'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h3>
                                        Khilgaon
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='/restaurants/location/Mohammadpur'>
                            <Card text='light' className='bg-alternate-blue mb-5 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h3>
                                        Mohammadpur
                                    </h3>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='mb-5'></div>
                </div>
                <MobileFooter />
            </div>
        </>
    )
}