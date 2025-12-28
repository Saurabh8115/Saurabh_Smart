import React from 'react'
import { motion } from 'framer-motion';
import Header from '../header/Header'
import About from '../about/About'
import Skill from '../skill/Skill'
import Portfolio from "../project/Portfolio"
import Contact from '../contact/Contact'
import Footer from '../footer/Footer'
import HeroSection from '../hero/HeroSection'
const Home = () => {
  

  return (
    <>
    
     <div className="min-h-screen bg-gradient-to-b from-[#071030] via-[#071a3a] to-[#021026] text-slate-100 antialiased">
      <Header />  
      <HeroSection />
      <About />
      <Skill />
      <Portfolio/>
      <Contact/>
      <Footer/>
      
    </div>
    </>
  )
}

export default Home