import MobileFooter from "../../components/MobileFooter";
import {
    faPersonDigging,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Favorite() {
    return (
        <>
            <div className="container favorite-bg text-center">
                <div className="row">
                    <div className="col-10 offset-1">
                        <h1>
                            <FontAwesomeIcon icon={faPersonDigging} />
                        </h1>
                        <h3>Favorite restaurant coming soon...</h3>
                    </div>
                </div>
                <MobileFooter />
            </div>
        </>
    )
}