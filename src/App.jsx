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

function App() {

  return (
    <>
      <Navbar />
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
