import Service from "../Service-Section/Service";
import TopSearch from "../Top-Search Section/TopSearch";
import Hero from "./Hero";

const Home = () => {
    return (
        <>

            <div className="space-y-16 w-full min-h-screen pb-16">

                {/* hero  */}
                {/* <div className="w-full h-screen flex items-center justify-center">
                    <h1 className="text-5xl text-neutral-950 font-bold">
                        Welcome to Home page of Bus Booking
                    </h1>
                </div> */}

                {/* about  */}
                {/* <div className="w-full h-screen flex items-center justify-center bg-neutral-950">
                    <h1 className="text-5xl text-white font-bold">
                        Welcome to about page of Bus Booking
                    </h1>
                </div> */}

                {/* Hero */}
                <Hero />

                {/* services */}
                <Service />

                {/* Top Search Routes */}
                <TopSearch />

            </div>
        </>
    )
}

export default Home;