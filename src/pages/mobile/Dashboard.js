import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import MobileFooter from "../../components/MobileFooter";
import DiscountsIcon from '../../assets/img/mobileDiscounts.png';
import RestaurantIcon from '../../assets/img/mobileRestaurant.png';
import LocationIcon from '../../assets/img/mobileLocation.png';
import TipsIcon from '../../assets/img/mobileTips.png';
import ContactIcon from '../../assets/img/mobileContact.png';
import FollowIcon from '../../assets/img/mobileFollow.png';
import DashboardBG from '../../assets/img/mobileDashboardBG.jpg';
import { Link } from 'react-router-dom';
import Navigation from '../../components/Navigation';


export default function Dashboard() {
    return (
        <>
        <Navigation />
        <Image className='dashboard' src={DashboardBG} />
        <div className="container" id='dashboard'>
            <div className="row mobile-cards-wrapper">
                <div className='col'>
                    <Link to='/discounts'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={DiscountsIcon} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 p-2">
                                    <h6>Discounts</h6>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col">
                    <Link to='/restaurants'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={RestaurantIcon} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 p-2">
                                    <h6>Restaurants</h6>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col">
                    <Link to='/locations'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={LocationIcon} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 p-2">
                                    <h6>Locations</h6>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col">
                    <Link to='/tips'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={TipsIcon} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 p-2">
                                    <h6>Tips</h6>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col">
                    <Link to='/contactus'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={ContactIcon} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 p-2">
                                    <h6>Contact</h6>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className="col">
                    <Link to='/follow'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={FollowIcon} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2 p-2">
                                    <h6>Follow</h6>
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </div>
            <MobileFooter />
        </div>
        </>
    )
}