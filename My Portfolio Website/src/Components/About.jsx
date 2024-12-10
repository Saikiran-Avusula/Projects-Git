import aboutImg from '../assets/enchanced bike sai.png'

const About = () => {
    return (
        <>
            <div id='about' className="text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 underline">About Me</h2>
                    {/* <p className="mb-12 text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere saepe voluptates itaque modi sit quae molestias, maxime veniam. Nisi ut aliquid aspernatur assumenda iste autem molestias nulla a placeat itaque!</p> */}

                    <div className="flex flex-col md:flex gap-5 justify-center items-center">
                        <div className="mb-2 flex justify-center items-center">
                            <img src={aboutImg} alt='Sai Kiran Avusula' className='w-2/4 sm:w-1/4 lg:w-1/4  md:2/8' />
                        </div>

                        <p className='md:w-1/2 text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl' >
                            Hey! ’m Sai Kiran Avusula, a Computer Science graduate from Hyderabad (2022) with experience in corporate and startup environments. At Amoghnya Tech Solutions, I developed dashboards and internal platforms using agile methodologies. During my internship at Cognizant, I gained expertise in front-end development, troubleshooting, and documentation, along with foundational skills in Java, C, and SQL. Proficient in HTML, CSS, JavaScript, React.js, and Bootstrap, I’ve built projects like a Weather App and Portfolio Site. I’m enthusiastic about the IT industry, eager to learn, and adaptable to any programming language or technology required for my role.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col sm:flex-row justify-around items-center mt-5 space-y-6 sm:space-y-0'>
                    <div className='text-center'>
                        <p className="text-red text-3xl md:text-4xl font-bold md:my-6 text-red-500">1.9 <span className='text-white'>years</span></p>
                        <p className="text-sm sm:text-base text-white-300">Overall Experince with <br />Start-Up & Corperate Enivronements</p>
                    </div>

                    <div className='text-center'>
                        <h3 className="text-red text-3xl md:text-4xl font-bold md:my-6 text-red-500">13 <span className='text-white'>months</span></h3>
                        <p className='text-sm sm:text-base text-white-300'>Fulltime at <br /> Amoghnya Tech Solutions Pvt Ltd.</p>
                    </div>

                    <div className='text-center'>
                        <h3 className="text-red text-3xl md:text-4xl font-bold md:my-6 text-red-500">9 <span className='text-white'>months</span></h3>
                        <p className='text-sm sm:text-base text-white-300'>Intership with <br />Cognizant Technology India Solutions Pvt. Ltd.</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default About