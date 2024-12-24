import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { GrClose } from "react-icons/gr";

import { Link } from "react-router-dom";

const Navbar = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [openMenu, setOpenMenu] = useState(false);

    const navItems = [
        { label: "Home", link: '/' },
        { label: "About", link: "/about" },
        { label: 'Tickets', link: '/bus-tickets' },
        { label: "Service", link: "/service" }
    ];

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    // close opened menu
    // const handleCloseMenu = () => {
    //     setOpenMenu(false);
    // };


    // to make navbar sticky and hidde when scroll up and showing when scroll down
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            // determine visibility of navbar based on scroll position
            if (currentScrollPosition > scrollPosition && currentScrollPosition > 50) {
                setIsVisible(false); //hide navbar when scrolling up
            } else {
                setIsVisible(true);  //show navbar when scrolling up at the top of the page
            }

            setScrollPosition(currentScrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);



    return (
        <>
            <nav
                className={`w-full border-bg-gray-500 shadow-sm fixed h-[8ch] top-0 left-0 lg:px-24 md:px-16 sm:px-7 px-4 backdrop-blur-lg transition-transform duration-300 z-50
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
            ${scrollPosition > 50 ? "bg-black/10 backdrop-blur-md shadow-md" : "bg-neutral-100/10"}`}
            >
                <div className="w-full h-full flex items-center justify-between">

                    {/* Logo section */}
                    <Link to='/' className='text-4xl text-red-500 font-bold'>
                        Bus
                    </Link>

                    {/* Hamburger menu */}
                    <div className="w-fit md:hidden flex items-center justify-center cursor-pointer gap-1 text-neutral-700" onClick={handleOpenMenu}>

                        {openMenu
                            ?
                            <GrClose className="w-5 h-5" />
                            :
                            <IoMenu className="w-5 h-5" />}

                    </div>

                    {/* Nav links & button signup */}
                    {/* navlinks */}
                    <div className={`${openMenu ? "flex absolute top-20 left-0 w-full h-auto md:relative" : "hidden"} flex-1 md:flex flex-col md:flex-row md:gap-14 gap-8 md:items-center items-start md:p-0 sm:p-4 justify-end md:bg-transparent bg-neutral-50  md:border-transparent border-neutral md:shadow-none sm:shadow-md shadow-md rounded-xl`}>

                        {/* nav itmes */}
                        <ul className="list-none flex md:items-center items-start flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-black-50 m-3">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.link} className="hover:text-red-500 ease-in-out duration-300 text-lg">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* sign up button  */}
                        <div className="flex flex-center justify-center m-2">
                            <button
                                className="md:w-full w-full md:px-4 px-2.5 py-1 bg-red-500 
                                hover:border-red-500 border md:rounded-full rounded-xl 
                                text-white font-normal text-neutral-50 hover:text-red-500 hover:bg-white 
                                ease-in-out duration-300">
                                Sign Up
                            </button>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar;   