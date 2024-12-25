import RootLayout from "../../Layout-Section/RootLayout"
import TopLayout from "../../Top-Page-Layout/TopLayout"
import BusSeatsPhoto from '../../../assets/bus-seats-photo.jpg'
import { Link } from "react-router-dom"
import WarningAlert from "../../Alert-Message-Section/WarningAlert"
import BusSeat from "./Seat/BusSeat/BusSeat"

const Details = () => {


    // show the warning message box
    const message = (
        <>
            One individual only can book 10 seats. If you want book more than 10 seats,
            <Link to={"/support-team"} className="text-yellow-900 font-medium" title={"click for support"}> Please Contact Our Support Team.</Link>
        </>
    );


    return (
        <div className="w-full space-y-12 py-16">
            {/* Top Layout */}
            <TopLayout className={"py-20"}
                bgImg={BusSeatsPhoto}
                title={"Bus Details"}
            />

            <RootLayout className="space-y-12 relative w-full pb-16" >

                {/* Seat layput and selection action details */}
                <div className="w-full space-y-8">
                    {/* warning Message */}
                    <WarningAlert message={message} />

                    {/* Seat Layout */}
                    <BusSeat />

                </div>

                {/* Bus details */}
                <div className="w-full flex items-center justify-center flex-col gap-8 text-center">

                </div>
            </RootLayout>
        </div>
    )
}

export default Details
