import { FaWifi } from "react-icons/fa";
import { GiCharging, GiWaterBottle } from "react-icons/gi";
import { IoTv } from "react-icons/io5";
import PropTypes from 'prop-types';


const TopSearchCards = ({ routeFrom, routeTo, timeDuration, price }) => {


    return (
        <>
            <div className="w-full rounded-xl p-5 border-2 border-neutral-300 space-y-10">

                {/* Routes From and To */}
                <div className="space-y-3.5 w-full">

                    {/* Route */}
                    <div className="space-y-0">
                        {/* Labels */}
                        <div className="w-full flex items-center justify-between">
                            <p className="text-xs text-neutral-400 font-normal">
                                From
                            </p>
                            <p className="text-xs text-neutral-400 font-normal">
                                To
                            </p>
                        </div>

                        {/* Route with dotted lines */}
                        <div className="w-full flex items-center justify-between gap-x-3">
                            {/* From route */}
                            <h1 className="text-xl text-neutral-600 font-semibold">
                                {routeFrom}
                            </h1>

                            {/* Dotted line with timeDuration */}
                            <div className="flex-1 relative flex items-center">
                                {/* Dotted Line */}
                                <div className="flex-1 border-t border-dashed border-neutral-800"></div>

                                {/* Time Duration */}
                                <div className="absolute w-fit px-3 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border border-neutral-400">
                                    {timeDuration}
                                </div>

                                {/* Dotted Line */}
                                <div className="flex-1 border-t border-dashed border-neutral-800"></div>
                            </div>

                            {/* To route */}
                            <h1 className="text-xl text-neutral-600 font-semibold">
                                {routeTo}
                            </h1>
                        </div>
                    </div>

                    {/* Facilities */}
                    <div className="w-full flex items-center gap-3 flex-wrap">

                        {/* first one */}
                        <div className="flex items-center gap-x-1">
                            <FaWifi className="w-3 h-3 text-neutral-500" />
                            <p className="text-xx text-neutral-600 font-normal">
                                Internet
                            </p>
                        </div>

                        {/* Second one */}
                        <div className="flex items-center gap-x-1">
                            <GiWaterBottle className="w-3 h-3 text-neutral-500" />
                            <p className="text-xx text-neutral-600 font-normal">
                                Snacks
                            </p>
                        </div>

                        {/* third one */}
                        <div className="flex items-center gap-x-1">
                            <IoTv className="w-3 h-3 text-neutral-500" />
                            <p className="text-xx text-neutral-600 font-normal">
                                TV
                            </p>
                        </div>

                        {/* fourth one */}
                        <div className="flex items-center gap-x-1">
                            <GiCharging className="w-3 h-3 text-neutral-500" />
                            <p className="text-xx text-neutral-600 font-normal">
                                Mobile Charging
                            </p>
                        </div>

                    </div>

                </div>

                <div className="w-full flex items-center justify-between">
                    {/* price */}
                    <h1 className="text-xl text-neutral-700 font-semibold">
                        Rs. {price}
                    </h1>

                    <button className='w-fit p-2 bg-red-500  flex flex-row bg-red-500 border-2 border-red-500 rounded-xl 
                                            hover:bg-white hover:text-red-500 text-sm font-normal text-white items-center justify-center 
                                            gap-x-2 ease-in-out duration-300'>
                        Reserve Seat
                    </button>
                </div>
            </div>
        </>
    )
}
TopSearchCards.propTypes = {
    routeFrom: PropTypes.string.isRequired,
    routeTo: PropTypes.string.isRequired,
    timeDuration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default TopSearchCards;
