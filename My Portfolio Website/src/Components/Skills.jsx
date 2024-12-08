import {motion} from 'react'

const Skills = () => {

    const Skills = ["HTML5", "CS3", "Javascript", "React.js", "Boostrap", "Java", "SQL"]

    const skillList = [...Skills, ...Skills]

    const scrollVarient1 = {
        animate: {
            x: [-2000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                }
            }
        }
    }
    return (
        <>
            <div className="text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-12">Skills Proficient in </h2>
                    <div varients={scrollVarient1} className="w-full overflow-hidden relative">
                        <div className="flex-wrap flex space-x-3 justify-center gap-10">
                            {Skills.map((eachSkill, index) => (
                                <div key={index} className="text-xl bg-gray-800 px-6 py-3 rounded-full">
                                    {eachSkill}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <div className="overflow-hidden relative w-full mt-5">
                        <div className="whitespace-nowrap flex space-x-10">
                            {skillList.map((eachSkill, index) => (
                                <div key={index} className="text-lg bg-gray-800 px-6 py-3 rounded-full inline">
                                    {eachSkill}
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Skills