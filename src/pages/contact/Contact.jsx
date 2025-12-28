import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
  import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const send=()=>{
    alert("response submitted")
  }
  //  const notify = () => toast("response submitted");
  return (
    <>
     {/* CONTACT */}
      <section id="contact" className="w-[90%] mx-auto px-6 py-12">
        <h3 className="text-4xl font-bold mb-10  bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
                bg-clip-text text-transparent inline-block">Contact Us</h3>
        <div  className="bg-slate-900/30 border border-slate-700/30 rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8">
        
          <div data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-2xl font-bold">Get in touch</h3>
            <p className="text-slate-300 mt-2 text-sm">Want to work together? Send me a message — I reply quickly.</p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div><strong>Email:</strong> <a href="mailto:saurabhmaurya8115@gmail.com">saurabhmaurya8115@gmail.com</a></div>
              <div><strong>LinkedIn: </strong> <a href="https://www.linkedin.com/in/saurabh-maurya-517a98251/" target='_blank'>/saurabh-maurya-517a98251</a></div>
              <div><strong>Github: </strong ><a href="https://github.com/Saurabh8115" target='_blank' className='cursor-pointer'> /in/saurabh8115</a></div>
            </div>
            <div className='flex text-3xl gap-3 pt-7 text-slate-400'>
              <a href="https://github.com/Saurabh8115" target='_blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/saurabh-maurya-517a98251/" target='_blank'><FaLinkedin /></a>
              <a href="mailto:saurabhmaurya8115@gmail.com"><SiGmail /></a>
            </div>
          </div>

          <form className="space-y-4" onSubmit={send} data-aos="fade-left" data-aos-delay="200" >
            <input className="w-full rounded-lg p-3 bg-slate-800/50 ring-1 ring-slate-700 placeholder:text-slate-400" required placeholder="Your name" />
            <input className="w-full rounded-lg p-3 bg-slate-800/50 ring-1 ring-slate-700 placeholder:text-slate-400" required placeholder="Email" />
            <textarea className="w-full rounded-lg p-3 bg-slate-800/50 ring-1 ring-slate-700 placeholder:text-slate-400 h-28" required placeholder="Message" />
            
              <button className="px-5 py-3 rounded-lg bg-linear-to-r from-[#0b3d91] to-[#3a6fe0] " >Send Message</button>
             
            
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact