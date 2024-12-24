import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { TbArrowsExchange } from "react-icons/tb";

const Search = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
            className="w-full bg-neutral-50/20 border border-neutral-500 shadow-lg rounded-xl p-4 bg-white"
        >
            {/* Flex container with responsive wrapping */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 justify-between w-full">

                {/* From and To Section */}
                <div className="flex flex-col sm:flex-row items-center gap-5 relative w-full lg:w-[60%]">
                    {/* From Input */}
                    <div className="w-full sm:w-1/2 h-14 border border-neutral-300 bg-white text-sm lg:text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
                        <input
                            type="text"
                            placeholder="From..."
                            className="flex-1 h-full border-none bg-transparent focus:outline-none"
                        />
                        <div className="w-5 h-5 text-neutral-400">
                            <FaMapMarkerAlt className="w-full h-full" />
                        </div>
                    </div>

                    {/* To Input */}
                    <div className="w-full sm:w-1/2 h-14 border border-neutral-300 bg-white text-sm lg:text-base text-neutral-700 font-medium px-5 flex items-center gap-x-1 rounded-lg">
                        <input
                            type="text"
                            placeholder="To..."
                            className="flex-1 h-full border-none bg-transparent focus:outline-none"
                        />
                        <div className="w-5 h-5 text-neutral-400">
                            <FaMapMarkerAlt className="w-full h-full" />
                        </div>
                    </div>

                    {/* Switch Button */}
                    <button
                        className="absolute w-11 h-7 mx-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-red-500 border border-neutral-300 shadow-md hover:bg-white hover:border-red-500"
                    >
                        <TbArrowsExchange className="w-6 h-6 text-white hover:text-black" />
                    </button>
                </div>

                {/* Date and Search Button Section */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-[40%]">
                    {/* Date Input */}
                    <div className="w-full sm:flex-1 h-14 border border-neutral-300 bg-white text-sm lg:text-base text-neutral-700 font-medium px-5 ml-4 flex items-center gap-x-1 rounded-lg">
                        <input
                            type="date"
                            className="flex-1 h-full border-none bg-transparent focus:outline-none"
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        className="w-full sm:w-fit p-3 bg-red-500 border-2 border-red-500 rounded-xl hover:bg-white hover:text-red-500 text-sm lg:text-base font-medium text-white items-center justify-center gap-x-1 flex ease-in-out duration-300"
                    >
                        <FaSearch className="w-5 h-5" />
                        Search
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Search;
