import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import './Hero.css'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    // Delay video loading slightly to prioritize page content
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.load()
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
  }

  const handleVideoError = () => {
    setVideoError(true)
    setVideoLoaded(true) // Show content even if video fails
  }

  const handleScrollClick = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const heroStats = [
    { value: 500, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 10, suffix: '+', label: 'Years Experience' },
  ]

  return (
    <section id="home" className="hero">
      <div className="hero-video-container">
        {!videoError && (
        <video
            ref={videoRef}
            className={`hero-video ${videoLoaded ? 'loaded' : 'loading'}`}
          autoPlay
          loop
          muted
          playsInline
            preload="metadata"
            onLoadedData={handleVideoLoaded}
            onCanPlay={handleVideoLoaded}
            onError={handleVideoError}
        >
          <source src="/7021935_Up_Looking_1920x1080.mp4" type="video/mp4" />
        </video>
        )}
        {!videoLoaded && !videoError && (
          <div className="hero-video-placeholder">
            <div className="video-loading-spinner"></div>
          </div>
        )}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-container">
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Building Digital
            <span className="gradient-text"> Experiences</span>
            <br />
            That Transform Businesses
          </motion.h1>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We craft cutting-edge web applications, mobile solutions, and digital platforms 
            that drive growth and elevate your brand in the digital landscape.
          </motion.p>
          
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
              Start Your Project
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
              View Our Work
              </motion.button>
            </Link>
          </motion.div>
          
          <div ref={ref} className="hero-stats">
            {heroStats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6, type: "spring", stiffness: 100 }}
              >
                <motion.div 
                  className="stat-number"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: index * 0.2 + 0.7, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <span>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        delay={index * 0.2}
                        suffix={stat.suffix}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                </motion.div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <motion.button
        className="scroll-indicator"
        onClick={handleScrollClick}
        aria-label="Scroll to services"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          className="scroll-arrow"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.button>
    </section>
  )
}

export default Hero

