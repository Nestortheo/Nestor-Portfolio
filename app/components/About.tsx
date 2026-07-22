import {
  SiReact,
  SiDjango,
  SiTailwindcss,
  SiNextdotjs,
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
                flex flex-col justify-center gap-8
                
                ">
              <h2 className="text-sm text-purple-400">ABOUT ME</h2>
              <div>
                <p className="text-xl md:text-2xl leading-tight">I build responsive websites that help businesses establish a</p>
                <p className="text-xl md:text-2xl text-purple-400 ">professional online presence.</p>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                  I'm a Full Stack Web Developer with a Bachelor's degree from the
                  University of Macedonia. I build responsive websites and web
                  applications using React, Next.js and Django, developing both
                  frontend interfaces and backend systems.
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

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">
                    Frontend Development
                  </h3>

                  <p className="text-gray-400">
                    I build responsive frontend interfaces using React and Next.js for
                    fast, accessible and user-friendly websites.
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

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold">
                       Backend Development
                    </h3>

                    <p className="text-gray-400">
                      I build backend systems using Django, developing REST APIs,
                      authentication and database-driven functionality.
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

                  <div className="flex flex-col gap-2">
                    <h2 className="font-semibold">
                      Full Stack Applications
                    </h2>

                    <p className="text-gray-400">
                       I combine frontend and backend technologies to build complete web
                      applications, from responsive interfaces to database-driven systems.
                    </p>
                  </div>

                </div>

                {/* Border with Stats */}
                {/*
                <div className="flex gap-6 mt-2">
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
                  */}
            </div>

              

            {/* Right Side */}
            <div className="
              lg:w-3/5
              p-8 lg:p-10
              flex flex-col gap-4 mt-16
            ">
              {/* About Image */}
              <Image
                src="/About_Img.png"
                alt="Psychologist Website Preview"
                width={1200}
                height={800}
                className="w-full object-cover mb-4"
              />

              {/*Under Image Border Tech-Stack */}
              <div className="
                p-8 lg:p-10
                border rounded-xl p-3 border-purple-500/20
                bg-purple-500/[0.02]
                flex flex-col 
              ">

                
                <h3 className="text-sm text-purple-400 tracking-wide mb-8">TECH STACK</h3>
                

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
                    <SiNextdotjs className="text-yellow-400" size={34} aria-hidden="true"/>
                    <span className="text-sm text-neutral-300">Next.js</span>
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