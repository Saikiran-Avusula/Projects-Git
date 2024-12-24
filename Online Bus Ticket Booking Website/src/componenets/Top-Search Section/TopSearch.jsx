import RootLayout from "../Layout-Section/RootLayout";
import TopSearchCards from "./TopSearchCards";

const TopSearch = () => {
    return (
        <>
            <RootLayout className="space-y-12">

                {/* Tag */}
                <div className="w-full flex-itmes justify-center items-center text-center">
                    <h1 className="text-4xl text-neutral-800 font-bold">
                        Top Search
                        <span className="text-red-500 px-3">
                            Routes
                        </span>
                    </h1>
                </div>

                {/* Top Search tickets routes cards */}
                <div className="w-full grid grid-cols-3 gap-5">
                    <TopSearchCards routeFrom={"Kathmandu"} routeTo={"Pyuthan"} timeDuration={"10 Hrs"} price={"1600"} />
                    <TopSearchCards routeFrom={"Pokhara"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"1300"} />
                    <TopSearchCards routeFrom={"Kathmandu"} routeTo={"Lumbini"} timeDuration={"20 Hrs"} price={"2200"} />
                    <TopSearchCards routeFrom={"Kathmandu"} routeTo={"Chitwan"} timeDuration={"6 Hrs"} price={"1000"} />
                    <TopSearchCards routeFrom={"Pokhara"} routeTo={"Pyuthan"} timeDuration={"16 Hrs"} price={"2000"} />
                    <TopSearchCards routeFrom={"Pokhara"} routeTo={"Pyuthan"} timeDuration={"8 Hrs"} price={"1400"} />
                </div>
            </RootLayout>
        </>
    )
}

export default TopSearch;