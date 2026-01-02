import React from 'react'

const Footer = () => {
  return (
    <>
         <footer className="border-t border-slate-800/50 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-400 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Saurabh Maurya . All rights reserved . </div>
          <div className="flex gap-4">
            {/* <a href='https://github.com/Ananya9794' target="_blank" className="hover:text-white">GitHub</a> */}
            <a href='https://www.linkedin.com/in/saurabh-maurya-517a98251/' target='_blank' className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer