"use client";
import { useState } from "react";
import Image from "next/image";
import Form from "./components/form";
import ProjectCard from "./components/ProjectCard";

import {
  Target,
  User,
  Rocket,
  Mail,
  MapPin,
  Clock3,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

import {
  SiReact,
  SiDjango,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si"

import { Database } from "lucide-react"

import { sendContact } from "@/lib/clientApi/contact-api";

export default function Home() {

  const[message, setMessage] = useState<any>(null);
  const[submitting, setSubmitting] = useState<any>(false);

  async function handleSubmit(payload:any){
    setMessage(null);
    setSubmitting(true);

    try{
      await sendContact(payload);
      console.log("Testing Payload ->",payload)
      setMessage({msg:"Message sent.", type:"success"})
    }
    catch(err:unknown){
      console.log("Error is ->",err);

      let errorMessage = "Something went wrong";
      if(err instanceof Error){
        errorMessage = err.message
      }
      setMessage({ msg: errorMessage, type: "error" });
    }
    finally{
      setSubmitting(false)
    }
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">   

        <section
          id="hero"
          className="
            min-h-[85vh]
            flex flex-col lg:flex-row
            items-start
            gap-4
            pt-24
          "
        >
          {/* Left Side */}
          <div className="w-full lg:w-2/5 flex flex-col gap-6">

             {/* Small Badge */} 
            <div className="w-fit rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2">
              <p className="text-sm text-purple-300">
                Frontend / Full Stack Developer
              </p>
            </div>
            
            {/* Main Headeing */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Νέστωρ
              </h1>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-purple-400">
                Θεοδωρίδης
              </h1>
            </div>

            {/* Description */}
            <p className="max-w-sm text-lg text-gray-400 leading-relaxed">
              I build modern and professional web experiences for businesses and professionals
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 pt-2">
                <a
                href="/#projects"
                className="
                  rounded-xl bg-purple-500 px-6 py-3
                  font-medium text-white transition
                  hover:bg-purple-400
                "
                >
                  View Projects
                </a>

              <a
                href="/#contact"
                className="
                  rounded-xl border border-white/10
                  px-6 py-3 font-medium text-white
                  transition hover:border-white/30
                "
              >
                Contact Me
              </a>
            </div>

          </div>
          
          {/*Right Side */}
          <div className="w-full lg:w-3/5 flex justify-center">
              <div
              className="
                w-full max-w-4xl
                lg:scale-105
                rounded-xl
                overflow-hidden
                border border-neutral-700
                bg-neutral-600 backdrop-blur-md
                shadow-2xl
              "
            >

              {/* Fake Browser Top Bar */}
              <div
                className="
                  flex items-center gap-2
                  border-b border-white/10
                  bg-neutral-800
                  px-4 py-5
                "
              >
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>

              {/* Website Screenshot */}
              <Image
                src="/hero.png"
                alt="Psychologist Website Preview"
                width={1200}
                height={800}
                className="w-full object-cover"
              />

            </div>
          </div>
        </section>
     
        <section
          id="projects"
          className="
            scroll-mt-24
            py-24
          "
        >
          <div className="flex flex-col gap-12">

            {/* Section Header */}
            <div className="flex flex-col gap-4">

              <h2 className="text-4xl font-bold text-purple-400">
                My Projects
              </h2>

              <p
                className="
                  text-gray-400
                  max-w-2xl
                  leading-relaxed
                "
              >
                A selection of projects I’ve built focusing on
                modern UI, responsive design and professional
                web experiences.
              </p>

            </div>

          <ProjectCard
                title="Quartet Website"
                description="
                Elegant concert presentation platform
                with backend event management.
                "
                image="/quartet-hero.png"
                tags={[
                  "React",
                  "Django",
                  "API"
                ]}
                demoLink="https://..."
                githubLink="https://.."
              />
            <ProjectCard 
                title="Psychologist WebSite"
                description="
                  Modern and elegant website for a psychologist practice
                  based in Thessaloniki. Focused on clarity trust and professional
                  presentation
                "
                image="/hero.png"
                tags={[
                  "React",
                  "Django",
                  "Responsive"
                ]}
                demoLink="https://..."
                githubLink="https://.."
            />

            </div>
        </section>

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
                p-8 lg:p-10
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
                      p-3 
                      border rounded-xl 
                      border-purple-500/20
                      bg-purple-500/5
                      flex flex-col items-center
                  ">
                      <h3 className="font-semibold text-xl text-purple-400 mb-1">2+</h3>
                      <p className="text-sm text-neutral-300">Real Projects</p>
                      <p className="text-sm text-neutral-300">Delivered</p>
                  </div>

                  <div className="
                    w-28
                    p-3
                    border rounded-xl
                    border-purple-500/20
                    bg-purple-500/5
                    flex flex-col items-center
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
                    flex flex-col items-center
                  ">
                    <h3 className="font-semibold text-xl text-purple-400 mb-1">100%</h3>
                      <p className="text-sm text-neutral-300">Dedication to</p>
                      <p className="text-sm text-neutral-300">Quality</p>
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
                flex flex-col gap-6
              ">

                
                <h3 className="text-sm text-purple-400 tracking-wide ">TECHNOLOGIES I WORK WITH</h3>
                

                <div className="
                  flex
                  justify-between
                  items-center
                  flex-wrap
                  gap-6 "
                >

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <SiReact className="text-cyan-400" size={34}/>
                    <span className="text-sm text-neutral-300">React</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <SiDjango className="text-green-400" size={34}/>
                    <span className="text-sm text-neutral-300">Django</span>
                  </div>

                  <div className="flex flex-col items-center  gap-2 min-w-[70px]">
                    <SiTailwindcss className="text-sky-400" size={34}/>
                    <span className="text-sm text-neutral-300">Tailwind</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <SiJavascript className="text-yellow-400" size={34} />
                    <span className="text-sm text-neutral-300">JavaScript</span>
                  </div>

                  <div className="flex flex-col items-center gap-2 min-w-[70px]">
                    <Database className="text-purple-400" size={34} />
                    <span className="text-sm text-neutral-300">REST APIs</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div 
            className="
                p-5
                border border-white/5
                rounded-3xl
                bg-purple-900/5
                flex flex-col lg:flex-row
            ">
            {/* LEFT SIDE */}
            <div 
              className="
                lg:w-2/5
                flex flex-col gap-4
                p-8 lg:p-10
            ">
                <h3 className="text-sm text-purple-400">CONTACT ME</h3>
                <div>
                  <p className="text-2xl ">Let's build something</p>
                  <p className="text-2xl text-purple-400">together.</p>
                </div>
                <p className="text-sm text-gray-400">
                  Have a project idea or professional inquiry?
                   I'd love to hear from you.
               </p>

               {/*ICONS */}
               <div className="flex flex-col gap-6">

                {/* Mail Icon + Text*/}
                <div className="flex items-center gap-4">

                  <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20 ">
                    <Mail className="text-purple-400" size={28}/>
                  </div>

                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-gray-400">nestorastheo@gmail.com</p>
                  </div>

                </div>

                {/* Location Icon */}
                <div className="flex items-center gap-4">
                  
                  <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <MapPin className="text-purple-400" size={28}/>
                  </div>

                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-gray-400">Greece - Available Remote</p>
                  </div>

                </div>

                {/*Clock-Response Time */}
                <div className="flex items-center gap-4">

                  <div className="p-3 rounded-full bg-purple-500/10 border border-purple-500/20">
                    <Clock3  className="text-purple-400" size={28}/>
                  </div>

                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="text-sm text-gray-400">Usually replies within 24-48h</p>
                  </div>

                </div>

               </div>
            </div>
            
            
            <div className="border border-purple-400/20"/>

            {/* RIGHT SIDE */}
            <div 
              className="
                lg:w-3/5
                p-8 lg:p-10 
              ">
                <Form  
                  onSubmit={handleSubmit}
                  submitting = {submitting}
                />
                {message && (
                <div 
                  className={`
                    mt-4 px-4 py-2 rounded-lg text-sm flex items-center gap-2
                                ${message.type === "success" 
                                  ?"text-emerald-300"
                                  :"text-red-400"
                                }
                              `}>
                  {message.type === "success" ? (
                    <CheckCircle size={16} />
                  ) : (
                    <AlertCircle size={16} />
                  )}
                  {message.msg}
                </div>
              )}
                
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
