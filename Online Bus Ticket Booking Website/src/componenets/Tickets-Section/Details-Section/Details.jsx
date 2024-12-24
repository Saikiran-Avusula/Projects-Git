import RootLayout from "../../Layout-Section/RootLayout"
import TopLayout from "../../Top-Page-Layout/TopLayout"
import BusSeatsPhoto from '../../../assets/bus-seats-photo.jpg'
import { Link } from "react-router-dom"

const Details = () => {


    // show the warning message box

    <>

        One individual only can book 10 seats. If you want book more than 10 seats,
        Please <Link to={"/support-team"} className="text-yellow-700 font-medium">Contact Our Support Team.</Link>
    </>
    return (
        <div className="w-full space-y-12 py-16">
            {/* Top Layout */}
            <TopLayout className={"py-20"}
                bgImg={BusSeatsPhoto}
                title={"Bus Details"}
            />

            <RootLayout className="spacey-12 relative w-full pb-16" />
        </div>
    )
}

export default Details
