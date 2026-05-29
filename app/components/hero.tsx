import {
    ArrowDown,
ArrowRight,
ArrowUpRight,
Mail

} from "lucide-react"

import {
  SiGithub,
} from "react-icons/si"

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

import Image from "next/image";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Hero(){

    return(
        <section
            id="hero"
            className="
                relative
                mt-34
                min-h-screen

                flex flex-col 
                items-center

                gap-8

                overflow-hidden
                
            "
        >
            {/* Star 1 */}
            <div
                className="
                    absolute
                    top-[20%]
                    left-[15%]

                    h-1
                    w-1

                    rounded-full

                    bg-purple-300

                    shadow-[0_0_12px_rgba(196,181,253,0.8)]

                    animate-pulse

                    opacity-60

                    -z-10
                "
            />

            {/* Star 2 */}
            <div
                className="
                    absolute
                    top-[35%]
                    right-[20%]

                    h-1
                    w-1

                    rounded-full

                    bg-purple-300

                    opacity-50

                    -z-10
                "
            />

            {/* Star 3 */}
            <div
                className="
                    absolute
                    bottom-[25%]
                    left-[25%]

                    h-1
                    w-1

                    rounded-full

                    bg-white

                    opacity-40

                    -z-10
                "
            />

            {/* Star 4 */}
            <div
                className="
                    absolute
                    bottom-[15%]
                    right-[15%]

                    h-1
                    w-1

                    rounded-full

                    bg-purple-300

                    opacity-50

                    -z-10
                "
            />
            <div
                className="
                    absolute

                    left-1/2
                    top-1/2

                    -translate-x-1/2
                    -translate-y-1/2

                    h-[500px]
                    w-[500px]

                    rounded-full

                    bg-purple-600/10

                    blur-[120px]

                    -z-10
                "
            />

             {/* Star 5 */}
            <div
                className="
                    absolute
                    top-[5%]
                    left-[5%]

                    h-1
                    w-1

                    rounded-full

                    bg-purple-300

                    opacity-60

                    -z-10
                "
            />
             {/* Star 1 */}
            <div
                className="
                    absolute
                    top-[5%]
                    right-[5%]

                    h-1
                    w-1

                    rounded-full

                    bg-purple-300

                    opacity-60

                    -z-10
                "
            />

            

           
            <p className="bg-purple-400/20 rounded-full p-2 text-sm">Full Stack Developer</p>
            <div className="
                    flex flex-col
                    md:flex-row

                    items-center

                    gap-2

                    text-5xl
                    md:text-6xl

                    font-bold
                    tracking-tight"
            >
                <h1>Νέστωρ</h1>
                <h1 className="text-purple-400">Θεοδωρίδης</h1>
            </div>
            
            <div className="border border-purple-400 w-[60px]"/>

            <p
                className="
                text-xl
                text-neutral-300
                text-center
                leading-relaxed
                max-w-2xl
                mx-auto
                "
            >
                I build modern, responsive web applications
                <br />
                with {" "}
                <span className="text-purple-400">
                    powerful backends
                </span>{" "}
                and{" "}
                <span className="text-purple-400">
                    intuitive frontends
                </span>.
            </p>

            <div className="flex  sm:flex-row gap-4 ">
                <a 
                href="#projects"
                className="
                    flex items-center justify-center
                    
                    sm:w-[180px]

                    w-[150px]

                    p-3
                    gap-6

                    border border-white/10
                    rounded-xl
                    bg-purple-600
                    cursor-pointer

                    hover:bg-purple-500
                    hover:scale-105

                    
                ">
                    <p className="">View My Work </p>
                    <ArrowRight size={22}/>
                </a>

                <a 
                href="#contact"
                className="
                    flex items-center justify-center

                    sm:w-[180px]

                    w-[150px]

                    p-3
                    gap-6

                    border border-purple-700/50
                    rounded-xl
                    cursor-pointer

                    hover:bg
                    hover:scale-105
                    
                ">
                    <p className="">Contact Me</p>
                    <ArrowUpRight size={22}/>
                </a>
            </div>
        
        <div className="flex flex-wrap justify-center gap-4">

                {/*GitHub*/}
                <a 
                href="https://github.com/Nestortheo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center hover:text-purple-400">
                    <SiGithub size={28} />
                    <span>GitHub</span>
                </a>

                {/* Divider */}
                <div className="h-6 w-px bg-purple-600/50" />

                <a 
                href="https://www.linkedin.com/in/nestor-theodoridis-480032228/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center hover:text-purple-400">
                    <  FaLinkedin size={28} />
                    <span>LinkedIn</span>
                </a>

                <div className="h-6 w-px bg-purple-600/50" />

                <a 
                href="mailto:nestorastheo@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center justify-center hover:text-purple-400">
                    <Mail size={28} />
                    <span>Email</span>
                </a>

                

            </div>

            <div 
                className="
                    flex flex-col items-center
                    gap-8
                "
            >
                <p className="
                    text-purple-500/70
                    text-purple-500/70
                    text-sm
                    transition
                    group-hover:text-purple-400
                    "
                >
                    Scroll to explore
                </p>
            <ArrowDown
                    size={28}
                    className="
                        text-purple-600
                        animate-bounce
                    "
                />
            </div>

        
            

        </section>
    )
}