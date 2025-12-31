import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import FeaturedServices from './components/FeaturedServices'
import WhyChooseUs from './components/WhyChooseUs'
import OurJourney from './components/OurJourney'
import Testimonials from './components/Testimonials'
import ClientLogos from './components/ClientLogos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ServiceDetail from './components/ServiceDetail'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import PortfolioCategory from './components/PortfolioCategory'
import OurTeam from './components/OurTeam'
import './App.css'

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedServices />
            <ClientLogos />
            <WhyChooseUs />
            <OurJourney />
            <Testimonials />
            <FAQ />
            <Footer />
          </>
        } />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about/our-team" element={<OurTeam />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
      </Routes>
    </div>
  )
}

export default App

