import avatar from '../assets/kiranAIImage.png'
import { Link } from 'react-scroll'
import HireMeButton from './Buttons/HireMeButton'
import MyStoryButton from './Buttons/MyStoryButton'
// import { motion } from 'react'

const Main = () => {
    return (
        <>
            <div className="text-white py-10">
                <img src={avatar} alt={avatar} className="mx-auto w-2/4 md:w-1/3 lg:w-1/4" width={2} height={2} />

                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-7xl flex flex-row justify-center gap-4 font-bold mb-4">Sai Kiran  <span className="text-red-500 ">Avusula</span>

                    </h1>
                    <p className="text-gray-400 text-2xl  mb-8 ">A Passionate Web Developer</p>

                    <div className="flex justify-center space-x-4 mb-10">
                        <div>
                            <Link to='connect_me' smooth={true} duration={500} offset={-70} >
                                <HireMeButton />
                            </Link>
                        </div>

                        <div>
                            <Link to='about' smooth={true} duration={500} offset={-70} >
                                <MyStoryButton />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </>)
}

export default Main