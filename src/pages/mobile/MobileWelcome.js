import Logo from '../../assets/img/logo.png';
import MobileFooter from '../../components/MobileFooter';
import SponsorIDEA from '../../assets/img/iDEA.png';
import { NavLink } from 'react-router-dom';
import {
    faArrowRight,
   
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileWelcome() {
    return (
        <>
            <div className='container'>
                <div className='main'>
                    <div className="header">
                        <img
                        alt="Company Logo"
                        src={Logo}
                        height="120"
                        />
                        <h2>TABLETOP</h2>
                    </div>
                    <div className='description'>
                        <p className='headline'>সব রেস্টুরেন্টে টপ ডিসকাউন্ট</p>
                        <p className='head-paragraph'>
                            a restaurant reservation platform
                        </p>
                    </div>

                    <div className='sponsor'>
                        <h6>Supported by</h6>
                        <img alt="Sponsor Logo Idea" 
                            src={SponsorIDEA}
                            width="100"
                            height="40"
                        />
                    </div>

                    <div className='mobile-welcome-arrow'>
                        <NavLink to='/starter-percentage'>
                            <h3><FontAwesomeIcon icon={faArrowRight} /></h3>
                        </NavLink>
                    </div>
                    
                    
                    
                </div>
                
            </div>
        </>
    )
}