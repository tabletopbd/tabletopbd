import MobileFooter from '../components/MobileFooter';
import MobileWelcome from './mobile/MobileWelcome';
import Restaurants from './Restaurants';
import WelcomePageContent from './WelcomePageContent';
import Dashboard from './mobile/Dashboard';
import PercentagePage from './mobile/PercentagePage';
import ChoosePage from './mobile/ChoosePage';
import TimePage from './mobile/TimePage';

function Body() {
    let firstTimeUse = false;

    if(window.localStorage.getItem("FirstTimeOpen") != "1") {
        // Running for the first time.
        window.localStorage.setItem("FirstTimeOpen", "1");
        console.log("1st time");
        firstTimeUse = true;
    }
    
    const device = window.cordova;

    const showContentOn = ( 
        device ? (
            <div className='mobile' id='mobile'>
               { firstTimeUse ? <MobileWelcome /> : <Dashboard /> }
            </div>
        ) : (
            <div className='primary-section'>
                <WelcomePageContent/>
                {/* { firstTimeUse ? <MobileWelcome /> : <WelcomePageContent /> } */}
            </div>
        )
    )

    
    return (
         [showContentOn]
    )
}

export default Body;