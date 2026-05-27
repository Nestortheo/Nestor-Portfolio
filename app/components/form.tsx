"use client"
import {
    Send,
} from "lucide-react"

import { useState } from "react"

const EMPTY_FORM = {
    full_name:"",
    email_address:"",
    subject:"",
    message:""
}

type FormProps = {
    onSubmit:(payload:any) => Promise<void>
    submitting:boolean
}

export default function Form({onSubmit, submitting}:FormProps){

    const[form, setForm] = useState(EMPTY_FORM)

    function handleChange(e:any){
        const{name,value} = e.target
        setForm((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    async function handleSubmit(e:any){
        e.preventDefault()
        
        await onSubmit(form);
        setForm(EMPTY_FORM)

    }

    return(
        <div>
            <form className="grid gap-4" onSubmit={handleSubmit}>
                {/* Full Name + Email */}
                <div className="grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-4"
                >

                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="full_name" className="text-sm text-neutral-300">
                            Full Name
                        </label>
                        <input 
                            id="full_name"
                            name="full_name"
                            value={form.full_name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                            className="
                                 h-[50px]

                                 rounded-xl

                                 border
                                 border-white/10

                                 bg-purple-900/5

                                 px-4

                                 text-white
                                 placeholder:text-neutral-500

                                 transition

                                 focus:outline-none
                                 focus:border-purple-500/50
                                 focus:bg-neutral-900
                            "
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">

                        <label
                            htmlFor="email"
                            className="text-sm text-neutral-300"
                        >
                            Email Address
                        </label>

                        <input
                            id="email_address"
                            name="email_address"
                            type="email"
                            value={form.email_address}
                            onChange={handleChange}
                            placeholder="your.email@gmail.com"
                            required
                            className="
                            h-[50px]

                            rounded-xl

                            border
                            border-white/10

                            bg-purple-900/5

                            px-4

                            text-white
                            placeholder:text-neutral-500

                            transition

                            focus:outline-none
                            focus:border-purple-500/50
                            focus:bg-neutral-900
                            "
                        />

                    </div>

                    
                </div>

                {/*Subject */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="text-sm text-neutral-300">
                            Subject
                    </label>
                    <input 
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What is this about?"
                        required
                        className="
                            h-[50px]

                            rounded-xl

                            border border-white/10
                            bg-purple-900/5

                            px-4

                            text-white
                            placeholder:text-neutral-500

                            transition

                            focus:outline-none
                            focus:border-purple-500/50
                            focus:bg-neutral-900
                        "
                    />
                </div>

                {/*Message*/}
                <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm text-neutral-300">
                        Message
                    </label>
                    <textarea 
                        id="messsage"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        required
                        className="
                            h-[200px]

                            rounded-xl

                            border border-white/10
                            bg-purple-900/5

                            px-4 py-2

                            text-white
                            placeholder:text-neutral-500

                            transition

                            focus:outline-none
                            focus:border-purple-500/50
                            focus:bg-neutral-900

                            resize-none
                        "
                    />
                </div>

                {/* Button */}
                <div>
                    <button 
                        type="submit"
                        disabled={submitting}
                        className="
                            flex items-center justify-center gap-3
                            w-full
                            py-4
                            rounded-xl

                            bg-purple-600

                            font-medium
                            text-white

                            transition-all

                            hover:bg-purple-500
                            hover:scale-[1.02]

                            shadow-[0_0_20px_rgba(168,85,247,0.25)]
                            hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]

                            active:scale-[0.98]
                            "
                    >
                           <Send size={18}/>
                           {submitting ? "Sending Message..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    )
}