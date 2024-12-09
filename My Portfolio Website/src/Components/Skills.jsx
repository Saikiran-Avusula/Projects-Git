
import html5Img from '../assets/html5.png'
import CSS3Img from '../assets/css3.png'
import JavascriptImg from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import bootstrapImg from '../assets/bootstrap.png'
import javaImg from '../assets/java.png'
import mySQLImg from '../assets/mySQL.png'

const Skills = () => {

    // const Skills = ["HTML-5", "CSS-3", "Javascript", "React.js", "Boostrap", "Java", "SQL"]

    const SkillsList =
        [
            {
                id: 1,
                skill: "HTML5",
                image: html5Img
            },
            {
                id: 2,
                skill: "CSS3",
                image: CSS3Img
            },
            {
                id: 3,
                skill: "Java-Script",
                image: JavascriptImg
            },
            {
                id: 4,
                skill: "React",
                image: reactImg
            },
            {
                id: 5,
                skill: "Bootstrap",
                image: bootstrapImg
            },
            {
                id: 6,
                skill: "Java",
                image: javaImg
            },
            {
                id: 7,
                skill: "mySQL",
                image: mySQLImg
            }

        ]


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
            <div id='skills' className="text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 pb-5">Skills Proficient in </h2>
                    {/* <div varients={scrollVarient1} className="w-full overflow-hidden relative">
                        <div className="flex-wrap flex space-x-3 justify-center gap-10">
                            {Skills.map((eachSkill, index) => (
                                <div key={index} className="text-xl bg-gray-800 px-6 py-3 rounded-full">
                                    {eachSkill}
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* <br /><br /> */}

                    <div className="w-full overflow-hidden relative">

                        <div className="flex-wrap flex space-x-1 justify-center gap-5">
                            {SkillsList.map((item) => (
                                <div key={item.id} className="text-xl text-black bg-gray-300 px-5 py-2 rounded flex justify-center items-center hover:bg-gray-500 hover:text-white hover:border cursor-pointer">
                                    <img src={item.image} alt={item.skill} width={40} title={item.skill} />
                                    <p>{item.skill}</p>
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