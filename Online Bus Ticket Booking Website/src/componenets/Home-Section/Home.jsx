const Home = () => {
    return (
        <>

            <div className="min-h-screen w-full flex items-center justify-center flex-col">

                {/* hero  */}
                <div className="w-full h-screen flex items-center justify-center">
                    <h1 className="text-5xl text-neutral-950 font-bold">
                        Welcome to Home page of Bus Booking
                    </h1>
                </div>

                {/* about  */}
                <div className="w-full h-screen flex items-center justify-center bg-neutral-950">
                    <h1 className="text-5xl text-white font-bold">
                        Welcome to about page of Bus Booking
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Home;