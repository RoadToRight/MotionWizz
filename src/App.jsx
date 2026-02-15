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
import LogoSlider from './components/LogoSlider'


function App() {

  return (
    <>
      <Navbar />
      <ThreeHero />
      <LogoSlider />
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
