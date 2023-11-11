import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import HeroBG from '../assets/img/hero-bg.jpg';
import Foodies from '../assets/img/Foodies.png';
import LocationIcon from '../assets/img/location.png';
import RestaurantIcon from '../assets/img/restaurant.png';
import Tip1 from '../assets/img/1.png';
import Tip2 from '../assets/img/2.png';
import Tip3 from '../assets/img/3.png';
import Tip4 from '../assets/img/4.png';
import Tip5 from '../assets/img/5.png';
import Tip6 from '../assets/img/6.png';
import Banani from '../assets/img/Banani.png';
import Uttara from '../assets/img/Uttara.png';
import BailyRoad from '../assets/img/Baily_Road.png';
import Mohammadpur from '../assets/img/Mohammadpur.png';
import Khilgaon from '../assets/img/Khilgaon.png';
import Dhanmondi from '../assets/img/Dhanmondi.png';
import Mirpur from '../assets/img/Mirpur.png';
import SponsorIDEA from '../assets/img/iDEA.png';
import SponsorDigitalBangladesh from '../assets/img/digital_bangladesh.png';
import SponsorICTDivision from '../assets/img/ICTDivision.png';
import AppStore from '../assets/img/App_Store.png';
import GooglePlay from '../assets/img/Google_Play.png';
import whiteLogo from '../assets/img/TTWhiteLogo.png';
import facebook from '../assets/img/facebook.png';
import linkedin from '../assets/img/linkedin.png';
import instagram from '../assets/img/instagram.png';
import youtube from '../assets/img/youtube.png';
import '../assets/css/main.css';
import useAuth from '../hooks/useAuth';

