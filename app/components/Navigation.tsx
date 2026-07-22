"use client"

import { useState } from "react"

export default function Header(){

    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu(){
        setMenuOpen(false);
    }

    return(
        <div>
            <header className="
                    fixed top-0 left-0 right-0 z-50 
                    w-full 
                    bg-[#0f0f19]/90
                    backdrop-blur-xl
                    border-b border-purple-500/10
                    shadow-[0_0_30px_rgba(168,85,247,0.04)]
                    ">
                <div className="max-w-6xl mx-auto flex items-center justify-between p-5 ">
                    
                    {/*Brand*/}
                    <div>
                        <a href="/" className="flex items-center">
                            <span className="flex flex-col items-center">
                                <h2 className="text-xl md:text-2xl font-medium tracking-tight">Νέστωρ Θεοδωρίδης</h2>
                                <p className="text-sm md:text-md text-purple-400 tracking-tight">Web-Developer</p>
                            </span>
                        </a>
                    </div>

                    {/* Desktop links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a 
                            href="/#projects "
                            className="
                                hover:text-purple-400
                                transition-colors
                                duration-200
                            "
                        >
                            <span>
                                <h2>Projects</h2>
                            </span>
                        </a>
                         <a 
                            href="/#about "
                            className="
                                hover:text-purple-400
                                transition-colors
                                duration-200
                            "
                        >
                            <span>
                                <h2>About</h2>
                            </span>
                        </a>
                         <a 
                            href="/#contact"
                            className="
                                hover:text-purple-400
                                transition-colors
                                duration-200
                            "
                        >
                            <span>
                                <h2>Contact</h2>
                            </span>
                        </a>
                    </nav>
                    { /* Mobile Burger Button */}
                    <button
                        className="md:hidden text-2xl text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

                {/*Mobile Dropdown Bar Menu */}
                {menuOpen && (
                    <div className="w-full md:hidden flex flex-col gap-2 p-4 bg-[#0f0f19]/90 border-t border-purple-500/20">
                        <a 
                          href="/#projects" 
                          className="
                            px-3 py-3
                            rounded-lg

                            hover:text-purple-400
                            hover:bg-purple-500/10

                            transition-colors
                        "
                          onClick={closeMenu}
                        >
                            <h2>Projects</h2>
                        </a>
                        <a 
                          href="/#about"
                           className="
                            px-3 py-3
                            rounded-lg

                            hover:text-purple-400
                            hover:bg-purple-500/10

                            transition-colors
                        "
                          onClick={closeMenu}
                        >
                            <h2>About</h2>
                        </a>
                        <a 
                          href="/#contact"
                           className="
                            px-3 py-3
                            rounded-lg

                            hover:text-purple-400
                            hover:bg-purple-500/10

                            transition-colors
                        "
                          onClick={closeMenu}
                          >
                            <h2>Contact</h2>
                        </a>
                    </div>
                )}
                
            </header>
        </div>
    )
}