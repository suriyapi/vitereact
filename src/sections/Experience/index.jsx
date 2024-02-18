import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/exp_site.png";
import piclittlelemon from "../../assets/littlelemon.png";
import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

    const [isMouseEnter, setIsMouseEnter] = useState({});

    return (
        <div className="">
            <div className='text-primaryAccent font-medium'>Experience</div>

            <div className={`grid grid-cols-[25%_75%]  rounded-md px-2 py-6 transition-all ${isMouseEnter['exp1'] ? "bg-gray-400": ""}`}
                onMouseEnter={() => setIsMouseEnter({'exp1': true})}
                onMouseLeave={() => setIsMouseEnter({'exp1': false})}
            >
                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnter['exp1'] ? "text-primaryTitle": ""}`}>2022-2023</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp1'] ? "text-primaryTitle": ""}`}>
                        Fullstack · Sport Analysis System
                        <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isMouseEnter['exp1'] ?"translate-x-1 -translate-y-1": ""} `} icon={faArrowRight} />
                    </div>
                    <div className="flex gap-4 text-xl">
                        <a href="https://suriyapi.github.io/vite/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://suriyapi.github.io/vite/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faMedium} /></a>
                        <a href="https://suriyapi.github.io/vite/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    
                    <div>
                        <div className="flex gap-4 text-sm">
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp1'] ? "text-primaryTitle": ""}`}>React</div>
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp1'] ? "text-primaryTitle": ""}`}>Taiwind</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-[25%_75%]  rounded-md px-2 py-6 transition-all ${isMouseEnter['exp2'] ? "bg-gray-400": ""}`}
                onMouseEnter={() => setIsMouseEnter({'exp2': true})}
                onMouseLeave={() => setIsMouseEnter({'exp2': false})}
            >
                <div>
                    <div>
                        <span className={`text-sm ${isMouseEnter['exp2'] ? "text-primaryTitle": ""}`}>2022-2023</span>
                    </div>
                    <div>
                        <img src={piclittlelemon} className="w-5/6 rounded-md border-2 border-primarySubcontent" />
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`text-primaryAccent ${isMouseEnter['exp2'] ? "text-primaryTitle": ""}`}>
                        Fullstack · Sport Analysis System
                        <FontAwesomeIcon className={`text-xs -rotate-45 duration-500 ease-out ${isMouseEnter['exp2'] ?"translate-x-1 -translate-y-1": ""} `} icon={faArrowRight} />
                    </div>
                    <div className="flex gap-4 text-xl">
                        <a href="https://suriyapi.github.io/vite/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://suriyapi.github.io/vite/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faMedium} /></a>
                        <a href="https://suriyapi.github.io/vite/" target="_blank" className="hover:scale-110"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                    <div className="text-sm">Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.</div>
                    <div>
                        <div className="flex gap-4 text-sm">
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2'] ? "text-primaryTitle": ""}`}>React</div>
                            <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2'] ? "text-primaryTitle": ""}`}>Taiwind</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Experience;