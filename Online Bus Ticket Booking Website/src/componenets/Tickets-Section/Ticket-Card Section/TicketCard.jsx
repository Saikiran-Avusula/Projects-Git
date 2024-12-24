// rafce

import { FaBus, FaStar } from "react-icons/fa"
import { MdOutlineChair } from "react-icons/md"
import { RiVipFill } from "react-icons/ri"
import { TbAirConditioning } from "react-icons/tb"
import { Link } from "react-router-dom"

const TicketCard = ({ icon: Icon, busName, routeFrom, routeTo, arrivalTime, departureTime, timeDuration, price, availableSeats }) => {
    return (
        <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-4">

            {/* Bus info. , Routes. */}
            <div className="space-y-5 w-full border-b border-neutral-300/60 pb-4 ">

                {/* Route */}
                <div className="space-y-5">
                    {/* Bus Info */}
                    <div className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <FaBus className="h-5 w-5 text-red-500" />
                            <p className="text-lg text-neutral-700 font-semibold">
                                {busName}
                            </p>
                        </div>

                        <div className="flex items-center gap-x-4">
                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-1">
                                <TbAirConditioning className="w-4 h-4" />
                                <p className="text-xs text-neutral-600 font-normal">
                                    AC
                                </p>
                            </div>

                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-1">
                                <FaStar className="w-4 h-4 text-yelllow-600 " />
                                <p className="text-xs text-yellow-600 font-normal pt-0.5">
                                    4.5
                                </p>
                            </div>

                            <div className="flex items-center gap-x-1 bg-neutral-200/65 w-fit rounded-full px-1.5 py-1">
                                <RiVipFill className="w-4 h-4" />
                                <p className="text-xs text-neutral-600 font-normal">
                                    Sofa
                                </p>
                            </div>

                            <div className="flex items-center gap-x-1 bg-red-200/65 w-fit rounded-full px-1.5 py-1">
                                <MdOutlineChair className="w-4 h-4" />
                                <p className="text-xs text-neutral-600 font-normal">
                                    35 Seats
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Route */}
                    <div className="space-y-0.5">
                        <div className="w-full flex items-center justify-between gap-x-2.5" >
                            <h1 className="text-2xl text-neutral-600 font-semibold">
                                {arrivalTime}
                            </h1>

                            <div className="flex-1 border-dashed border border-red-300 relative">
                                <p className="absolute w-14 h-14 p-0.5 top-1/2 left-1/2 border-red-200 border border-neutral-00 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center">
                                    <Icon className="w-8 h-8 text-red-500 " />
                                </p>
                            </div>

                            <h1 className="text-2xl text-neutral-600 font-semibold">
                                {departureTime}
                            </h1>

                        </div>

                        <div className="w-full flex items-center justify-between">
                            <p className="texxt-base text-neutral-500 font-normal">
                                {routeFrom}
                            </p>
                            <p className="texxt-base text-neutral-500 font-normal">
                                {routeTo}
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Price, available seats, and reserve button */}
            <div className="w-full flex items-center justify-between">
                {/* price */}
                <h1 className="text-xl text-neutral-700 font-semibold">
                    Rs. {price} <span className="text-sm text-neutral-500 font-normal">
                        /per seat
                    </span>
                </h1>

                <h1 className="text-sm text-neutral-600 font-normal flex items-center justify-center mr-9">
                    <span className="text-lg text-green-700 font-bold pt-0.5">
                        {availableSeats} Seats Available
                    </span>
                </h1>

                <Link to="/bus-tickets/detail" className='w-fit p-2 bg-red-500  flex flex-row bg-red-500 border-2 border-red-500 rounded-xl 
                                                   hover:bg-white hover:text-red-500 text-sm font-normal text-white items-center justify-center 
                                                   gap-x-2 ease-in-out duration-300'>
                    Reserve Seat
                </Link>
            </div>
        </div>
    )
}

export default TicketCard
