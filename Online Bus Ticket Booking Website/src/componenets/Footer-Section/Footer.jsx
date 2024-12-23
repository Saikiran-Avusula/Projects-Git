import { FaInstagram } from "react-icons/fa"
import RootLayout from "../Layout-Section/RootLayout"
import { Link } from "react-router-dom"
import { FaMeta, FaXTwitter, FaYoutube } from "react-icons/fa6"
// import { GrMastercard } from "react-icons/gr"
import MasterCardImg from "../../assets/mastercard.png"
import PaypalImg from "../../assets/paypal.png"
import CreditCardImg from "../../assets/creditcard.png"


const Footer = () => {

    const Year = new Date().getFullYear()
    return (
        <>
            <div className="w-full h-auto bg-neutral-950 py-8">
                <RootLayout className={"space-y-10"}>

                    {/* footer other elements */}
                    <div className="w-full grid grid-cols-5 gap-8">

                        {/* logo and social media links */}
                        <div className="col-span-2 space-y-8 md:pr-10 pr-0">
                            <div className="space-y-3">
                                {/* logo */}
                                <Link to='/' className='text-6xl text-red-500 font-bold'>
                                    Bus
                                </Link>

                                {/* some describition */}
                                <p className="text-sm text-neutral-500 font--normal">
                                    Bus is all about providing a seamless and convenient travel experience for our customers. We strive to offer the best service with a focus on safety, comfort, and reliability. Our platform allows you to book tickets easily, track your journey, and get real-time updates. We are committed to making your travel experience as smooth and enjoyable as possible.
                                </p>
                            </div>

                            {/* /* social media links */}
                            <div className="w-full flex items-center gap-x-5">
                                <div className="w-10 h-10 rounded-xl bg-neutral-500/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500 transform hover:translate">
                                    <FaInstagram className="w-5 h-5 text-neutral-50" />
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-neutral-500/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500 transform hover:translate">
                                    <FaMeta className="w-5 h-5 text-neutral-50" />
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-neutral-500/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500 transform hover:translate">
                                    <FaYoutube className="w-5 h-5 text-neutral-50" />
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-neutral-500/40 hover:bg-red-500 flex items-center justify-center cursor-pointer ease-in-out duration-500 transform hover:translate">
                                    <FaXTwitter className="w-5 h-5 text-neutral-50" />
                                </div>
                            </div>

                        </div>

                        <div className="col-span-1 space-y-5">
                            <h3 className="text-lg text-white font-semibold">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link to='/about' className='text-neutral-400 hover:text-white'>About Us</Link></li>
                                <li><Link to='/services' className='text-neutral-400 hover:text-white'>My Account</Link></li>
                                <li><Link to='/contact' className='text-neutral-400 hover:text-white'>Reserve Your Ticket</Link></li>
                                <li><Link to='/faq' className='text-neutral-400 hover:text-white'>Create Your Account</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-1 space-y-5">
                            <h3 className="text-lg text-white font-semibold">Top Reserved Routes</h3>
                            <ul className="space-y-2">
                                <li><Link to='/help' className='text-neutral-400 hover:text-white'>Kathmandu - Pokhara</Link></li>
                                <li><Link to='/terms' className='text-neutral-400 hover:text-white'>Pokhara - Mustange</Link></li>
                                <li><Link to='/privacy' className='text-neutral-400 hover:text-white'>Kathmandu - Chitwan</Link></li>
                                <li><Link to='/refund' className='text-neutral-400 hover:text-white'>Kathmandu - Lumbini</Link></li>
                            </ul>
                        </div>

                        <div className="col-span-1 space-y-5">
                            <h3 className="text-lg text-white font-semibold">Support Links</h3>
                            <ul className="space-y-2">
                                <li><Link to='/help' className='text-neutral-400 hover:text-white'>Privacy Policy</Link></li>
                                <li><Link to='/terms' className='text-neutral-400 hover:text-white'>Terms & Conditions</Link></li>
                                <li><Link to='/privacy' className='text-neutral-400 hover:text-white'>Help & Support</Link></li>
                                <li><Link to='/refund' className='text-neutral-400 hover:text-white'>FAQs</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* seperator */}
                    <div className="w-full  flex justify-between items-center">
                        {/* Copyright Section */}
                        <p className="text-sm text-neutral-500 font-normal">
                            Copyright &copy; {Year}. All Rights Reserved.
                        </p>

                        {/* Card Payments Section */}
                        <div className="flex items-center gap-x-2">
                            <img src={MasterCardImg} alt="MasterCardImg" className="w-fit h-9 object-contain object-center" />
                            <img src={PaypalImg} alt="PaypalImg" className="w-fit h-9 object-contain object-center" />
                            <img src={CreditCardImg} alt="CreditCardImg" className="w-fit h-9 object-contain object-center" />
                        </div>
                    </div>

                </RootLayout>

            </div>
        </>
    )
}

export default Footer
