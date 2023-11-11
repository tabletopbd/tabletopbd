import { Link } from 'react-router-dom';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import MobileFooter from "../../components/MobileFooter";
import TipsBG from '../../assets/img/mobileDashboardBG.jpg'
import Tip1 from '../../assets/img/1.png';
import Tip2 from '../../assets/img/2.png';
import Tip3 from '../../assets/img/3.png';
import Tip4 from '../../assets/img/4.png';
import Tip5 from '../../assets/img/5.png';
import Tip6 from '../../assets/img/6.png';

export default function Tips() {
    return (
        <>
            <Image className='locations' src={TipsBG} />
            <div className="container" id='tips'>
                <div className="row mobile-cards-wrapper">
                    <div className='col'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={Tip1} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-2 mb-2">
                                    Find Restaurants
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={Tip2} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-3 mb-2">
                                    See Discounts
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={Tip3} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-3 mb-2">
                                    Reserve Date       
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={Tip4} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-3 mb-2">
                                    Receive SMS 
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={Tip5} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-3 mb-2">
                                    Discounted Bill
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    
                    <div className='col'>
                        <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                            <Card.Body>
                                <Card.Title className="mt-2"><Image src={Tip6} height={60} /></Card.Title>
                                <Card.Subtitle className="mt-3 mb-2">
                                    Follow Page
                                </Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </div>
                    
                </div>
                <MobileFooter />
            </div>
        </>
    )
}