// import { avatar } from '../assets/Avatar.png'
import avatar from '../assets/Avatar.png'
// import { motion } from 'react'

const BannerSection = () => {
    return (
        <>
            <div className="text-white py-10">
                <img src={avatar} alt={avatar} className="mx-auto w-2/3 md:w-1/3 lg:w-1/4" width={2} height={2} />

                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl flex flex-col gap-4 font-bold mb-4">Your Story, Your Way
                        <span className="text-red-500 ">Build Your Personal Portfolio</span>
                    </h1>
                    <p className="text-gray-400 text-lg mb-8">Showcase your journey by crafting a personal Portfolio in minutes</p>

                    <div className="flex justify-center space-x-4 mb-10">
                        <button className="bg-red-500 text-white px-6 py-3 rounded-full">Hire Me</button>
                        <button className="text-white border border-white px-6 py-3 rounded-full">My Story</button>
                    </div>
                </div>
            </div>
        </>)
}

export default BannerSection