export default function WelcomePageContent(){
    const isLoggedIn = useAuth();

    return (
        <div>
            <Image src={HeroBG} alt="Background Image" id='banner' />
            <div className='text-on-image'>
                <p className='headline hide-on-sm-device'>সব রেস্টুরেন্টে টপ ডিসকাউন্ট !</p>
                <p className='head-paragraph'>
                    টাইম রিসার্ভ করুন এবং প্রতিটি রেস্তোরাঁয় প্রতিদিন ৫০% পর্যন্ত ডিসকাউন্ট পান! বুক করলেই ডিসকাউন্ট!
                </p>
                <a href="/restaurants" className="hide-on-sm-device btn orange-button rounded-0 p-3 px-5">Book Now</a>
            </div>
           
            <div className='cardSection mt-5 mb-4'>
                <Container>
                     <Row>
                        <Col>
                            <Card className='mb-3 rounded-0 main-cards'>
                                <Card.Body>
                                    <Card.Title className='mt-3'>Tabletop</Card.Title>
                                    <Card.Text>
                                        <p className='mt-4'>
                                            The only restaurant reservation platform <br /> 
                                            <br />
                                            Top discounts at top restaurants! <br />
                                            <br />
                                            Get up to 50% Off!
                                        </p>
                                        <a href="/restaurants" className="btn orange-button rounded-0 p-2 px-4 mt-2">Book Now</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card text='light' className='bg-dark-grey mb-3 rounded-0 main-cards'>
                                <Card.Body>
                                    <Card.Title><Image src={Foodies} /></Card.Title>
                                    <Card.Subtitle className="mt-4 mb-2">
                                        <h3>Foodies</h3>
                                    </Card.Subtitle>
                                    <Card.Text className="mt-3">
                                        View deals and discounts
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card text='light' className='bg-alternate-blue mb-3 rounded-0 main-cards'>
                                <Card.Body>
                                    <Card.Title><Image src={LocationIcon}  /></Card.Title>
                                    <Card.Subtitle className="mt-4 mb-2">
                                        <h3>Location</h3>
                                    </Card.Subtitle>
                                    <Card.Text className="mt-3">
                                        From all around the city
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card text='light' className='bg-halloween-orange mb-3 rounded-0 main-cards'>
                                <Card.Body>
                                    <Card.Title><Image src={RestaurantIcon} /></Card.Title>
                                    <Card.Subtitle className="mt-4 mb-2">
                                        <h3>Restaurants</h3>
                                    </Card.Subtitle>
                                    <Card.Text className="mt-3">
                                        At the best places
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='top_tips_section bg-alternate-blue'>
                <Container>
                    <p className='top_tips_headline text-light mb-0'>
                        Top Tips
                    </p>
                    <Row>
                        <Col>
                            <Card bg='transparent' text='light' className='rounded-0 border-0'>
                                <Card.Body>
                                    <Card.Title><Image src={Tip1} /></Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        Find Restaurants
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg='transparent' text='light' className='rounded-0 border-0'>
                                <Card.Body>
                                    <Card.Title><Image src={Tip2} /></Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        See Discounts
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg='transparent' text='light' className='rounded-0 border-0'>
                                <Card.Body>
                                    <Card.Title><Image src={Tip3} /></Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        Reserve Date       
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card bg='transparent' text='light' className='rounded-0 border-0'>
                                <Card.Body>
                                    <Card.Title><Image src={Tip4} /></Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        Receive SMS 
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg='transparent' text='light' className='rounded-0 border-0'>
                                <Card.Body>
                                    <Card.Title><Image src={Tip5} /></Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        Discounted Bill
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg='transparent' text='light' className='rounded-0 border-0'>
                                <Card.Body>
                                    <Card.Title><Image src={Tip6} /></Card.Title>
                                    <Card.Subtitle className="mb-2">
                                        Follow Page
                                    </Card.Subtitle>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='photoGallery mb-4'>
                <Container>
                    <Row>
                        <Col>
                            {/* <!-- Gallery --> */}
                            <div class="row">

                                {/* Banani */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div class="hovereffect">
                                        <Image src={Banani} className="shadow-1-strong rounded mb-3" alt="Banani Area" />
                                        
                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Banani Area</Link>
                                        </div>
                                        <h2>Banani</h2>
                                    </div>
                                </div>

                                 {/* Baily Road */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div class="hovereffect">
                                         <Image src={BailyRoad} className="shadow-1-strong rounded mb-3" alt="Baily Road Area" />
                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Baily Road Area</Link>
                                        </div>
                                        <h2>Baily Road</h2>
                                    </div>
                                </div>

                                {/* Mirpur */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div class="hovereffect">
                                         <Image src={Mirpur} className="shadow-1-strong rounded mb-3" alt="Mirpur Area" />
                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Mirpur Area</Link>
                                        </div>
                                        <h2>Mirpur</h2>
                                    </div>
                                </div>
                                
                                {/* Uttara */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div className='hovereffect'>
                                         <Image src={Uttara} className="shadow-1-strong rounded mb-3" alt="Uttara Area" />
                            
                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Uttara Area</Link>
                                        </div>
                                        <h2>Uttara</h2>
                                    </div>
                                </div>

                                {/* Mohammadpur */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div class="hovereffect">
                                        <Image src={Mohammadpur} className="shadow-1-strong rounded mb-3" alt="Mohammadpur Area" />

                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Mohammadpur Area</Link>
                                        </div>
                                        <h2>Mohammadpur</h2>
                                    </div>
                                </div>

                                {/* Dhanmondi */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div class="hovereffect">
                                       <Image src={Dhanmondi} className="shadow-1-strong rounded mb-3" alt="Dhanmondi Area" />

                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Dhanmondi Area</Link>
                                        </div>
                                        <h2>Dhanmondi</h2>
                                    </div>
                                </div>

                                {/* Khilgaon */}
                                <div class="col-sm-6 col-md-3 col-lg-4 mb-5 mb-lg-0">
                                    <div className='hovereffect'>
                                        <Image src={Khilgaon} className="shadow-1-strong rounded mb-3" alt="Khilgaon Area" />

                                        <div class="overlay">
                                            <Link to={`/restaurants/`} className="info">Khilgaon Area</Link>
                                        </div>
                                        <h2>Khilgaon</h2>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- Gallery --> */}
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Sponsor Promotion */}
            <div className="row sponsor">
                <Container>
                    <Row>
                        <Col><Image src={SponsorIDEA}/></Col>
                        <Col><Image src={SponsorDigitalBangladesh}/></Col>
                        <Col><Image src={SponsorICTDivision}/></Col>
                        <Col><Image src={AppStore}/></Col>
                        <Col>
                            <a href="https://play.google.com/store/apps/details?id=com.tabletopbd" target="_blank" rel="noopener noreferrer">
                                <Image src={GooglePlay}/>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Sponsor Promotion End */}

            {/* Social Media */}
            <div className='our-social bg-dark-grey mb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 brand ">
                                <img className="hide-on-sm-device" alt="Brand Logo White" src={whiteLogo} height="50"/>
                                <h2 className="hide-on-sm-device">Tabletop</h2>
                        </div>
                        <div className="col-md-8 social-links">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/Tabletopbd/" target="_blank">
                                            <Image src={facebook} height="30" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/tabletopbd/" target="_blank">
                                            <Image src={linkedin} height="30" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/tabletopbangladesh" target="_blank">
                                            <Image src={instagram} height="30" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Social Media End */}
        </div>
    )
}