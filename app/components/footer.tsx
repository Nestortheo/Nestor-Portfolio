import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa"

import { Mail , ArrowRight} from "lucide-react"

export default function Footer(){

    return(
        <footer 
            className="mt-32
                    border-t border-purple-500/20
                    bg-[#0f0f17]/10
                    backdrop-blur-md"
        >
            
            <div 
                className="
                    max-w-5xl mx-auto
                    px-6 py-14
                    flex flex-col lg:flex-row
                    gap-10
                    justify-between
                ">
                {/*LEFT*/}
                <div className="flex flex-col gap-3">

                    <div>
                        <h3 className="text-xl font-semibold tracking-light">Νέστωρ Θεοδωρίδης</h3>
                        <p className="text-sm text-purple-400 ">Full Stack Developer</p>
                    </div>
                    <p className="
                        max-w-sm
                        text-sm
                        text-neutral-400
                        leading-relaxed
                    ">
                        Building modern, responsive and
                        user-focused web experiences with
                        React, Next.js and Django.
                    </p>

                </div>
                
                {/*RIGHT */}
                <div className="flex flex-col gap-1">
                    <h3 className="text-sm text-purple-400 mb-2">CONNECT</h3>

                    {/*GitHub */}
                    <a  
                         href="#"
                         className="
                            w-[320px]

                            flex
                            items-center
                            justify-between

                            py-4

                            border-b
                            border-purple-500/10

                            hover:text-purple-300
                            transition-colors
                            "
                    >
                        <div className="flex items-center gap-4">
                            <FaGithub size={22} />
                            <p>GitHub</p>
                        </div>
                         <ArrowRight size={18}/>
                    </a>

                    {/*LinkedIn*/}
                    <a
                        href="#"
                        className="
                            w-[320px]

                            flex items-center justify-between

                            py-4

                            border-b border-purple-500/10

                            hover:text-purple-300
                            transition-colors
                        "
                    >
                        <div className="flex items-center gap-4">
                            <FaLinkedin  size={22}/>
                            <p>LinkedIn</p>
                        </div>
                        <ArrowRight size={18}/>
                    </a>

                    {/*Mail*/}
                    <a
                        href="#"
                        className="
                            w-[320px]

                            flex items-center justify-between

                            py-4

                            border-b border-purple-500/10

                            hover:text-purple-300
                            transition-colors
                        "
                    >
                        <div className="flex items-center gap-4">
                            <Mail size={22}/>
                            <p>Email</p>
                        </div>
                        <ArrowRight size={18} />
                    </a>
                </div>
                
            </div>

            <div className="border-b border-purple-500/10" />

            <div 
                className="
                    max-w-5xl mx-auto
                    px-6 py-6
                    flex flex-col lg:flex-row
                    gap-4
                    justify-between
                    
                "
            >   
                {/*RIGHT */}
                <p className="text-neutral-500 text-sm">© 2026 Νέστωρ Θεοδωρίδης. All rights reserved.</p>
                
                {/*LEFT*/}
                <div className="flex items-center gap-2">

                    <p className="text-neutral-500 text-sm">Built with</p>
                    <p className="text-purple-400/70 text-sm">Next.js</p>
                    <span className="text-neutral-600">
                        •
                    </span>
                    <p className="text-purple-400/70 text-sm">Tailwind CSS</p>
                    <span className="text-neutral-600">
                        •
                    </span>
                    <p className="text-purple-400/70 text-sm">Django</p>
                    
                </div>
                
            </div>
        </footer>
    )
}