"use client";
import Form from "./Form";
import { useState } from "react";
import { sendContact } from "@/lib/clientApi/contact-api";

import {

  Mail,
  MapPin,
  Clock3,
  CheckCircle,
  AlertCircle,
} from "lucide-react"

export default function Contact(){

    const[message, setMessage] = useState<any>(null);
    const[submitting, setSubmitting] = useState<any>(false);
    
    async function handleSubmit(payload:any){
        console.log("HANDLE SUBMIT FIRED");
        console.log(payload);

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

    return(
        <section id="contact" className="scroll-mt-24">
          <div 
            className="
                p-2 md:p-10
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
    )
}