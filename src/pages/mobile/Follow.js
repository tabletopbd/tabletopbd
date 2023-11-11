import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import MobileFooter from "../../components/MobileFooter";
import FollowBG from '../../assets/img/mobileDashboardBG.jpg';
import Facebook from '../../assets/img/facebook.png';
import LinkedIn from '../../assets/img/linkedin.png';
import Instagram from '../../assets/img/instagram.png';

export default function Follow() {
    return (
        <>
         <Image className='follow' src={FollowBG} />
            <div className="container" id='follow'>
                <div className="row mobile-cards-wrapper">
                    <div className='col'>
                        <Link to='https://www.facebook.com/Tabletopbd/'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <Card.Title className="mt-3"><Image src={Facebook} height={50} /></Card.Title>
                                    <Card.Subtitle className="mt-2 mb-2 p-2">
                                        <h6>Facebook</h6>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='https://www.linkedin.com/company/tabletopbd/'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <Card.Title className="mt-3"><Image src={LinkedIn} height={50} /></Card.Title>
                                    <Card.Subtitle className="mt-2 mb-2 p-2">
                                        <h6>Linkedin</h6>
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>

                    <div className='col'>
                        <Link to='https://www.instagram.com/tabletopbangladesh/'>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 mobile-cards'>
                                <Card.Body>
                                    <Card.Title className="mt-3"><Image src={Instagram} height={50} /></Card.Title>
                                    <Card.Subtitle className="mt-2 mb-2 p-2">
                                        <h6>Instagram</h6>
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