


import WeatherApp from '/WeatherApp.png';
import WaterReminderApp from '/WaterReminderApp.png';
import NovemberStaticTemplate from '/NovemberStaticTemplate.png';
import BusBookingApp from '../assets/Bus-booking-app.png'

const ProjectCard = () => {
    const projects = [
        {
            id: 1,
            title: "Weather Application",
            description: 'Developed a responsive weather app displaying real-time data such as temperature, humidity, and wind speed. Added dynamic icons, error handling, and a clean UI for an enhanced user experience. Utilized asynchronous JavaScript for fast, accurate data fetching across devices.',
            image: WeatherApp,
            link: "https://saikiran-avusula.github.io/Projects-Git/Weather%20App/indexWeather.html",
            Technologies: "HTML, CSS, JavaScript, Open Weather-API"
        },
        {
            id: 2,
            title: "Water Reminder Application",
            description: 'Developed a web application to deliver personalized notifications and reminders. Focused on performance monitoring, integrating alerts, and designing user-friendly interfaces for a seamless experience.',
            image: WaterReminderApp,
            link: "https://saikiran-avusula.github.io/Projects-Git/Water%20Reminder%20Application/first_page.html",
            Technologies: "HTML, CSS, Java-Script, CSS Modules"
        },
        {
            id: 3,
            title: "November - Static Template",
            description: "Designed a custom template called 'NOVEMBER TEMPLATE,' showcasing web development concepts and demonstrating skills in creating structured, visually appealing, and user-friendly pages.",
            image: NovemberStaticTemplate,
            link: "https://saikiran-avusula.github.io/Projects-Git/November%20template/november.html",
            Technologies: "HTML, CSS, Java-Script, CSS Modules"
        },
        {
            id: 4,
            title: "Bus Ticket Booking Application",
            description: "The Bus Ticket Booking Application is a React-based project that enables users to search, reserve, and manage bus tickets, featuring a responsive interface and checkout process.",
            image: BusBookingApp,
            link: "https://bus-ticket-booking-application-tau.vercel.app/",
            Technologies: "React.js, Tailwind CSS, react-router-DOM, Framer-motion"
        }
    ];

    return (
        <>


            <div id='projects' className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className='rounded-lg overflow-hidden backdrop-blur bg-black/10 cursor-pointer h-[400px] w-full sm:w-[350px] md:w-[310px] lg:w-[290px] xl:w-[300px] mx-auto dark:bg-black bg-white dark:border-0 border dark:text-white text-black flex flex-col group'
                            >
                                <div className='w-full h-[50%] relative'>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className='absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
                                    />
                                </div>
                                <article className='p-8 h-[50%] flex flex-col justify-center bg-gradient-to-t from-[#e63946] opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                                    <h1 className='text-2xl font-semibold'>{project.title}</h1>
                                    <p className='text-lg pt-5'><span className='font-semibold'>Technologies:</span> {project.Technologies}</p>
                                </article>
                                <article className='p-6 w-full h-full overflow-hidden z-10 absolute top-0 flex flex-col justify-end rounded-md bg-[#e63946] opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <div className='translate-y-10 group-hover:translate-y-0 transition-transform duration-300 space-y-2'>
                                        <h1 className='text-xl font-semibold underline text-black'>{project.title}</h1>
                                        <p className='text-lg text-gray-200'>{project.description}</p>
                                        <button className='mt-4 p-2 bg-black rounded-md text-white hover:bg-black-500'>
                                            <a href={project.link} target='_blank' rel='noopener noreferrer'>
                                                View Project
                                            </a>
                                        </button>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProjectCard;
