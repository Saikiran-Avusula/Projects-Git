import { useEffect, useState } from "react"
import { GiSteeringWheel } from "react-icons/gi"
import busSeatData from "../../../../../Constants-Bus-Seat/Bus-Seat-Section/BusSeatData";
import { MdOutlineChair } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import ErrorMssage from "../../../../Alert-Message-Section/Error-Section/ErrorMssage";




const BusSeat = () => {

    // track seat selection
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [showError, setShowError] = useState(false);

    // toggle seat selection
    const handleSeatClick = (seatId) => {
        // If seat is already booked, ignore click or disable it 
        const selectedSeat = busSeatData.find((seat) => seat.id === seatId);
        if (selectedSeat.status === 'booked') {
            return; // do nothing
        };

        setSelectedSeats((prevSelectedSeats) => {
            // check if seat is already selected
            if (prevSelectedSeats.includes(seatId)) {
                // and also make the vice versa or de-select 
                return prevSelectedSeats.filter((seat) => seat !== seatId);
            }
            // show error if more than 10 seats are selected
            else {
                if (prevSelectedSeats.length >= 10) {
                    setShowError(true);
                    return prevSelectedSeats; // don't select seat more than 10
                } else {
                    return [...prevSelectedSeats, seatId];
                }
            }
        })
    };

    // hide error messgae after 5 seconds 
    useEffect(() => {
        if (showError) {
            const timer = setTimeout(() => {
                setShowError(false)
            }, 5000); //5 seconds

            return () => clearTimeout(timer)
        }
    }, [showError])


    // function to detemone seat class or seat name on status
    const getSeatName = (seat) => {
        if (seat.status === 'booked') {
            return 'text-red-500 cursor-not-allowed' // booked seat are not available
        } if (selectedSeats.includes(seat.id)) {
            return 'text-green-500 cursor-pointer' //selected seat
        }
        return 'text-neutral-600 cursor-pointer' //avilable seat
    };


    return (
        <div className="w-full grid grid-cols-5 gap-8">
            {/* Seat layout */}
            <div className="col-span-3 w-fit flex items-center justify-center shadow-sm rounded-xl p-7 border border-red-200">
                <div className="w-full space-y-7">
                    <p className="text-base text-neutral-600 font-medium text-center">
                        Click on available seats to reserve your seat.
                    </p>

                    {/* seat layout */}
                    <div className="w-full flex items-stretch gap-x-1.5">
                        <div className="w-10 h-fit">
                            <GiSteeringWheel className="text-3xl mt-7 text-red-500 -rotate-90" />
                        </div>

                        {/* Seat Rows------ */}
                        <div className="flex flex-col items-center border-l-2 border-dashed border-neutral-300 pl-7 ">

                            <div className="flex-1 space-y-3">

                                {/* 1st row */}
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5 justify-end">
                                    {busSeatData.slice(0, 9).map((seat) => (
                                        <div key={seat.id}
                                            className="flex items-center"
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className="text-base text-neutral-600 font-bold">{seat.id}</h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* 2nd row */}
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5">
                                    {busSeatData.slice(9, 18).map((seat) => (
                                        <div key={seat.id}
                                            className="flex items-center"
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className="text-base text-neutral-600 font-bold">{seat.id}</h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* 3rd row */}
                                <div className="w-fitl h-auto grid grid-cols-10 gap-x-5 ml-3">
                                    <div className="col-span-9"></div>
                                    {busSeatData.slice(18, 19).map((seat) => (
                                        <div key={seat.id}
                                            className="flex items-center"
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className="text-base text-neutral-600 font-bold">{seat.id}</h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* 4th row */}
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5">
                                    {busSeatData.slice(19, 28).map((seat) => (
                                        <div key={seat.id}
                                            className="flex items-center"
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className="text-base text-neutral-600 font-bold">{seat.id}</h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                                {/* 5th row */}
                                <div className="w-full h-auto grid grid-cols-9 gap-x-5">
                                    {busSeatData.slice(28, 37).map((seat) => (
                                        <div key={seat.id}
                                            className="flex items-center"
                                            onClick={() => handleSeatClick(seat.id)}>
                                            <h6 className="text-base text-neutral-600 font-bold">{seat.id}</h6>
                                            <MdOutlineChair className={`text-3xl -rotate-90 ${getSeatName(seat)}`} />
                                        </div>
                                    ))}
                                </div>

                            </div>

                        </div>
                        {/* * Seats row end----- */}


                    </div>

                    {/* reservation info. */}
                    <div className="w-full flex items-center justify-center gap-5 border-t border-neutral-200 pt-5">
                        <div className="flex items-center gap-x-1">
                            <MdOutlineChair className="text-lg text-neutral-500 -rotate-90" />
                            <p className="text-sm text-neutral-500 font-medium">Available</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <MdOutlineChair className="text-lg text-red-500 -rotate-90" />
                            <p className="text-sm text-red-500 font-medium">Booked</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <MdOutlineChair className="text-lg text-green-500 -rotate-90" />
                            <p className="text-sm text-green-500 font-medium">Selected</p>
                        </div>

                        <div className="flex items-center gap-x-1">
                            <RiMoneyRupeeCircleLine className="text-lg text-neutral-500" />
                            <p className="text-sm text-neutral-500 font-medium">NPR. 1600</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seat Selection action */}
            <div className="col-span-2 w-full space-y-5 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">

                <div className="w-full space-y-2">
                    <div className="w-full flex items justify-between">
                        <h1 className="text-lg text-neutral-600 font-medium">
                            Your Destination
                        </h1>
                        <Link to={'/bus-tickets'} className="text-sm text-red-500">
                            Change Route
                        </Link>
                    </div>

                    <div className="space-y-0.5 w-full">

                        <div className="w-full flex items-center justify-between gap-x-5">
                            <p className="text-sm text-neutral-400 font-noraml">
                                From <span className="text-xs">(New BusPark)</span>
                            </p>
                            <p className="text-sm text-neutral-400 font-noraml">
                                To <span className="text-xs">(Chakchae)</span>
                            </p>
                        </div>

                        <div className="w-full flex items-center justify-between gap-x-4">
                            <h1 className="text-sm text-neutral-600 font-normal">
                                Kathmandu <span className="font-medium">(6:15 pm)</span>
                            </h1>
                            <div className="flex-1 border-dashed border border-neutral-300">
                            </div>
                            <h1 className="text-sm text-neutral-600 font-normal">
                                Pyuthan <span className="font-medium">(8:45 am)</span>
                            </h1>
                        </div>
                    </div>
                </div>


                <div className="w-full space-y-2">

                    {/* from & to  */}
                    <div className="w-full flex items-center justify-between">
                        <h1 className="text-lg text-neutral-600 font-medium">
                            Selected Seats
                        </h1>
                        <div className="bg-red-500/20 rounded-lg py-0.5 px-1.5 text-xs text-neutral-600 font-normal uppercase">
                            Non-Refundable
                        </div>
                    </div>

                    {
                        selectedSeats.length > 0
                            ?
                            <div className="w-full flex items-center gap-x-3">
                                {selectedSeats.map((seatId) => {
                                    return (
                                        <div key={seatId} className="w-9 h-9 bg-neutral-200/80 rounded-lg flex items-center text-base p-1 justify-center text-lg text-neutral-700 font-semibold">
                                            {seatId}
                                        </div>
                                    );
                                })}
                            </div>
                            :
                            <div className="w-full flex items-center gap-x-3">
                                <p className="text-sm text-red-400 font-nomral">
                                    No Seat is Selected.
                                </p>
                            </div>
                    }

                </div>


                <div className="w-full space-y-2">
                    <h1 className="text-lg text-neutral-600 font-medium">
                        Fair Details
                    </h1>
                    <div className="w-full flex items-center justify-between border-dahed border-l-[1.5px] border-neutral-400 pl-2">
                        <h3 className="text-sm text-neutral-500 font-medium">
                            Basic Fair:
                        </h3>
                        <p className="text-sm text-neutral-600 font-medium">
                            NPR. (₹): 1600
                        </p>
                    </div>

                    <div className="flex itemms-center justify-between gap-x-4">
                        <div className="flex gap-y-0.5 flex-col">
                            <h3 className="text-base text-neutral font-medium">Total Price:</h3>
                            <span className="text-xs text-neutral-500 font-base">
                                (including all taxes)
                            </span>
                            {/* caluculating total price */}
                        </div>
                        <p className="text-base text-neutral-800 font-semibold">
                            NPR (₹): {""}
                            {selectedSeats.reduce((total, seatId) => {
                                const seat = busSeatData.find((busSeat) => busSeat.id === seatId);
                                return total + (seat ? seat.price : 0);
                            }, 0)}
                        </p>
                    </div>
                </div>


                <div className="w-full flex items-center justify-center">
                    {
                        selectedSeats.length > 0
                            ?
                            <Link to='/bus-tickets/checkout' className="w-full bg-red-500 hover:bg-white hover:border-red-500 border hover:text-red-500 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition ">
                                Processed to Chekout
                            </Link>
                            :
                            <div className="space-y-0 w-full">
                                <button disabled className="cursor-not-allowed w-full bg-red-500 hover:bg-white hover:border-red-500 border hover:text-red-500 text-sm text-neutral-50 font-normal py-2.5 flex items-center justify-center uppercase rounded-lg transition ">
                                    Processed to Chekout
                                </button>
                                <small className="text-xs text-neutral-600 font-normal px-1">
                                    Please select atleast one seat to proceed to checkout.
                                </small>
                            </div>
                    }
                </div>
            </div>

            {/* Show error messgae if more than 10 seats are selected */}
            {showError && <ErrorMssage message={"You can't select more than 10 seats."} />}

        </div>
    )
}

export default BusSeat
