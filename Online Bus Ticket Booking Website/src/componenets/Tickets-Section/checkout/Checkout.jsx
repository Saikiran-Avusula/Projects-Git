import RootLayout from "../../Layout-Section/RootLayout"
import TopLayout from "../../Top-Page-Layout/TopLayout"
import BusSeatsPhoto from '../../../../src/assets/bus-seats-photo.jpg'
import PassengerData from "./passenger-Data/PassengerData"
import BookingStatus from "./bookingStatus/BookingStatus"

const CheckOut = () => {
    return (
        <div className="py-20">
            <TopLayout className={"py-20"}
                bgImg={BusSeatsPhoto}
                title={"Ticket Chek Out "}
            />

            <RootLayout className="space-y-12 relative w-full pb-16 border" >
                <div className="w-full grid grid-cols-5 items-start gap-44 relative">
                    {/* passenger Details */}
                    <PassengerData />

                    {/* ticket Report Status */}
                    <BookingStatus />
                </div>
            </RootLayout>
        </div>
    )
}

export default CheckOut
