import RootLayout from "../../Layout-Section/RootLayout"
import TopLayout from "../../Top-Page-Layout/TopLayout"
import BusSeatsPhoto from '../../../assets/bus-seats-photo.jpg'
import { Link } from "react-router-dom"
import WarningAlert from "../../Alert-Message-Section/WarningAlert"
import BusSeat from "./Seat/BusSeat/BusSeat"
import ToggleButton from "../../Top-Search Section/toggleBtn/ToggleButton"
import Amenities from "./Seat/BusSeat/amenities/Amenities"
import ReservationPolicy from "./Seat/BusSeat/reservationpolicy/ReservationPolicy"
import BusImage from "./busImage/BusImage"


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

                    {/* Short Descrbition about the bus */}
                    <p className="text-base text-neutral-500 font-normal text-justify">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis minima voluptatem deserunt,
                        ab hic ex. Explicabo excepturi magni blanditiis non ut doloribus cum saepe labore dolor voluptatum?
                        Facere, error tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minima perspiciatis quis consectetur dolor tenetur? Impedit voluptatibus totam in dicta. Suscipit, adipisci magni. Vero eos iste, amet assumenda facilis id?
                        <span className="text-lg text-neutral-600 font-medium ml-2">
                            Want to see more about us ?
                        </span>
                    </p>

                    {/* button */}
                    <div className="w-full flex items-center justify-center gap-6 flex-col">
                        <ToggleButton
                            buttonText={"See Bus Details"}
                            buttonTextHidden={"Close Bus Details"}
                        >
                            <div className="w-full space-y-10">
                                {/* reservations policy and amenities */}
                                <div className="w-full grid grid-cols-7 gap-20">
                                    {/* {Aminitites} */}
                                    <Amenities />

                                    {/* Reservations */}
                                    <ReservationPolicy />
                                </div>
                                {/* bus images */}
                                <BusImage />
                            </div>
                        </ToggleButton>
                    </div>
                </div>
            </RootLayout>
        </div>
    )
}

export default Details
