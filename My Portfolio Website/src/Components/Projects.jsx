import project1 from '../assets/enchanced bike sai.png'

const Projects = () => {

    const projects = [
        {
            id: 1,
            title: "Project1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat aliquam laudantium labore rem provident doloremque, ratione eos, sed sapiente architecto assumenda vitae. Corrupti, accusantium labore. Nulla tempore dolorem soluta!",
            image: project1,
            link: "#"
        },
        {
            id: 2,
            title: "Project2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat aliquam laudantium labore rem provident doloremque, ratione eos, sed sapiente architecto assumenda vitae. Corrupti, accusantium labore. Nulla tempore dolorem soluta!",
            image: project1,
            link: "#"
        },
        {
            id: 3,
            title: "Project3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat aliquam laudantium labore rem provident doloremque, ratione eos, sed sapiente architecto assumenda vitae. Corrupti, accusantium labore. Nulla tempore dolorem soluta!",
            image: project1,
            link: "#"
        },
    ]
    return (
        <>
            <div id='projects' className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px8'>
                    <h2 className='text-4xl text-white underline font-bold text-center mb-12'>My Projects/Work</h2>
                    <p className='mb-12 text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero praesentium modi itaque, aperiam totam consequuntur quia nesciunt similique temporibus dolores. Iure ipsum adipisci, delectus praesentium quae doloribus placeat modi minima?</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        {projects.map((eachProject) => (
                            <div key={eachProject.id} className='bg-gray-900 shawdow-lg rounded-lg overflow-hidden '>
                                <img src={eachProject.image} alt={eachProject.title} className='w-full h-48 object-cover' />
                                <div className='p-6'>
                                    <h2 className='text-xl text-white font-semibold mb-2'>{eachProject.title}</h2>
                                    <p className='text-slate-400 mb-4'>{eachProject.description}</p>
                                    <button className='border-2 border-red-500 text-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white trasition'>Details</button>
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