import BusImg from '../../../../../src/assets/bus.png'

const PassengerInvoice = () => {
    return (
        <div className="w-full col-span-4 rounded-3xl relative">
            {/* <h1>Passenger Invoice</h1> */}

            {/* top bus details */}
            <div className="w-full flex items-center justify-between bg-red-500 px-6 py-3 rounded-tl-3xl">
                <div className="flex itmes-cnter gap-x-3">
                    <img src={BusImg} alt="" className="w-auto h-12 object-cover object-center" />
                    <h1 className='text-xl text-neutral-50 font-bold uppercase tracking-wider pt-2'>
                        Sworgadwari Deluxe
                    </h1>
                </div>
                <div className="wflex items-center gap-x-2">
                    <p className="text-xl text-neutral-50 font-bold">
                        <span className="text-lg">(Bus No.)</span> Ba. 2 Ka 9704
                    </p>
                </div>
            </div>

            <div className="w-full grid grid-cols-5 gap-8 items-center px-5 py-7 mb-7">
                {/* Bill no, pe rseat and date */}
            </div>


            <div className="w-full bg-red-500 absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between">
                ldcd
            </div>

        </div>
    )
}

export default PassengerInvoice
