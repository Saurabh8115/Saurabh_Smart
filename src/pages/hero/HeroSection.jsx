import { useEffect, useState } from 'react'

const HeroSection = () => {
    const roles = [
  "Sr.Automation & IIOT Engineer",
  "Project Lead",
  "Techanical Expert of IIOT Project"
]

const [currentRole, setCurrentRole] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length)
  }, 2000) // 2 sec me text change

  return () => clearInterval(interval)
}, [])

  return (
    <>
    {/* hro section */}
    <header className="w-[90%] mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
          <p className="inline-block px-3 py-1 rounded-full bg-slate-800/30 text-sky-300 text-xl">Hi! I'm Saurabh Maurya</p>
          <h2 className="text-4xl md:text-4xl font-extrabold leading-tight">
           <span className="bg-linear-to-r from-[#5fa3ff] to-[#163e9a] bg-clip-text text-transparent transition-all duration-500">
    {roles[currentRole]}</span>
            <span className="block text-slate-300 text-xl mt-2 font-medium">Industrial Automation & IIOT Engineer ||Siemens & Delta Programming || Kepware || SQL || Industries 4.0 || OEE Production Monitoring system || Preventive Maintenance || Predictive Maintenance || Energy Meter.</span>
          </h2>

          <div className="flex gap-4 items-center">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-linear-to-r from-[#0b3d91] to-[#3a6fe0] shadow-lg font-medium">See Projects</a>
            <a href="#contact" className="px-4 py-3 rounded-lg ring-1 ring-slate-600 text-sm">Hire me</a>
          </div>

          <div className="mt-6 flex gap-4 text-xs text-slate-400">
            <div className="space-y-1">
              <div className="text-slate-200 font-semibold">Location</div>
              <div>India</div>
            </div>
            <div className="space-y-1">
              <div className="text-slate-200 font-semibold">Availability</div>
              <div>Open to work</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center md:justify-end " >
          <div className=" group w-full sm:w-75 h-75 md:w-90 md:h-90 rounded-2xl bg-linear-to-br from-[#071a3a]/60 to-[#0b3d91]/40 backdrop-blur-sm border border-slate-700/40 flex items-center justify-center shadow-2xl ">
          <div className="w-56 h-56 rounded-full overflow-hidden">
            <img src="/Saurabh_Smart.jpeg" alt="profile" className="w-56 h-56 rounded-full object-cover ring-4 ring-transparent/10 transition-transform duration-700 ease-in-out group-hover:scale-110"  data-aos="zoom-in" data-aos-delay="200"/>
          </div>
            
          </div>
        </div>
      </header>
    </>
  )
}

export default HeroSection