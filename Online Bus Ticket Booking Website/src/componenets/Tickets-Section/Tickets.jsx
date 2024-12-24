import TopLayout from "../Top-Page-Layout/TopLayout";
import BusSeatsPhoto from "../../assets/bus-seats-photo.jpg";
import RootLayout from "../Layout-Section/RootLayout";
import { motion } from "framer-motion";
import Search from "../Home-Section/Search";
import Filter from "./Filter-Section/Filter";
import SearchResults from "./Search-Results-Section/SearchResults";


const Tickets = () => {
    return (
        <>
            <div className="w-full space-y-12 py-16">
                {/* Top Layout */}
                <TopLayout className={"py-20"}
                    bgImg={BusSeatsPhoto}
                    title={"Reserve Your Tickets"}
                />

                <RootLayout className="spacey-12 relative">

                    {/* Search section */}
                    {/* Fixing this section  on top to be sticky so thatwe can esily chnage the route */}

                    <div className="space-y-5 w-full bgneutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
                        <motion.h1
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, ease: "easeInOut" }}
                            className="text-3xl sm:text-4 xl lg:text-3xl text-neutral-700 font-semibold capitalize bg-white-500"
                        >
                            Want to Change the Route ?
                        </motion.h1>
                        {/* Search  from home of Navbar*/}
                        <Search />
                    </div>



                    {/* Search bus ticket */}
                    <div className="w-full h-auto grid grid-cols-4 gap-16 relative my-6">
                        {/* Filter section */}
                        <div className="col-span-1">
                            <Filter className="space-y-4 sticky top-52 z-20" />
                        </div>

                        {/* Search Tickets */}
                        <SearchResults />
                    </div>

                </RootLayout>
            </div>
        </>
    )
}

export default Tickets;