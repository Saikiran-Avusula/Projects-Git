import WeatherApp from '/WeatherApp.png'
import WaterReminderApp from '/WaterReminderApp.png'
import NovemberStaticTemplate from '/NovemberStaticTemplate.png'
// import { link } from 'motion/react-client'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Weather Application",
            // description: 'I developed a responsive "Weather Application" using HTML, CSS, JavaScript, and the Open Weather API. The app displays real-time weather data, including temperature, humidity, and wind speed, along with dynamic icons for enhanced visual appeal. It features a clean and user-friendly interface, with error handling for a seamless experience. Asynchronous JavaScript was utilized to fetch data quickly and accurately, ensuring compatibility across various devices',
            image: WeatherApp,
            link: "https://saikiran-avusula.github.io/Projects-Git/Weather%20App/indexWeather.html"
        },
        {
            id: 2,
            title: "Water Reminder Application",
            // description: 'I developed a "Water Reminder Application" using HTML, CSS, JavaScript, and Bootstrap to provide personalized notifications and reminders. The app features user-friendly interfaces, seamless performance monitoring, and integrated alerts to ensure a smooth experience across various devices and platforms. I also debugged front-end issues to enhance overall functionality and usability.',
            image: WaterReminderApp,
            link: "https://saikiran-avusula.github.io/Projects-Git/Water%20Reminder%20Application/first_page.html"
        },
        {
            id: 3,
            title: "November - Static Template",
            // description: 'I developed a project titled "November Template" using HTML for structuring the content and CSS for styling, showcasing web development concepts to deliver a visually appealing and user-friendly experience.',
            image: NovemberStaticTemplate,
            link: "https://saikiran-avusula.github.io/Projects-Git/November%20template/november.html"
        },
    ]

    return (
        <>
            <div id='projects' className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px8'>
                    <h2 className='text-4xl text-white underline font-bold text-center mb-12'>My Projects/Work</h2>
                    <p className='mb-12 text-gray-400 text-center'>Here are some of the projects I’ve developed, showcasing my skills in web development and problem-solving. Each project reflects my commitment to delivering efficient, user-friendly solutions while leveraging technologies like React.js, JavaScript, and APIs.</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {projects.map((eachProject) => (
                            <div key={eachProject.id} className='shawdow-lg rounded-lg overflow-hidden backdrop-blur bg-black/1 cursor-pointer'>
                                <img src={eachProject.image} alt={eachProject.title} className='w-full h-48 object-cover' />
                                <div className='p-6'>
                                    <h2 className='text-xl text-white font-semibold mb-2'>{eachProject.title}</h2>
                                    <p className='text-slate-400 mb-4'>{eachProject.description}</p>
                                    <button className='border-2 border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white trasition'>
                                        <a href={eachProject.link} title={eachProject.title}>
                                            Details
                                        </a>
                                    </button>
                                </div>
                            </div>)
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;