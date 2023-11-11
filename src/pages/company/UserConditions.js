import MobileFooter from "../../components/MobileFooter";
export default function UserConditions() {
    const device = window.cordova;
    const showUserConditions = ( 
        device ? (
            <>
                <MobileFooter />
            </>
        ) : (
            <div className="col-xs-12 col-sm-12 col-md-8 offset-2 mt-3">
                <h1 className="mt-2 mb-3">User Conditions</h1>
                <ol>
                    <li>
                    <h6>
                            মেনু এবং মূল্য বিজ্ঞপ্তি ছাড়াই পরিবর্তন সাপেক্ষে |
                    </h6>
                    </li>
                    <li>
                        <h6>
                            দেরিতে আগমনের ফলে বুকিং বাতিল হতে পারে।
                        </h6>
                    </li>
                    <li>
                        <h6>
                            ট্যাবলেটপ ডিসকাউন্ট শুধুমাত্র খাবারের উপর প্রযোজ্য।
                        </h6>
                    </li>
                    <li>
                        <h6>
                            শুধুমাত্র টেবিলটপের মাধ্যমে সংরক্ষিত আসন সংখ্যা ছাড়ের জন্য প্রযোজ্য।
                        </h6>
                    </li>
                    <li>
                        <h6>
                            ট্যাবলেটপ ডিসকাউন্ট অন্য কোনো ইন-হাউস অফারের সাথে পাওয়া যাবে না।
                        </h6>
                    </li>
                    <li>
                        <h6>
                            অতিথিদের সংখ্যা অবশ্যই টেবিলটপে সংরক্ষিত আসন সংখ্যার সমান হতে হবে।
                        </h6>
                    </li>
                    <li>
                        <h6>
                            টেবিল রিজার্ভেশন রিজার্ভেশন সময় থেকে সর্বোচ্চ ৩০ মিনিট এর জন্য সংরক্ষণ করা হবে|
                        </h6>
                    </li>
                </ol>
                <h2 className="mt-2 mb-3">Special Conditions</h2>
                <ol>
                    <li>
                        <h6>
                            Late arrivals may result in cancellation of booking.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            Menu and pricing are subject to change without notice
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            The user account will be blocked after three incidents of no show.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            <strong>Tabletop</strong> discounts cannot be availed with any other in-house offers.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            <strong>Tabletop</strong> discounts are only valid on food and not on any kind of beverages.

                        </h6>     
                    </li>
                    <li>
                        <h6>
                            The Reservations are held for maximum of 30 minutes from the reservation time.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            Only the number of seats reserved through <strong>Tabletop</strong> will be eligible for discounts.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            All the guests are expected to be present during the specific reservation time-slots.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            Number of guests must be equal to the number of seats reserved through <strong>Tabletop</strong>.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            No show implies the booking is confirmed but the guests did not come to the restaurant.
                        </h6>     
                    </li>
                    <li>
                        <h6>
                            All prices in <strong>BDT</strong> and are exclusive of tax and service charge unless otherwise indicated.
                        </h6>     
                    </li>
                </ol>
                <p className="mb-4">
                    <br />
                </p>
            </div>
        )
     )
    return (
        <div className="container">
            { showUserConditions }
        </div>
    )
}