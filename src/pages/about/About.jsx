import React from 'react'

const About = () => {
  return (
    <>
    <section id="about" className="w-[90%] mx-auto px-6 py-12">
        <div  className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <h3 className="text-4xl font-bold mb-3  bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
                bg-clip-text text-transparent inline-block">About Me</h3>
            <p className="text-slate-300 text-md">I specialize in implementing end-to-end automation and IIoT solutions to drive operational efficiency and digital transformation across industries. My core expertise includes:

PLC Programming (Siemens & Delta)
Kepware Integration for real-time data connectivity
SQL Database Development for industrial data logging and analytics
OEE Production Monitoring Systems for performance tracking
Preventive & Predictive Maintenance planning and execution
Energy Meter Integration for utility monitoring
Strong alignment with Industry 4.0 standards

With hands-on experience across various manufacturing environments, I am passionate about delivering data-driven insights and automation strategies that enable smarter, more connected operations. </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <div><strong>Skills:</strong> Project Lead, PLC Programing, Node-red, Basic MongoDB, Kepware, OEE, Energy meter, PM1 & PM2, Ware House Managment System</div>
              <div><strong>Interests:</strong> Project Lead, PLC Programing with IIOT,Under standing project and Execution timelly</div>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="space-y-4">
              <div className="bg-slate-900/30 border border-gray-600 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">Timeline</h4>
                  <div className="text-xs text-slate-400">2019 - 2025</div>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>2021 - Internship: Python + ML (Softpro India)</li>
                  <li>2023 - Built Consensus Mechanism Selector (College Project)</li>
                  <li>2024 - Internship: Frontend & React (Edureka)</li>
                  <li>2025 - Actively seeking Full-Stack Developer opportunities</li>
                </ul>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl ring-1 ring-gray-600">
                  <h5 className="font-semibold mb-2">Certificates</h5>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>Python with Machine Learning – Softpro (A+)</li>
                    <li>Web Development Certification</li>
                  </ul>
                </div>
                {/* <div className="p-4 rounded-xl ring-1 ring-slate-700/30">Open-source contributions</div> */}
              </div>
            </div>
          </div>
        </div>

        


{/* ================= LEFT : EDUCATION ================= */}
   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
  <h4 className="font-semibold mb-10 text-3xl bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
  bg-clip-text text-transparent inline-block">
    Education
  </h4>

  <div className="relative">
    {/* LINE */}
    <div className="absolute left-4 top-0 h-full w-px bg-slate-600"></div>

    {/* B.TECH */}
    <div className="relative pl-16 mb-10" data-aos="fade-up">
      <span className="absolute left-0 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
      <div className="bg-slate-900/40 border border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2019 – 2023</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">
          B.Tech – Electrical Engineering 
        </p>
        <p className="text-xs sm:text-lg text-slate-400">
          UNSIET,VBSPU, Jaunpur Uttar pradesh
        </p>
      </div>
    </div>

    {/* INTERMEDIATE */}
    <div className="relative pl-16 mb-10" data-aos="fade-up">
      <span className="absolute left-0 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
      <div className="bg-slate-900/40 border border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2017 – 2019</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">
          Intermediate (12th)
        </p>
        <p className="text-xs sm:text-lg text-slate-400">
          Intermediate School Mirzapur, UP.
        </p>
      </div>
    </div>

    {/* HIGH SCHOOL */}
    <div className="relative pl-16" data-aos="fade-up">
      <span className="absolute left-0 top-4 w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900"></span>
      <div className="bg-slate-900/40 border border-gray-300 hover:border-amber-600 rounded-xl p-4">
        <p className="text-xs text-slate-400">2015 – 2017</p>
        <p className="text-sm sm:text-xl font-semibold text-slate-200">
          High School (10th)
        </p>
        <p className="text-xs sm:text-lg text-slate-400">
          High School Mirzapur, UP.
        </p>
      </div>
    </div>
  </div>
</div>


{/* ------------experience----------- */}
 <div>
      <h4 className="font-semibold mb-10 text-3xl bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff]  
      bg-clip-text text-transparent inline-block">
        Experience
      </h4>

      <div className="relative">
        {/* LINE */}
        <div className="absolute left-4 top-0 h-full w-px bg-slate-600"></div>

        {/* ITEM */}
        <div className="relative pl-16">
          <span className="absolute left-0 top-4 w-8 h-8 bg-emerald-600 rounded-full border-4 border-slate-900"></span>
          <div className="bg-slate-900/40 border border-gray-300 hover:border-amber-600 rounded-xl p-4">
            <p className="text-xs text-slate-400">2024 – Present</p>
            <p className="text-lg font-semibold text-slate-200">
              Industrial Automation & IIoT Engineer
            </p>
            <p className="text-sm text-slate-400 mb-2">
              Smart Fcatory Worx Pvt. Ltd. (Clearpack Group)
            </p>
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              <li>PLC Programming (Siemens & Delta)</li>
              <li>Kepware & SQL integration</li>
              <li>OEE production monitoring systems</li>
              <li>Preventive & Predictive Maintenance</li>
              <li>Energy meter integration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</div>


      </section>
    </>
  )
}

export default About