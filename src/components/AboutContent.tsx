import { SKILLS } from "./Constants/Constants"

const SkillList = SKILLS.map((skill) => (
    <div key={skill.id}>
      <div className="border-cyan-300 hover:bg-[#60e8ec] bg-[#323232] transition-shadow duration-300
      shadow shadow-[#323232] hover:boxglow border w-fit py-[.1rem] px-2 
      md:rounded-md rounded-sm m-[0.1rem]
       xl:text-base md:text-xxs text-xs text-sky-200 hover:text-cyan-900">
        {skill.name}
        </div>
    </div>
  ));

export default function AboutContent() {
  return (
    <div>
        <div className="dashboard-container-about  xl:h-[28rem] lg:h-[19rem] lg:mb-4 z-0">
            <div className="">
                <b className="xl:text-4xl lg:text-2xl font-bold text-xl  text-slate-100">
                    MARK WILSHIRE FAMORCA
                </b>
                <p className="xl:text-lg  lg:text-sm text-xs  text-slate-100">
                    Full-Stack Software Developer
                </p>
                <p className="xl:text-base  text-xxs text-[#a2a2a2]">
                Hello, I'm Wilshire. A Web & Mobile Full‑Stack Developer with hands-on experience deploying full applications.
I build clean, scalable solutions that deliver real impact.

                </p>
            </div>
            <div className="mt-3">
                <h3 className=" xl:text-xl lg:text-base text-sm font-bold  text-slate-100">
                    SKILLS
                </h3>
                <div className="flex flex-wrap ">
                    {SkillList}
                </div>

                

            </div>
        </div>
    </div>
  )
}   
