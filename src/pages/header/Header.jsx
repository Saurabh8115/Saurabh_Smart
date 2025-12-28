import { useState } from "react";

const Header = () => {
   const [open, setOpen] = useState(false); 

  //  download-resume-----
   function downloadResume(){
      const link =document.createElement('a');
      link.href="/ANANYA _SETHI_resume.pdf";
      link.download="Ananya+Sethi_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link)
   }

  return (
    <>
    <nav className="sticky top-0 z-50 bg-[#071030] backdrop-blur">
    <div className="w-[90%] mx-auto px-6 py-6 flex items-center justify-between">
        <div className=" flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-linear-to-br from-[#0b3d91] to-[#3a6fe0] flex items-center justify-center shadow-lg">
            <span className="font-bold">SM</span>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Saurabh Maurya</h1>
            <p className="text-xs text-slate-300 -mt-1">Automation & IIOT Engineer </p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 items-center text-lg text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#about" className="hover:text-white">Experence</a>
            <a href="#skill" className="hover:text-white">Skill</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>

          <button onClick={downloadResume} className="px-4 py-2 bg-linear-to-r from-[#0b3d91] to-[#3a6fe0] rounded-lg shadow-md">Resume</button>



          {/* <a href="/Saurabh_Maurya_resume.pdf" target="_blank" className="px-4 py-2 bg-gradient-to-r from-[#0b3d91] to-[#3a6fe0] rounded-lg shadow-md">Resume</a> */}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 ring-1 ring-slate-700 rounded-md">☰</button>

        {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-blue-950 px-6 py-4 space-y-4 text-slate-300  h-full">
          <div className="grid">
            <div ><a href="#about" onClick={() => setOpen(false)}>About</a></div>
            <div><a href="#Experence" onClick={() => setOpen(false)}>Experence</a></div>
          <div ><a href="#skill" onClick={() => setOpen(false)}>Skill</a></div>
          <div><a href="#projects" onClick={() => setOpen(false)}>Projects</a></div>
          <div><a href="#contact" onClick={() => setOpen(false)}>Contact</a></div>
          <div>
            <a href="/resume.pdf" target="_blank" className="block text-white bg-linear-to-r from-[#0b3d91] to-[#3a6fe0] px-4 py-2 rounded-lg text-center" > Resume</a>
          </div>

          </div>
          
        </div>
      )}
        

    </div>
    </nav>
  


    


    </>
  )
}

export default Header



// import { useState } from "react";

// const Header = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="w-full fixed top-0 z-50 bg-[#020617]/80 backdrop-blur">
//       <div className="w-[90%] mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0b3d91] to-[#3a6fe0] flex items-center justify-center shadow-lg text-white font-bold">
//             AS
//           </div>
//           <div>
//             <h1 className="font-semibold">Ananya Sethi</h1>
//             <p className="text-xs text-slate-400 -mt-1">
//               Full-Stack • React • MERN
//             </p>
//           </div>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-6 items-center text-slate-300 lg:block">
//           <a href="#about" className="hover:text-white">About</a>
//           <a href="#skill" className="hover:text-white">Skill</a>
//           <a href="#projects" className="hover:text-white">Projects</a>
//           <a href="#contact" className="hover:text-white">Contact</a>

//           <a
//             href="/resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 bg-gradient-to-r from-[#0b3d91] to-[#3a6fe0] rounded-lg shadow-md text-white"
//           >
//             Resume
//           </a>
//         </div>

//         {/* Mobile Button */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden p-2 ring-1 ring-slate-700 rounded-md text-xl"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-[#020617] px-6 py-4 space-y-4 text-slate-300">
//           <a href="#about" onClick={() => setOpen(false)}>About</a>
//           <a href="#skill" onClick={() => setOpen(false)}>Skill</a>
//           <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
//           <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
//           <a
//             href="/resume.pdf"
//             target="_blank"
//             className="block text-white bg-gradient-to-r from-[#0b3d91] to-[#3a6fe0] px-4 py-2 rounded-lg text-center"
//           >
//             Resume
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Header;
