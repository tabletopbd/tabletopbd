import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/LocationLogo.jpg';
import MobileFooter from '../../components/MobileFooter';

export default function ChoosePage() {
    return (
        <>
            <div className='container'>
                <div className='main'>
                    <div className="header">
                        <img
                        alt="Location Logo"
                        src={Logo}
                        height="120"
                        />
                    </div>
                    <div className='description'>
                        <p className='headline'>Choose from</p>
                        <p className='head-paragraph'>
                           a large collection of restaurants
                        </p>
                    </div>
                    <NavLink to='/dashboard'>
                        <h3>Start</h3>
                    </NavLink>
                </div>
            </div>
        </>
    )
}