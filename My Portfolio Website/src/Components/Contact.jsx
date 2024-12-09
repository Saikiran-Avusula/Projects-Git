// import {}
import { FaPhoneAlt } from "react-icons/fa";


export default function Contact() {
    return (
        <div className="griD">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
                <h2 className="text-4xl font-bold text-white">Lets Discuss your <span className="text-red-500">Projects</span></h2>
                <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium suscipit, tempora recusandae sapiente enim quaerat similique veritatis tenetur soluta optio et reiciendis dolorum quis quidem quia natus, odio perspiciatis sequi.</p>
            </div>

            <div className="max-w-6xl mx-auto mt-2 flex items-center justify-center" >

                {/* Phone */}
                <div className="flex items-center ">
                    <div className="bg-red-500 p-4 rounded-full">
                        <FaPhoneAlt className="text-white w-6 h-6" />
                    </div>

                    <div className="flex items-center">
                        <p className="text-lg font-medium text-red-500 ">Call me</p>
                        <p className="text-white">985235454545</p>
                    </div>
                </div>


                {/* Ṃail */}
                <div className="flex items-center ">
                    <div className="bg-red-500 p-4 rounded-full">
                        <FaPhoneAlt className="text-white w-6 h-6" />
                    </div>

                    <div>
                        <p className="text-lg font-medium text-red-500 ">Call me</p>
                        <p className="text-white">985235454545</p>
                    </div>
                </div>


                {/* ADDRESS */}
                <div className="flex items-center space-x-4">
                    <div className="bg-red-500 p-4 rounded-full">
                        <FaPhoneAlt className="text-white w-6 h-6" />
                    </div>

                    <div>
                        <p className="text-lg font-medium text-red-500 ">Call me</p>
                        <p className="text-white">985235454545</p>
                    </div>
                </div>
            </div>



            {/* icons*/}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-col-1 md:grid-col-2 gap-8">
                <div className="space-y-6 flex flex-wrap justify-evenly md:border"> */}
            {/* <div className="grid"> */}


            {/* <div className="flex items-center space-x-4">
                        <div className="bg-red-500 p-4 rounded-full">
                            <FaPhoneAlt className="text-white w-6 h-6" />
                        </div>

                        <div>
                            <p className="text-lg font-medium text-red-500 ">Call me</p>
                            <p className="text-white">985235454545</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-red-500 p-4 rounded-full">
                            <FaPhoneAlt className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-red-500 ">Email</p>
                            <p className="text-white">saikiranavusula89@gmail.com</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-red-500 p-4 rounded-full">
                            <FaPhoneAlt className="text-white w-6 h-6" />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-red-500 ">Address</p>
                            <p className="text-white">KPHB, Kukatpally, Hyderabad - 500072</p>
                        </div>
                    </div> */}


            {/* </div> */}

            {/* from start */}
            {/* <form action="" className="space-y-4 text-white">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Full Name" className="border border-red-500 bg-gray-500  p-4 rounded-md w-full" />
                            <input type="email" placeholder="Your email" className="border border-red-500 bg-gray-500  p-4 rounded-md w-full" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-col-2 gap-4">
                            <input type="text" placeholder="Phone Number" className="border border-red-500 bg-gray-500  p-4 rounded-md w-full" />
                            <input type="text" placeholder="budget" className="border border-red-500 bg-gray-500  p-4 rounded-md w-full" />
                        </div>
                        <textarea name="" id="" placeholder="Message" className="border border-red-500 bg-gray-500  p-4 rounded-md w-full"></textarea>
                        <button type="submit">Submit Message</button>
                    </form> */}
            {/* form end */}

            {/* </div>
            </div> */}
            {/* icons end */}
        </div>
    )
}
