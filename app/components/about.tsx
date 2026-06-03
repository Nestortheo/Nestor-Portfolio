import {
  SiReact,
  SiDjango,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si"

import {
  Target,
  User,
  Rocket,
} from "lucide-react"

import Image from "next/image";

import { Database } from "lucide-react"

export default function About(){

    return(
    <section id="about" className="scroll-mt-24">
          {/* Creating the Card */}
          <div 
            className="

              p-5 

              border border-white/5
              rounded-3xl

              bg-purple-900/5

              flex flex-col lg:flex-row
              ">
            {/*Left Side */}
            <div 
              className="
                lg:w-2/5
                p-2 lg:p-10
                flex flex-col justify-center gap-4
                
                ">
              <h2 className="text-sm text-purple-400">ABOUT ME</h2>
              <div>
                <p className="text-xl md:text-2xl leading-tight">I build modern, responsive web applications with a focus</p>
                <p className="text-xl md:text-2xl text-purple-400 ">real-world impact</p>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">I'm a full stack developer who enjoys turning ideas into clean, functional
                and user-friendly solutions. I work with modern technologies and build projects that solve
                real problems and deliver real value
              </p>
              
              <div className="flex gap-4 items-start">
                {/* Target Icon */}
                <div
                  className="
                    p-3
                    rounded-full
                    bg-purple-500/10
                    border border-purple-500/20
                  "
                >
                  <Target
                    size={22}
                    className="text-purple-400"
                  />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Clean & Modern Code
                  </h3>

                  <p className="text-gray-400">
                    I write maintainable code with
                    best practices and attention
                    to detail.
                  </p>
                </div>

                </div>

                <div className="flex gap-4 items-start">
                  {/*User Icon */}
                  <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <User 
                      size={22}
                      className="text-purple-400"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      User Focused Design
                    </h3>

                    <p className="text-gray-400">
                      I build interfaces that are intuitive, accessible
                      and crafted for great user experience.
                    </p>
                  </div>

                </div>

                <div className="flex gap-4 items-start">
                  {/* Rocket Icon */}
                  <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <Rocket 
                      size={22}
                      className="text-purple-400"
                    />
                  </div>

                  <div>
                    <h2 className="font-semibold">
                      Real World Projects
                    </h2>

                    <p className="text-gray-400">
                      I love working on meaningful projects that make
                      an impact and solve real needs
                    </p>
                  </div>

                </div>

                {/* Border with Stats */}
                <div className="flex gap-4">
                  <div className="
                      w-28
                      p-2
                      border rounded-xl 
                      border-purple-500/20
                      bg-purple-500/5
                      flex flex-col items-center justify-center
                      
                  ">
                      <h3 className="font-semibold text-xl text-purple-400 mb-1">2+</h3>
                      <p className="text-sm text-neutral-300">Projects</p>
                      <p className="text-sm text-neutral-300">Delivered</p>
                  </div>

                  <div className="
                    w-28
                    p-3
                    border rounded-xl
                    border-purple-500/20
                    bg-purple-500/5
                    flex flex-col items-center justify-center
                  ">
                    <h3 className="font-semibold text-xl text-purple-400 mb-1">1+</h3>
                    <p className="text-sm text-neutral-300">Years of</p>
                    <p className="text-sm text-neutral-300">Experience</p>
                  </div>

                  <div className="
                    w-28
                    p-3
                    border rounded-xl
                    border-purple-500/20
                    bg-purple-500/5
                    flex flex-col items-center justify-center
                  ">
                    <h3 className="font-semibold text-xl text-purple-400 mb-1">100%</h3>
                      <p className="text-sm text-neutral-300">Quality</p>
                      <p className="text-sm text-neutral-300">Driven</p>
                  </div>
                </div>
            </div>

            {/* Right Side */}
            <div className="
              lg:w-3/5
              p-8 lg:p-10
              flex flex-col gap-4
            ">
              {/* About Image */}
              <Image
                src="/About_Img.png"
                alt="Psychologist Website Preview"
                width={1200}
                height={800}
                className="w-full object-cover"
              />

              {/*Under Image Border Tech-Stack */}
              <div className="
                p-8 lg:p-10
                border rounded-xl p-3 border-purple-500/20
                bg-purple-500/[0.02]
                flex flex-col 
              ">

                
                <h3 className="text-sm text-purple-400 tracking-wide mb-8">TECHNOLOGIES I WORK WITH</h3>
                

                <div className="
                  flex
                  justify-between
                  items-center
                  flex-wrap
                  gap-6
                  "
                >

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <SiReact className="text-cyan-400" size={34} aria-hidden="true"/>
                    <span className="text-sm text-neutral-300">React</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <SiDjango className="text-green-400" size={34} aria-hidden="true"/>
                    <span className="text-sm text-neutral-300">Django</span>
                  </div>

                  <div className="flex flex-col items-center  gap-2 min-w-[70px]">
                    <SiTailwindcss className="text-sky-400" size={34} aria-hidden="true"/>
                    <span className="text-sm text-neutral-300">Tailwind</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <SiJavascript className="text-yellow-400" size={34} aria-hidden="true"/>
                    <span className="text-sm text-neutral-300">JavaScript</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <Database className="text-purple-400" size={34} aria-hidden="true"/>
                    <span className="text-sm text-neutral-300">REST APIs</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

)}