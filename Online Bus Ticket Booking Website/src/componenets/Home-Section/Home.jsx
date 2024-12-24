import Service from "../Service-Section/Service";
import TopSearch from "../Top-Search Section/TopSearch";
import Hero from "./Hero";

const Home = () => {
    return (
        <>

            <div className="space-y-16 w-full min-h-screen pb-16">

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