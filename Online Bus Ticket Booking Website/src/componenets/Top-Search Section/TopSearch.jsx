import RootLayout from "../Layout-Section/RootLayout";

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


                </div>
            </RootLayout>
        </>
    )
}

export default TopSearch;