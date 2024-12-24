import { useState } from "react"
import PriceRangeSlider from "../Price-Range-Slider/PriceRangeSlider"


const Filter = ({ className }) => {


    const [rangeValues, setRangeValues] = useState({
        min: 0,
        max: 100
    })

    const hadleRangeChange = (values) => {
        setRangeValues({ values })
    }
    return (
        <div className={`w-30 ${className}`} >

            {/* Price Filter */}
            <div className="w-full border border-neutral-400 rounded-xl p-2 space-y-4 my-3">
                <h1 className="text-xl text-red-500 font-medium text-center">
                    Apply Filters
                </h1>
                <PriceRangeSlider
                    min={1000}
                    max={3000}
                    onChange={hadleRangeChange}
                />
            </div>



            {/* Bus Types Filter */}
            <div className="w-full border border-neutral-400 rounded-xl p-4 spce-y-3">
                <h1 className="text-xl text-red-500 font-medium text-center">
                    Bus Types
                </h1>

                {/* check box and text section */}
                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="ac" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            AC Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="tourist" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Tourist AC Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="airsuspension" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Air Suspension <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="luxuryacdeluxe" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Luxury AC Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>
            </div>

            {/* Bus Companies */}
            <div className="w-full border border-neutral-400 rounded-xl p-4 spce-y-3">
                <h1 className="text-xl text-red-500 font-medium text-center">
                    Bus Companies
                </h1>

                {/* check box and text section */}
                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="sworgadwarideluxe" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Sworgadwari Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="pokharadeluxe" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Pokhara Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="mustangdeluxe" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Mustang Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="lumbinideluxe" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Lumbini Deluxe <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>
            </div>


            {/* Amenities Filter */}
            <div className="w-full border border-neutral-400 rounded-xl p-4 spce-y-3">
                <h1 className="text-xl text-red-500 font-medium text-center">
                    Bus Amenities
                </h1>

                {/* check box and text section */}
                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="internetwifi" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Internet/Wifi <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="acairsuspension" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Ac & Air Suspension <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="waterbottle" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Water Bottle <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="tvmusic" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            LED TV & Music <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="chargingport" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Charging Port <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="fan" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Fan <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>
                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2 py-2">
                        <input type="checkbox" id="superac" className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Super AC <span className="text-sm  text-neutral-600">
                                (10)
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter
