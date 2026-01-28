import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Hero from './components/Hero'
import FeaturedServices from './components/FeaturedServices'
import WhyChooseUs from './components/WhyChooseUs'
import About from './components/About'
import Testimonials from './components/Testimonials'
import ClientLogos from './components/ClientLogos'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ServiceDetail from './components/ServiceDetail'
import Contact from './components/Contact'
import Pricing from './components/Pricing'
import Portfolio from './components/Portfolio'
import PortfolioCategory from './components/PortfolioCategory'
import Careers from './components/Careers'
import CaseStudies from './components/CaseStudies'
import './App.css'

/* ✅ Floating Contact Icon – Global, Mobile Only */
const FloatingContactIcon = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) return null

  return (
    <Link
      to="/contact"
      aria-label="Contact us"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00f5ff, #0077ff)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        textDecoration: 'none',
        zIndex: 9999,
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
      }}
    >
      ✉️
    </Link>
  )
}

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturedServices />
              <ClientLogos />
              <WhyChooseUs />
              <Testimonials />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
      </Routes>

      {/* ✅ Global floating contact icon */}
      <FloatingContactIcon />
    </div>
  )
}

export default App
