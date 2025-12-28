import React from 'react'
import ProjectChild from './ProjectChild'
import projects from '../../api/ProjectData.json'
const Portfolio = () => {
 
  return (
    <>
    {/* PROJECTS */}
        <section id="projects" className="w-[90%] mx-auto px-6 py-12">
            <h3  className="text-4xl font-bold mb-6  pb-2.5 bg-linear-to-r from-[#163e9a] via-[#3a6fe0] to-[#5fa3ff] 
bg-clip-text text-transparent inline-block">Selected Projects</h3>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p, i) => (
                <ProjectChild  key={p.id} data={p} />
              ))}
            </div>
          </section>
    </>
  )
}

export default Portfolio