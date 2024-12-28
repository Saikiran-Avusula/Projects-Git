import { FaCircleCheck, FaPhone } from 'react-icons/fa6'
import BusImg from '../../../../../src/assets/bus.png'
import qrCodeImg from '../../../../../src/assets/qrcode.jpg'
import { IoCloseCircle } from 'react-icons/io5'


const PassengerInvoice = () => {
    return (
        <div className="w-full col-span-4 rounded-3xl relative">

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
                <div className="col-span-4 space-y-3.5">
                    {/* Bill no, pe rseat and date */}
                    <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">
                        <p className="text-base text-neutral-500 font-normal">
                            Bill No.: 465
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            NPR 1600 <span className="text-xs">/seat</span>
                        </p>
                        <p className="text-base text-neutral-500 font-normal">
                            Date: 2024-10-31
                        </p>
                    </div>

                    {/* passenger details */}
                    <div className="w-full flex items-center justify-between border-dashed border-b-2 border-neutral-200 pb-3">

                        <div className="space-y-1 5">
                            <p className="text-base text-neutral-500 font-normal">
                                Name of Passenger: <span className="font-medium">Shivaram</span>
                            </p>
                            <p className='text-base text-neutral-600 font-normal'>
                                Total Seat No.: <span className="font-medium">A2, A3, A4, B6</span>
                            </p>
                            <p className='text-base text-neutral-600 font-normal'>
                                Total No. of Passengers: <span className="font-medium">04 People Only</span>
                            </p>
                            <p className='text-base text-neutral-600 font-normal'>
                                Pickup Station: <span className="font-medium">Swoyambhu, KTM</span>
                            </p>
                        </div>

                        {/* total price */}
                        <div className="space-y-4 flex-items-center justify-center flex-col">
                            <div className="space-y-1 texxt-center">
                                <p className="text-base text-neutral-600 font-normal">
                                    Total Price
                                    <h1 className="text-xl text-neutral-600 font-bold">
                                        NPR 6400
                                    </h1>
                                </p>
                            </div>

                            {/* paid payment */}
                            <div className="w-fitpx-3 rounded-full bg-green-500/5 border-green-600 
                            text-green-600 text-sm font-medium flex border px-3 py-1 items-center justify-center gap-2">
                                <FaCircleCheck size={16} />
                                <span>Bill Paid</span>
                            </div>

                            {/* pending payment */}
                            {/* <div className="w-fitpx-3 rounded-full bg-red-500/5 border-red-600 
                            text-red-600 text-sm font-medium flex border px-3 py-1 items-center justify-center gap-2">
                                <IoCloseCircle size={16} />
                                <span>Pending</span>
                            </div> */}
                        </div>
                    </div>

                    {/* Route details */}
                    <div className="w-full flex items-center justify-between pb-3">
                        <p className="text-base text-neutral-600 font-normal">
                            Kathmandu
                            <span className="text-neutral-499 px-2">-------</span>
                            Pyuthan
                        </p>

                        <p className="text-base text-neutral-600 font-normal">
                            Arrive at 05:45
                        </p>
                        <p className="text-base text-neutral-600 font-normal">
                            Departure at 06:15
                        </p>
                    </div>

                </div>
             
                <div className="col-span-1 border border-neutral-200 rounded-xl shadow-sm p-1">
                    <img src={qrCodeImg} alt="QR Code Image" className="w-full aspect-square object-cover object-center rounded-xl" />
                </div>

            </div>

            {/* left bottom section */}
            <div className="w-full bg-red-500 absolute bottom-0 left-0 rounded-bl-3xl flex items-center justify-between">
                <p className="text-sm text-neutral-100 font-light px-5 py-1.5">
                    Note: 40% charge for cancellation price 24-hours of Programme.
                </p>
                <div className="flex items-center ">
                    <FaPhone className='w-3 h-3 text-white' />
                    <p className="text-sm text-neutral-100 font-light px-2 py-1.5">
                        +91 080-420-4565, +91 85234-85647.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PassengerInvoice
