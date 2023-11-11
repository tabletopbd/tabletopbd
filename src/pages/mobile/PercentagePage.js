import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/PercentageLogo.jpg';
import MobileFooter from '../../components/MobileFooter';

export default function PercantagePage() {
    return (
        <>
            <div className='container-fluid'>
                <div className='main'>
                    <div className="header">
                        <img
                        alt="Percentage Logo"
                        src={Logo}
                        height="120"
                        />
                    </div>
                    <div className='description'>
                        <p className='headline'>সব রেস্টুরেন্টে টপ ডিসকাউন্ট</p>
                        <p className='head-paragraph'>
                            বুক করলেই ডিস্কাউন্ট!
                        </p>
                    </div>
                    <NavLink to='/starter-time'>
                        <h3>Next</h3>
                    </NavLink>
                </div>
            </div>
        </>
    )
}