

import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";



const Navbar = () => {

    // use state for icons
    const [menu, setMenu] = useState(false);

    // for menu items to display collected in array of objects stored and mapped each of them
    const textItems = [
        { id: 1, text: "About" },
        { id: 2, text: "Services" },
        { id: 3, text: "Contact Me" },
        { id: 4, text: "Services" }
    ]

    return (
        <>
            <div className="container mx-auto hidden md:flex justify-between py-6 items-center">
                <div className="text-xl lg:text-2xl font-bold flex items-center gap-1">
                    <a href="">
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
                            {textItems.map(({ id, text }) => <li key={id}>{text}</li>)}
                        </ul>
                    </div>
                </div>
                <a href="" className="md:text-base lg:text-lg bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-full">Download Resume</a>
            </div>

            <div className="flex md:hidden justify-between">
                <div>
                    <div onClick={() => setMenu((preview) => !preview)} className="bg-white w-2/3 h-screen text-black fixed z-10" >
                        <div className="px-7 py-6">
                            {menu ? <CgMenu size={35} /> : <IoClose size={35} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar

