import { NavLink, Link } from 'react-router-dom';
import {
    faHome,
    faUtensils,
    faHeart,
    faUser,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileFooter() {
    return (
        <>
            <div className="row footer-restaurant-android">
                <div className="col-3 home">
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/dashboard"}>
                        <FontAwesomeIcon icon={faHome} /> 
                    </NavLink>
                </div>
                <div className="col-3 restaurants">
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/restaurants"}>
                        <FontAwesomeIcon icon={faUtensils} />
                    </NavLink>
                </div>
                <div className="col-3 favorite">
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/favorite"}>
                        <FontAwesomeIcon icon={faHeart} />
                    </NavLink>
                </div>
                <div className="col-3 profile">
                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to={"/contactus"}>
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </NavLink>
                </div>
            </div>
        </>
    )
}