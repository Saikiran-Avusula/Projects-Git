
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";


export default function Connect_Me() {
    return (
        <div id="connect_me" className="grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
                <h2 className="text-4xl font-bold text-white">Let&apos;s <span className="text-red-500">Connect :)</span></h2>
                <p className="text-slate-400 mt-4 flex flex-wrap">I’m always open to meaningful conversations and professional opportunities. Whether you’d like to discuss a project, share insights, or explore potential collaborations, feel free to reach out. Let’s connect and create impactful solutions together!</p>
            </div>

            {/* <div className="max-w-6xl mx-auto mt-2 flex gap-5  justify-center border" > */}
            <div className="grid grid-cols justify-center gap-5">


                {/* Phone */}
                <div className="flex justify-center space-x-2 flex-wrap">
                    <div className="bg-red-500 p-4 rounded-full">
                        <FaPhoneAlt className="text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium text-red-500 ">Connect me:</p>
                        <p className="text-white">
                        <a href="https://wa.me/9866337106?text=Hey%2C%20Let%27s%20connect.%20Sai%20Kiran%20Avusula...%21" title="Click to message me">
                            +91 98663-37106
                        </a>
                        </p>
                    </div>
                </div>


                {/* Mail */}
                <div className="flex justify-center space-x-2 flex-wrap gap-2">
                    <div className="bg-red-500 p-4 rounded-full">
                        <MdAttachEmail className="text-white" />
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-lg font-medium text-red-500">Mail:</p>
                        <p className="text-white text-lg">
                            <a href="mailto:saikiranavusula89@gmail.com?subject=Hello&body=How are you?" title="click to Mail me">
                                saikiranavusula89@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>



            {/* icons*/}
            {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-col-1 md:grid-col-2 gap-8">
                <div className="space-y-6 flex flex-wrap justify-evenly md:border"> */}
            {/* <div className="grid"> */}


            {/* form start */}
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
