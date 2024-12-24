// rafce

import { FaBus } from "react-icons/fa"
import TicketCard from "../Ticket-Card Section/TicketCard"

import { GrRefresh } from "react-icons/gr"

const SearchResults = () => {

    return (
        <div className="w-full col-span-3 space-y-10 pt-3">
            <div className="space-y-6">
                <TicketCard icon={FaBus} busName={"Sworgadwari Deluxe"} routeFrom={"Kathmandu"}
                    routeTo={"Pyuthan"} arrivalTime={"6:15 PM"} departureTime={"8:45 AM"} price={"1600"}
                    availableSeats={"5"}
                />
                <TicketCard icon={FaBus} busName={"Sworgadwari Deluxe"} routeFrom={"Kathmandu"}
                    routeTo={"Pyuthan"} arrivalTime={"6:15 PM"} departureTime={"8:45 AM"} price={"1600"}
                    availableSeats={"5"}
                />
                <TicketCard icon={FaBus} busName={"Sworgadwari Deluxe"} routeFrom={"Kathmandu"}
                    routeTo={"Pyuthan"} arrivalTime={"6:15 PM"} departureTime={"8:45 AM"} price={"1600"}
                    availableSeats={"5"}
                />
                <TicketCard icon={FaBus} busName={"Sworgadwari Deluxe"} routeFrom={"Kathmandu"}
                    routeTo={"Pyuthan"} arrivalTime={"6:15 PM"} departureTime={"8:45 AM"} price={"1600"}
                    availableSeats={"5"}
                />
                <TicketCard icon={FaBus} busName={"Sworgadwari Deluxe"} routeFrom={"Kathmandu"}
                    routeTo={"Pyuthan"} arrivalTime={"6:15 PM"} departureTime={"8:45 AM"} price={"1600"}
                    availableSeats={"5"}
                />
                <TicketCard icon={FaBus} busName={"Sworgadwari Deluxe"} routeFrom={"Kathmandu"}
                    routeTo={"Pyuthan"} arrivalTime={"6:15 PM"} departureTime={"8:45 AM"} price={"1600"}
                    availableSeats={"5"}
                />
            </div>

            <div className="w-full flex items-center justify-center">
                <button className='w-fit px-3 py-2 bg-red-500  flex flex-row bg-red-500 border-2 border-red-500 rounded-xl 
                        hover:bg-white hover:text-red-500 text-base font-normal text-white items-center justify-center 
                        gap-x-2 ease-in-out duration-300'>
                    <GrRefresh />

                    Load More
                </button>
            </div>

        </div>
    )
}

export default SearchResults
