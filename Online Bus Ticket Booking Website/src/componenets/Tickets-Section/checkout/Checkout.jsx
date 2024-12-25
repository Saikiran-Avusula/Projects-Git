import RootLayout from "../../Layout-Section/RootLayout"
import TopLayout from "../../Top-Page-Layout/TopLayout"
import BusSeatsPhoto from '../../../../src/assets/bus-seats-photo.jpg'
import PassengerData from "./passenger-Data/PassengerData"

const CheckOut = () => {
    return (
        <div className="py-20">
            <TopLayout className={"py-20"}
                bgImg={BusSeatsPhoto}
                title={"Ticket Chek Out "}
            />

            <RootLayout className="space-y-12 relative w-full pb-16" >
                <div className="w-full grid-grid-cols-7 items-start gap-44 relative">
                    {/* passenger Details */}
                    <PassengerData />

                    {/* ticket Report Status */}
                </div>
            </RootLayout>
        </div>
    )
}

export default CheckOut
