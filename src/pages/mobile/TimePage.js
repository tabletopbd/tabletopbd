import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/TimeLogo.jpg';
import MobileFooter from '../../components/MobileFooter';

export default function TimePage() {
    return (
        <>
            <div className='container'>
                <div className='main'>
                    <div className="header">
                        <img
                        alt="Time Logo"
                        src={Logo}
                        height="120"
                        />
                    </div>
                    <div className='description'>
                        <p className='headline'>টাইম রিসার্ভ করুন আর</p>
                        <p className='head-paragraph'>
                            প্রতিটি রেস্তোরাঁয় ডিস্কাউন্ট পান 
                        </p>
                    </div>
                    <NavLink to='/starter-choose'>
                        <h3>Next</h3>
                    </NavLink>
                </div>
            </div>
        </>
    )
}