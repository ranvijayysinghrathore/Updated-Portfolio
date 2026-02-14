import React from 'react'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';
import CursorEffect from './components/cursor/CursorEffect';
import { Analytics } from "@vercel/analytics/react"

const App = () => {



return (
  <>
    <CursorEffect />
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Work />
      <Contact />

    </main>

    <Footer />

    <ScrollUp />
    <Analytics mode="production" debug={false} />
  </>

)
}

export default App
