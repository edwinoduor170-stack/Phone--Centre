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
import Contact from './components/sections/Contact';
import Footer from './components/layout/footer';
import Products from './components/common/Card';
import Signup from './components/sections/Signup';
import Login from './components/sections/Login';
import {BrowserRouter,Routes,Route} from "react-router-dom"







function App() {
  

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <>
        
          <Header/>
      <Hero />
      <SectionWrapper className="absolute top-160 left-0 right-0 mx-auto w-11/12 md:w-3/4 md:absolute md:top-165 md:left-0 md:right-0 md:mx-auto">
        <Stats  />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <Expertise />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <Services />
      </SectionWrapper>
      <SectionWrapper className="bg-gray-100">
        <About />
      </SectionWrapper>

      <SectionWrapper className="bg-gray-100">
        <Products />
      </SectionWrapper>

      <SectionWrapper className="bg-gray-100">
        <Testimonial />
      </SectionWrapper>
      <SectionWrapper className="bg-violet-500">
        <Contact />
      </SectionWrapper>
      <SectionWrapper className="bg-violet-700">
        <Footer />
      </SectionWrapper>
        </>} />

        <Route path = "/signup" element={<Signup />}/>
        <Route path = "/login" element={<Login />}/>
      </Routes>


    </BrowserRouter>

      
    </>
  )
}

export default App
