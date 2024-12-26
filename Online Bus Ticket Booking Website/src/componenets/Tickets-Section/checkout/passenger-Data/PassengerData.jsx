import PaymentMethod from "./payment-Method/PaymentMethod"


const PassengerData = () => {
    return (
        // ekada change indhi input information
        <>
            <div className="w-full col-span-2 py-10 space-y-6">
                <h1 className="text-xl text-red-500 font-semibold">
                    Passenger Information
                </h1>

                {/* input of passenger */}
                <div className="space-y-7">
                    <div className="w-full space-y-2 flex flex-col items-start">
                        <label htmlFor="fullname" className="text-sm text-neutral-500 font-medium">
                            Full Name
                        </label>
                        <input type="text" placeholder="e.g.: Isha Shivaram"
                            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/7 border border-neutral-400 
                    rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400" />
                    </div>

                    <div className="w-full space-y-2 flex flex-col items-start">
                        <label htmlFor="email" className="text-sm text-neutral-500 font-medium">
                            Email
                        </label>
                        <input type="text" placeholder="e.g.: IshaShivaram@gmail.com"
                            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/7 border border-neutral-400 
                    rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400" />
                    </div>

                    <div className="w-full space-y-2 flex flex-col items-start">
                        <label htmlFor="Phone" className="text-sm text-neutral-500 font-medium">
                            Phone
                        </label>
                        <input type="text" placeholder="e.g.: +91 01234 56789"
                            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/7 border border-neutral-400 
                    rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400" />
                    </div>

                    <div className="w-full space-y-2 flex flex-col items-start">
                        <label htmlFor="altPhone" className="text-sm text-neutral-500 font-medium">
                            Alternative Phone
                        </label>
                        <input type="text" placeholder="e.g.: +91 01234 56789"
                            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/7 border border-neutral-400 
                    rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-600 font-normal placeholder:text-neutral-400" />
                    </div>

                    <div className="w-full space-y-2 flex flex-col items-start">
                        <label htmlFor="pickupstation" className="text-sm text-neutral-500 font-medium">
                            Pick-up Station
                        </label>
                        <select name="" id=""
                            className="w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/7 
                        border border-neutral-400 rounded-xl focus:outline-none focus:border-neutral-400 
                        text-base text-neutral-600 font-normal placeholder:text-neutral-400"
                        >
                            <option selected disabled>Choose Your Nearest Pickup Station</option>
                            <option value="balaju">Balaju</option>
                            <option value="swoyambhu">Swoyambhu</option>
                            <option value="kalanki">Kalanki</option>
                            <option value="ceckpost">Check-Post</option>
                        </select>

                    </div>
                </div>

                {/* Payment method */}
                <PaymentMethod />
            </div>
        </>
    )
}

export default PassengerData
