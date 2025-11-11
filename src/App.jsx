import { FaMicrophoneAltSlash } from 'react-icons/fa';
import './App.css'
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Stats from './components/sections/stats';
import SectionWrapper from './components/common/Wrapper';
import Expertise from './components/sections/Expertise';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Testimonial from './components/sections/testimonials';
import Contact from './components/sections/contact';
import Footer from './components/layout/footer';
import Products from './components/common/Card';







function App() {
  

  return (
    <>
      <Header/>
      <Hero />
      <SectionWrapper className="absolute top-160 left-0 right-0 mx-auto w-11/12 md:w-3/4 md:absolute md:top-165 md:left-0 md:right-0 md:mx-auto">
        <Stats  />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <Expertise />
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>

      <SectionWrapper>
        <Products />
      </SectionWrapper>

      <SectionWrapper>
        <Testimonial />
      </SectionWrapper>
      <SectionWrapper className="bg-violet-500">
        <Contact />
      </SectionWrapper>
      <SectionWrapper className="bg-violet-950">
        <Footer />
      </SectionWrapper>
    </>
  )
}

export default App
