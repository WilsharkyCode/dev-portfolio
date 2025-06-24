import { WORK_EXPERIENCE } from "./Constants/Constants";

export default function WorkExperienceContent() {
    return (
        <>
            {/* Main Container */}
            <div className="flex flex-col gap-4"> {/* <-- Added wrapper with vertical gap */}
                {WORK_EXPERIENCE.map((experience, index) => (
                    <div
                        key={index}
                        className='p-4 hover:bg-[#242424] hover:drop-shadow-lg  
                        rounded-md transition-all duration-500 hover:boxglow text-white'
                    >
                        <div className="flex justify-between items-center">
                            <h2 className='text-2xl font-semibold'> {experience.role}</h2>
                            
                            <div>
                                {experience.start} - {experience.end}
                            </div>
                        </div>
                        {experience.company}
                        <ul>
                            <li>
                                <div className='flex flex-wrap'>
                                    {experience.techUsed.map((tech, techIndex) => (
                                        <div
                                            key={techIndex}
                                            className="border-cyan-300 hover:bg-[#60e8ec] bg-[#323232] transition-shadow duration-300
                                            shadow shadow-[#323232] hover:boxglow border w-fit py-[.1rem] px-2 my-1
                                            md:rounded-md rounded-sm m-[0.1rem] xl:text-base md:text-xxs text-xs text-sky-200 hover:text-cyan-900 text-nowrap"
                                        >
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </li>
                            <div className='xl:text-base text-xs'>
                                {experience.description.map((desc, descIndex) => (
                                    <li key={descIndex}> - {desc}</li>
                                ))}
                            </div>
                        </ul>
                         
                    </div>
                ))}
            </div>
        </>
    );
}
