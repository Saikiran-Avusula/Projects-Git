import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { TbArrowsExchange } from "react-icons/tb";

const Search = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="w-full bg-neutral-50/20 border border-neutral-500 shadow-lg rounded-xl p-4"
        >
            <div className="w-full flex items-center gap-5 justify-between">
                {/* from  and to input section*/}
                <div className="w-[60%] flex items-center gap-5 relative">

                    {/* from */}
                    <div className="w-1/2 h-14 border border-neutral-300 bg-white text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
                        <input type="text" placeholder="From..." className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                        <div className="w-5 h-5 text-neutral-400">
                            <FaMapMarkerAlt className='w-full h-full' />
                        </div>
                    </div>

                    {/* to */}
                    <div className="w-1/2 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
                        <input type="text" placeholder="To..." className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                        <div className="w-5 h-5 text-neutral-400">
                            <FaMapMarkerAlt className='w-full h-full' />
                        </div>
                    </div>

                    <button className="absolute w-11 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-red-500 border border-neutral-300 shadow-md hover:bg-white hover:border-red-500">
                        <TbArrowsExchange className="w-6 h-6 text-white hover:text-black" />
                    </button>
                </div>


                {/* date and button section */}
                <div className="flex-1 h-14 flex items-center gap-4">
                    {/* Date */}
                    <div className=" flex-1 h-full border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
                        <input type="date" placeholder="To..." className="flex-1 h-full border-none bg-transparent focus:outline-none" />
                    </div>

                    {/* search button*/}
                    <button className='w-fit p-3 flex flex-row bg-red-500 border-2 border-red-500 rounded-xl 
                    hover:bg-white hover:text-red-500 text-base font-medium text-white items-center justify-center 
                    gap-x-1 ease-in-out duration-300'>
                        <FaSearch className="w-5 h-5" />
                        Search
                    </button>
                </div>
            </div>

        </motion.div>
    )
}
export default Search
