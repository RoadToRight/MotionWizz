import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ThreeHero from './components/ThreeHero'
import LogoSlider from './components/LogoSlider'
const Footer = lazy(() => import("./components/Footer"))
const Portfolio = lazy(() => import("./components/Portfolio"))
const Contact = lazy(() => import("./components/Contact"))
const Testimonial = lazy(() => import("./components/Testimonial"))
const Faqs = lazy(() => import("./components/Faqs"))
const Hero = lazy(() => import("./components/Hero"))

function App() {

  return (
    <>
      <Navbar />
      <ThreeHero />
      <LogoSlider />

      <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>}>
        <Hero />
        <Portfolio />
        <Testimonial />
        <Faqs />
        <Contact />
        <Footer />
      </Suspense>
    </>
  )
}

export default App
