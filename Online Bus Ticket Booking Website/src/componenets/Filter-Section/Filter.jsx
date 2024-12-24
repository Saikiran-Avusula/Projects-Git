import { useState } from "react"
import PriceRangeSlider from "../Price-Range-Slider/PriceRangeSlider"


const Filter = ({className}) => {


    const [rangeValues, setRangeValues] = useState({
        min:0,
        max:100
    })

    const hadleRabgeChange = (values) =>{
        setRangeValues({values})
    }
    return (
        <div className={`w-full ${className}`}>
            <h1 className="text-xl text-neutral-700 font-semibold">
                Apply Filters
            </h1>

            {/* Price Filter */}
            <div className="w-full border borderneutral-300 rounded-xl p-4 spce-y-1">
            <h1 className="text-xl text-neutral-600 font-medium">
                Apply Filters
            </h1>
            </div>

            <PriceRangeSlider
            min={1000}
            max={3000}
            onChange={hadleRabgeChange}
            />


            {/* Bus Types Filter */}
            <div className="w-full border borderneutral-300 rounded-xl p-4 spce-y-3">
                
            </div>


            {/* Amenities Filter */}
            <div className="w-full border borderneutral-300 rounded-xl p-4 spce-y-3">
                
                </div>
        </div>
    )
}

export default Filter
