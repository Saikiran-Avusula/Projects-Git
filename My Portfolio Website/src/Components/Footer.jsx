import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-scroll'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <div className="mt-48 flex justify-between items-center text-white border-t-2  border-red-500 border rounded-full p-5">
                <p className="text-lg">&copy; {year}. All Rights Reserved</p>
                <a href="" title="Sai Kiran Avusula Portfolio" className="cursor-pointer font-bold text-lg">
                    <Link to="navbar">
                        <span className="text-white">My</span>
                        <span className="text-red-500"> Portfolio</span>
                    </Link>
                </a>

                {/* <p className="text-xl cursor-pointer duration-300">
                    My Portfolio
                </p> */}
                <div className="flex justfiy-center  space-x-4  text-white mt-4">
                    <a href="" className="hover:text-red-500"> <FaPhoneAlt className="w-6 h-6" /> </a>
                    <a href="" className="hover:text-red-500"> <FaPhoneAlt className="w-6 h-6" /> </a>
                    <a href="" className="hover:text-red-500"> <FaPhoneAlt className="w-6 h-6" /> </a>
                    <a href="" className="hover:text-red-500"> <FaPhoneAlt className="w-6 h-6" /> </a>
                </div>
            </div>
        </>
    )
}

export default Footer