import { useEffect } from 'react'
import './App.css'
import Homeontainer from './container/home/Homeontainer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <>
      <Homeontainer />
    </>
  )
}

export default App
