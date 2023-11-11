import MobileFooter from "../../components/MobileFooter";
export default function Terms() {
    const device = window.cordova;
    const showTerms = ( 
        device ? (
            <>
                <MobileFooter />
            </>
        ) : (
             <div className="col-xs-12 col-sm-12 col-md-8 offset-2 mt-3">
                <h1>Terms & Conditions</h1>
                <p>
                <strong>Tabletop</strong> is a service provided by Tabletop through its website www.tabletopbd.com (subject to your compliance with the Terms & Conditions set forth below). Please read these Terms & Conditions before using this Website.
                </p>
                <p>
                    <strong>General:</strong> Merchants and Users are responsible for ensuring that advertising content, text, images, graphics, and video ("Content") uploaded for inclusion on www.tabletopbd.com complies with all applicable laws. Tabletop assumes no responsibility for any illegality or any inaccuracy of the Content. 
                </p>
                <p>
                    The Merchants and User guarantee that his or her Content do not violate any copyright, intellectual property rights or other rights of any person or entity, and agrees to release www.tabletopbd.com from all obligations, liabilities and claims arising in connection with the use of (or the inability to use) the service.
                </p>
                <p>
                    Merchants agree that their Content can may be presented through www.tabletopbd.com ‘s partner sites under the same terms and conditions as on www.tabletopbd.com. 
                </p>
                <p>
                    <strong>Copyright:</strong> Merchants grant www.tabletopbd.com and a perpetual, royalty-free, irrevocable, non-exclusive right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from and distribute such Content or incorporate such Content into any form, medium, or technology now known or later developed.
                    The material (including the Content, and any other content, software or services) contained on www.tabletopbd.com are the property of Tabletop., its subsidiaries, affiliates and/or third-party licensors. Any intellectual property rights, such as copyright, trademarks, service marks, trade names and other distinguishing brands on the website are the property of Tabletop. To be clear: No material on this site may be copied, reproduced, republished, installed, posted, transmitted, stored or distributed without written permission from Tabletop.

                </p>
                <p>
                    <strong>Watermarks:</strong> All images on www.www.tabletopbd.com are watermarked, which prevents the images to be used for other purposes, without the consent of the Merchants.
                </p>
                <p>
                    <strong>Safety and images:</strong> www.tabletopbd.com reserve the right to change the title of the Content, for editorial purposes. www.tabletopbd.com reserves the right not to publish images that are irrelevant or images that violate Tabletop’s rules.
                </p>
                <p>
                    <strong>Personal:</strong> Tabletop has the right to co-operate with authorities in the case any Content violates the law. The identity of Merchants, Users or buyers may be determined, for example by an ISP. IP addresses may also be registered in order to ensure compliance with the terms and conditions.
                </p>
                <p>
                    <strong>Privacy:</strong> www.tabletopbd.com will collect information from Users and Merchants. It is a condition of use of the www.tabletopbd.com that each User and advertiser consents and authorises www.tabletopbd.com to collect and use this information.www.tabletopbd.com reserves the right to disclose it to Company Affiliates and any other person for the purposes of administering, supporting and maintaining www.tabletopbd.com, as well as for improving www.tabletopbd.com, for example by using the information for research, marketing, and product development and planning.
                </p>
                <p>
                    <strong>Cookies:</strong> This site uses cookies, which means that you must have cookies enabled on your computer in order for all functionality on this site to work properly. A cookie is a small data file that is written to your hard drive when you visit certain websites. Cookie files contain certain information, such as a random number User ID that the site assigns to a visitor to track the pages visited. A cookie cannot read data off your hard disk or read cookie files created by other sites. Cookies, by themselves, cannot be used to find out the identity of any User.
                </p>
                <p>
                <strong>Email Address of Users:</strong> Users are required to submit a valid email address. The email address of the User shall not be publicly displayed but other Users are permitted to send email to the User through www.tabletopbd.com.
                </p>
                <p>
                    <strong>Site availability:</strong> www.tabletopbd.com does not guarantee continuous or secure access to the website. The website is provided "as is" and as and when available.
                </p>
                <p>
                    <strong>Links to third party websites:</strong> www.tabletopbd.com may contain links or references to other websites ('Third Party Websites'). www.tabletopbd.com will not be responsible for the contents in Third Party Websites. Third Party Websites are not investigated or monitored. In the event the User decides to leave www.tabletopbd.com and access Third Party Sites, the User does so at his/her own risk.
                </p>
                <p>
                    <strong>Paid content:</strong> In the event that Paid Content violates any aspect of these Terms & Conditions, www.tabletopbd.com may, in its sole discretion and without refund, remove the Paid Content from www.tabletopbd.com. Users and Merchants may delete any Paid Content prior to the end of the paid-for period, and www.tabletopbd.com shall have no further responsibility to display the deleted content. www.tabletopbd.com is neither responsible nor liable for the perceived success or failure of any Paid Content posted on www.tabletopbd.com.
                </p>
                <p>
                    <strong>Disclaimer:</strong> Tabletop assume no responsibility what so ever for the use of www.tabletopbd.com and disclaims all responsibility for any injury, claim, liability, or damage of any kind resulting from or arising out of or any way related to (a) any errors on www.tabletopbd.com or the Content, including but not limited to technical errors and typographical errors, (b) any third party web sites or content directly or indirectly accessed through links in www.tabletopbd.com (c) the unavailability of www.tabletopbd.com, (d) your use of www.tabletopbd.com or the Content, or (e) your use of any equipment (or software) in connection with www.tabletopbd.com.

                </p>
                <p>
                    <strong>Indemnification:</strong> Merchants and Users agree to indemnify www.tabletopbd.com as well as its officers, directors, employees, agents, from and against all losses, expenses, damages and costs, including attorney’s fees, resulting from any violation of this Terms and Conditions (including negligent or wrongful conduct).
                </p>
                <p>
                    <strong>Modifications:</strong> Tabletop reserves the right to modify these Terms and Conditions. Such modifications shall be effective immediately upon posting on www.tabletopbd.com. You are responsible for the reviewing of such modifications. Your continued access or use of www.tabletopbd.com shall be deemed your acceptance of the modified terms and conditions.
                </p>
                <p className="mb-4">
                    <br />
                </p>
            </div>
        )
    )
    return(
       <div className="container">
            { showTerms }
       </div>
    )
}