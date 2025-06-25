import { useState } from "react";
import ContactContent from "./components/ContactContent";
import AboutContent from "./components/AboutContent";
import WorkExperienceContent from "./components/WorkExperienceContent";
import PortfolioContent from "./components/PortfolioContent";
import ParticlesBG from "./components/Particles";
import { Analytics } from "@vercel/analytics/react"


function App() {
  const [activeTab, setActiveTab] = useState("EXPERIENCE");

  return (
    <>
    <Analytics />
      <div className="bg-gradient-to-tl from-[#371854] to-[#0c1617] w-dvw min-w-[320px] h-dvh p-2 sm:p-7 justify-items-center items-center 
      overflow-auto relative"style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE 10+
            }}>
        <div className="md:contents hidden"  >
            <ParticlesBG />
          </div>
        <div className="lg:flex justify-center contents relative z-10 flex-col lg:flex-row m-8">
          {/*Main Content Start*/}
          <div className="xl:h-[49rem] lg:h-[30rem] lg:w-[22%] w-full min-w-[0]">
            <div>
              <AboutContent />
            </div>
            <div className=" ">
              <ContactContent />
            </div>
          </div>

          <div className="dashboard-container-main bgborder 
           xl:h-[49rem] md:h-[30rem] lg:w-[63%] lg:ml-4 w-full min-w-[0] h-fit md:overflow-x-hidden pt-0">
            {/* Navbar */}
            <div className="flex justify-between items-center  top-0 bg-[#181818] backdrop-blur-md z-20 w-full left-0 right-0 px-0" style={{ minWidth: 0, position: 'sticky'}}>
              <div className="py-5 flex items-center">
                <button
                  className={`xl:text-2xl lg:text-xl text-lg transition-all duration-300 ease-in-out
                    ${activeTab === "EXPERIENCE" ? "font-bold text-slate-100" : "text-slate-400"}
                    hover:text-cyan-300 hover:animate-glow`}
                  onClick={() => setActiveTab("EXPERIENCE")}
                >
                  EXPERIENCE
                </button>

                <div className="flex">
                  <div className="divider px-1" />
                </div>
                <button
                  className={`xl:text-2xl lg:text-xl text-lg  transition-all duration-300 ease-in-out ${activeTab === "PORTFOLIO" ? "font-bold text-slate-100" : "text-slate-400"}
                   hover:text-cyan-300 hover:animate-glow`}
                  onClick={() => setActiveTab("PORTFOLIO")}
                >
                  PORTFOLIO
                </button>
              </div>
              <h1 className="xl:text-4xl lg:text-2xl font-bold text-xl text-slate-100 md:contents hidden">
                {activeTab}
              </h1>
            </div>
            {/* Navbar */}
            {/* Content */}
            <div className="mt-5">{activeTab === "EXPERIENCE" && <WorkExperienceContent />}
            {activeTab === "PORTFOLIO" && <PortfolioContent />}</div>
          </div>

           
          
        </div>
        {/*Main Content End*/}
        
      </div>
    </>
  );
}

export default App;
