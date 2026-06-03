"use client";

import Hero from "./components/hero";
import Projects from "./components/Projects";
import About from "./components/about";
import Contact from "./components/contact";

export default function Home() {

 

  return (
    <div>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">   

        {/*Hero Section*/}
        <Hero />
     
        {/*Project Section*/}
        <Projects />

        {/*About Section*/}
        <About />

        {/*Contact Section */}
        <Contact />
        
      </div>
    </div>
  );
}
