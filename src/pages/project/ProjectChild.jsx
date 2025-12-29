import React from 'react'

const ProjectChild = ({ data }) => {
  return (
    <>
      <div className="bg-slate-900/40 border  border-gray-600 hover:border-amber-600 rounded-xl p-5 backdrop-blur-md" data-aos="fade-in" data-aos-delay="200">
        
        <div className="flex items-start justify-between">
          <h4 className="font-semibold text-lg">{data.title}</h4>
          <div className="text-sm text-slate-400">#{data.id}</div>
        </div>

        <p className="text-slate-300 mt-3 text-sm">{data.company}</p>
        <p className="text-slate-300 mt-3 text-sm">{data.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {data.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded-md ring-1 ring-slate-700">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a href={data.live}
          target="_blank" className="text-sm px-3 py-2 rounded-md bg-gradient-to-r from-[#163e9a] to-[#3a6fe0] shadow-sm">
            Live
          </a>
          <a href={data.code}
          target="_blank" className="text-sm px-3 py-2 rounded-md ring-1 ring-slate-700">
            Code
          </a>
        </div>

      </div>
    </>
  )
}

export default ProjectChild
