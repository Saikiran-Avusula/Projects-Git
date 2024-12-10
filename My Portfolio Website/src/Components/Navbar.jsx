

import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { motion } from 'motion/react';
// import { resume } from '../assets/Sai Kiran Avusula Resume (E).pdf'
import { Link } from 'react-scroll'


const Navbar = () => {
    // const varients = {
    //     open: { clipPath: "circle (1200px at 43px 43px)" },
    //     transition: { type: "spring" },
    //     closed: {
    //         clipPath: "circle(25px at 45px 37px)",
    //         transition: { type: "spring", duration: 1 }
    //     },

    // }


    // use state for icons
    const [menu, setMenu] = useState(false);

    // for menu items to display collected in array of objects stored and mapped each of them
    const textItems = [
        { id: 1, text: "About", to: "about" },
        { id: 2, text: "Projects", to: "projects" },
        { id: 3, text: "Skills", to: "skills" },
        { id: 4, text: "Connect Me", to: "connect_me" }
    ]

    const resumeHandlerButton = () => {
        window.open('/Sai Kiran Avusula Rssume (E).pdf', '_blank')
    }

    return (
        <>
            <div>
                <div id="navbar" className="Navbar">
                    <div className=" mx-auto hidden md:flex justify-evenly py-3 items-center border rounded-full backdrop-blur bg-black-100 ">
                        <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
                            <a href="" title="Sai Kiran Avusula Portfolio">
                                <span className="text-white">My</span>
                                <span className="text-red-500"> Portfolio</span>
                            </a>
                        </div>
                        <div>
                            <div>
                                <ul className="hidden md:flex items-center space-x-6 list-none lg:text-lg md:text-base text-white">
                                    {/* <li>About</li>
                                    <li>Services</li>
                                    <li>My Work</li>
                                    <li>Connnect Me</li> */}
                                    {textItems.map(({ id, text, to }) =>
                                        <li key={id} className="hover:text-red-500 cursor-pointer duration-300">
                                            <Link to={to} smooth={true} duration={500} offset={-70}>
                                                {text}
                                            </Link>
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                        <a href='' onClick={resumeHandlerButton} title='View My Resume' className=" md:text-base lg:text-lg bg-red-500 hover:bg-white hover:text-red-500 text-white px-4 py-2 rounded-full duration-500" >My Resume</a>
                    </div>
                </div>

                {/* Hambuger icon */}
                <div className="flex md:hidden md:bg-black justify-between border rounded-full backdrop-blur bg-black/10">
                    {/* backdrop-blur bg-black/30 */}
                    <motion.div animate={menu ? "open" : "closed"}>
                        <motion.div onClick={() => setMenu((preview) => !preview)} className="w-2/4  text-black fixed z-10 rounded-r-lg" >
                            <div className="px-7 py-5 ">
                                {menu ? (<IoClose size={35} className="text-red-500 " />) : (<CgMenu size={35} className="hover:text-red-500 text-white" />)}
                            </div>

                            {menu && (
                                <div className="flex flex-col p-6 justify-space items-center backdrop-blur-lg bg-white/80 h-screen rounded-r-lg">
                                    <ul className="space-y-6 text-white text-lg text-center">
                                        {textItems.map(({ id, text, to }) =>
                                            <li key={id} className=" hover:text-red-500 cursor-pointer duration-300">
                                                <Link to={to} smooth={true} duration={500} offset={-70}>
                                                    {text}
                                                </Link>
                                            </li>)}
                                    </ul>
                                    <a onClick={resumeHandlerButton} className="text-lg bg-red-500 hover:bg-white hover:text-red-500 text-white px-2 py-1 mt-6 rounded-full duration-500 download" title="View My Download">My Resume</a>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* icon text logo in small devices */}
                    <div className="text-xl font-bold flex items-center gap-2 py-6 px-4 ">
                        <a href="">
                            <span className="text-white">My</span>
                            <span className="text-red-500"> Portfolio</span>
                        </a>
                    </div>

                </div>
                {/* Hambuger icon clsed*/}

            </div>
        </>

    );
};

export default Navbar

