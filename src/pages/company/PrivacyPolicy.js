import MobileFooter from "../../components/MobileFooter";
export default function PrivacyPolicy() {
    const device = window.cordova;
    const showPrivacyPolicyContent = ( 
        device ? (
            <>
                <MobileFooter />
            </>
        ) : (
            <div className="col-xs-12 col-sm-12 col-md-8 offset-2 mt-3">
                <h1>Privacy Policy</h1>
                <p>
                    <strong>Personal: </strong><strong>Tabletop</strong> has the right to co-operate with authorities in the case any Content violates the law. The identity of Merchants, users or buyers may be determined, for example by an ISP. IP addresses may also be registered in order to ensure compliance with the terms and conditions.
                </p>
                <p>
                    <strong>Privacy: </strong>www.tabletopbd.com will collect information from Users and Merchants. It is a condition of use of the www.tabletopbd.com that each User and advertiser consents and authorizes tabletopbd.com to collect and use this information. www.tabletopbd.com reserves the right to disclose it to Company Affiliates and any other person for the purposes of administering, supporting and maintaining www.tabletopbd.com, as well as for improving www.tabletopbd.com, for example by using the information for research, marketing, and product development and planning.
                </p>
                <p>
                    <strong>Cookies: </strong>This site uses cookies, which means that you must have cookies enabled on your computer in order for all functionality on this site to work properly. A cookie is a small data file that is written to your hard drive when you visit certain websites. Cookie files contain certain information, such as a random number user ID that the site assigns to a visitor to track the pages visited. A cookie cannot read data off your hard disk or read cookie files created by other sites. Cookies, by themselves, cannot be used to find out the identity of any user.
                </p>
                <p>
                    <strong>Email Address of Users: </strong>: Users are required to submit a valid email address. The email address of the User shall not be publicly displayed but other users are permitted to send email to the User through www.tabletopbd.com.
                </p>
                <p>
                    <strong>Watermarks: </strong>All images on www.tabletopbd.com are watermarked, which prevents the images to be used for other purposes, without the consent of the Merchants.
                </p>
                <p>
                    <strong>Copyright: </strong>Merchants grant www.tabletopbd.com and a perpetual, royalty-free, irrevocable, non-exclusive right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from and distribute such Content or incorporate such Content into any form, medium, or technology now known or later developed. The material (including the Content, and any other content, software or services) contained on www.tabletopbd.com are the property of Tabletop, its subsidiaries, affiliates and/or third-party licensors. Any intellectual property rights, such as copyright, trademarks, service marks, trade names and other distinguishing brands on the website are the property of Tabletop. To be clear: No material on this site may be copied, reproduced, republished, installed, posted, transmitted.
                </p>
                <p className="mb-4">
                    <br />
                </p>
            </div>
        )
     )
    return(
        <div className="container">
            { showPrivacyPolicyContent }
        </div>
    )
}