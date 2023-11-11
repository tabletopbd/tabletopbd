import MobileFooter from "../../components/MobileFooter";

export default function AboutUs() {
    const device = window.cordova;

    const showAboutUs = ( 
        device ? (
            <>
                <MobileFooter />
            </>
        ) : (
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 offset-2 col-lg-10 offset-lg-1 mt-3">
                    <h1 className="mt- mb-3">About Us</h1>
                    <p>
                        <strong>Tabletop </strong> is a digital restaurant reservation platform. Where users can enjoy time-based discounts on excellent food. Tabletop connects customers with restaurants via time-based discount.
                    </p>
                    <p>
                    <strong>Tabletop </strong> has been created by a team who is extremely passionate about food. We aspire to connect the food lovers with their beloved restaurants through our website. Users can choose to enjoy food anywhere and enjoy discounts every time. It’s completely free to use.
                    </p>
                    <p>
                        How often do you find yourself asking, where you should go to eat with your friends? What are the newest and top restaurants in town? What are the things you absolutely must try when visiting a particular restaurant? Can you save some money while still dining at any restaurant of the city?
                    </p>
                    <p>
                    <strong>Tabletop </strong> has all these answers. We have managed to offer a collection of exciting restaurants and everyday discounts at your fingertips. With one click you can enjoy these offers with your friends and family anytime. We wish you a happy eating out experience.
                    </p>
                </div>
            </div>
        )
    )
    return (
        <div className="container">

            { showAboutUs }
        </div>
    )
}