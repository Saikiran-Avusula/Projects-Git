import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

import { Link } from 'react-scroll'

const Footer = () => {

    const year = new Date().getFullYear()


    return (
        <>
            <div className="mt-48 flex flex-wrap justify-between items-center text-white border-t-2 border-red-500 border rounded-full p-5 backdrop-blur bg-black/1">
                <p className="text-lg">&copy; {year}. All Rights Reserved</p>
                <a title="Sai Kiran Avusula Portfolio" className="cursor-pointer font-bold text-lg">
                    <Link to="navbar" smooth={true} duration={500} offset={-70}>
                        <span className="text-white">My</span>
                        <span className="text-red-500"> Portfolio</span>
                    </Link>
                </a>

                <div className="grid grid-cols-4 justfiy-center gap-2 text-white md:">
                    <a href="" className="hover:text-red-500"> <FaLinkedin className="w-6 h-6" /> </a>
                    <a href="" className="hover:text-red-500"> <FaGithub className="w-6 h-6" /> </a>
                    <a href="" className="hover:text-red-500"> <FaInstagram className="w-6 h-6" /> </a>
                    <a href="" className="hover:text-red-500"> <IoLogoWhatsapp className="w-6 h-6" /> </a>
                </div>
            </div>
        </>
    )
}

export default Footer