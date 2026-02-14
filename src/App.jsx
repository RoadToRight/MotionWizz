import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Faqs from './components/Faqs'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ThreeHero from './components/ThreeHero'

function App() {

  return (
    <>
      <Navbar />
      <ThreeHero />
      <Hero />
      <Portfolio />
      <Testimonial />
      <Faqs />
      <Contact />
      <Footer />
    </>
  )
}

export default App
