
// import CardProject from "./cardProject";

import ProjectCard from "./ProjectCard";





// import { link } from 'motion/react-client'

const Projects = () => {


    return (
        <>
            <div id='projects' className='py-12'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px8'>
                    <h2 className='text-4xl text-white underline font-bold text-center mb-12'>My Projects/Work</h2>
                    <p className='mb-12 text-gray-400 text-center'>Here are some of the projects I’ve developed, showcasing my skills in web development and problem-solving. Each project reflects my commitment to delivering efficient, user-friendly solutions while leveraging technologies like React.js, JavaScript, and APIs.</p>
                    
                    {/* Card Format Projects List */}
                    <ProjectCard/>
                </div>
            </div>
        </>
    )
}

export default Projects;