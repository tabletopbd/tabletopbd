import { Link, useParams } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import MobileFooter from "../../components/MobileFooter";
import DiscountBG from '../../assets/img/mobileDashboardBG.jpg';

export default function Discounts() {
    return (
        <>
            <Image className='discount' src={DiscountBG} />
            <div className="container" id='discount'>
                <div className="row mobile-cards-wrapper">
                    <div className='col'>
                        <Link to={`/restaurants/discount/10`}>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <h2>10%</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to={`/restaurants/discount/15`}>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <h2>15%</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to={`/restaurants/discount/20`}>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <h2>20%</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to={`/restaurants/discount/25`}>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <h2>25%</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to={`/restaurants`}>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <h2>Special Offers</h2>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to={`/restaurants`}>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <h2>Book for Charity</h2>
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