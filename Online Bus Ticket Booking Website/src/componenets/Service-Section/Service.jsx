import { RiRefund2Line, RiSecurePaymentLine } from "react-icons/ri";
import RootLayout from "../Layout-Section/RootLayout";
import ServiceCard from "./ServiceCard";
import { PiHeadsetFill } from "react-icons/pi";

const Service = () => {
    return (
        <>

            <RootLayout className={"space-y-12"}>

                {/* tag */}
                <div className="w-full flex-itmes justify-center items-center text-center">
                    <h1 className="text-4xl text-neutral-800 font-bold">
                        Our
                        <span className="text-red-500 px-3">
                            Services
                        </span>
                    </h1>
                </div>

                {/* Services Card */}
                <div className="w-full grid grid-cols-3 gap-10">
                    <ServiceCard icon={RiSecurePaymentLine} title={"Secure Payment Line"} desc={"Integrate secure payment gateways for user to pay for their tickets."} />
                    <ServiceCard icon={RiRefund2Line} title={"Refund Policy"} desc={"Offer options for the users to purchase refundable tickets with clear terms."} />
                    <ServiceCard icon={PiHeadsetFill} title={"24/7 Support"} desc={"Get assistance anytime through chat, email, or phone."} />
                </div>


            </RootLayout>
        </>
    )
}

export default Service;