import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Footer from './Footer'
import AboutSections from './AboutSections'

const About = () => {

  const teamMembers = [
    {
      name: 'Saad Ali',
      role: 'Founder / CEO',
      image: '/saad.webp'
    },
    {
      name: 'M. Bilal Tahir',
      role: 'Co-Founder / Project Manager',
      image: '/bilal.webp'
    },
    {
      name: 'Muhammad Hamza',
      role: 'Co-Founder / Network Architect',
      image: '/hamza.webp'
    },
    {
      name: 'Danial S.',
      role: 'Business Developer Australia',
      image: '/danial.webp'
    },
    {
      name: 'Muhammad Hamza',
      role: 'HR / Project Manager',
      image: '/hamza%20HR.webp'
    },
    {
      name: 'Yasir Wazir Satti',
      role: 'General Manager',
      image: '/YASIR.webp'
    },
    {
      name: 'Inam Anwar',
      role: 'Business Developer Australia',
      image: '/INAM.webp'
    },
    {
      name: 'Sarib Khan',
      role: 'Marketing Lead',
      image: '/sarib.webp'
    },
  ]


  const teamContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const teamItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-50 via-sky-50/30 to-white py-20 overflow-hidden pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-100/20 to-blue-100/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              About Us
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Our Story & Team
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              From a vision in 2021 to a leading digital solutions provider, discover the journey and the amazing people that shaped Digitalis Global.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Mission and Journey Sections */}
      <AboutSections />

      {/* Our Team Section */}
      <section className="relative w-full bg-gradient-to-br from-white to-slate-50 min-h-screen pt-20 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Team
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              A team of amazing{' '}
              <span className="text-sky-500">people</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet our team of dedicated professionals driving innovation and excellence at Digitalis Global.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={teamContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={teamItemVariants}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = '/saad.webp'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-slate-600">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dynamic Rotating World Map Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='2' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
                Global <span className="text-sky-400">Reach</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                With operations across multiple international regions, Digitalis Global delivers cutting-edge digital solutions to clients worldwide. From web development to digital marketing, we're committed to transforming businesses across the globe.
              </p>

              {/* Locations List */}
              <div className="space-y-4">
                {[
                  { country: 'Australia', location: 'Sydney', flag: '🇦🇺' },
                  { country: 'United Kingdom', location: 'UK', flag: '🇬🇧' },
                  { country: 'Finland', location: 'Finland', flag: '🇫🇮' },
                  { country: 'Germany', location: 'Germany', flag: '🇩🇪' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <span className="text-3xl">{item.flag}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{item.country}</h3>
                      <p className="text-sm text-slate-400">{item.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Rotating Globe */}
            <motion.div
              className="relative flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full max-w-2xl aspect-square">
                {/* Rotating Globe Container */}
                <div className="globe-container">
                  <div className="globe">
                    {/* World Map SVG */}
                    <svg
                      viewBox="0 0 1000 500"
                      className="world-map"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        {/* Gradient for continents */}
                        <linearGradient id="continentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="50%" stopColor="#0284c7" />
                          <stop offset="100%" stopColor="#0369a1" />
                        </linearGradient>
                        
                        {/* Glow Filter for Pins */}
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Background Ocean */}
                      <rect width="1000" height="500" fill="#0f172a" />

                      {/* World Map Continents */}
                      {/* North America */}
                      <path
                        d="M 120 80 L 180 70 L 220 90 L 280 85 L 320 110 L 340 150 L 320 190 L 280 210 L 200 220 L 140 200 L 100 160 L 80 120 Z"
                        fill="url(#continentGradient)"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      
                      {/* South America */}
                      <path
                        d="M 240 200 L 300 210 L 320 250 L 310 300 L 280 340 L 240 350 L 200 330 L 180 280 L 190 240 Z"
                        fill="url(#continentGradient)"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      
                      {/* Europe */}
                      <path
                        d="M 480 60 L 540 55 L 580 75 L 600 110 L 590 150 L 560 170 L 520 175 L 480 160 L 460 120 L 470 80 Z"
                        fill="url(#continentGradient)"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      
                      {/* Africa */}
                      <path
                        d="M 500 170 L 560 180 L 600 200 L 620 250 L 610 300 L 580 340 L 540 360 L 500 350 L 480 300 L 480 240 L 490 200 Z"
                        fill="url(#continentGradient)"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      
                      {/* Asia */}
                      <path
                        d="M 600 40 L 720 35 L 800 50 L 880 80 L 900 130 L 890 180 L 850 210 L 780 220 L 700 200 L 640 170 L 610 120 L 600 80 Z"
                        fill="url(#continentGradient)"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      
                      {/* Australia */}
                      <path
                        d="M 760 280 L 840 275 L 880 300 L 870 330 L 830 350 L 780 355 L 740 340 L 730 310 L 750 290 Z"
                        fill="url(#continentGradient)"
                        stroke="#38bdf8"
                        strokeWidth="2"
                        opacity="0.9"
                      />

                      {/* Glowing Location Pins */}
                      {/* Australia - Sydney */}
                      <g className="location-pin" filter="url(#glow)">
                        <circle cx="810" cy="315" r="20" fill="#0ea5e9" opacity="0.2" />
                        <circle cx="810" cy="315" r="15" fill="#0ea5e9" opacity="0.3" />
                        <circle cx="810" cy="315" r="10" fill="#0ea5e9" opacity="0.5" />
                        <circle cx="810" cy="315" r="6" fill="#0ea5e9" />
                        <circle cx="810" cy="315" r="3" fill="#ffffff" />
                      </g>

                      {/* United Kingdom */}
                      <g className="location-pin" filter="url(#glow)">
                        <circle cx="510" cy="105" r="20" fill="#0ea5e9" opacity="0.2" />
                        <circle cx="510" cy="105" r="15" fill="#0ea5e9" opacity="0.3" />
                        <circle cx="510" cy="105" r="10" fill="#0ea5e9" opacity="0.5" />
                        <circle cx="510" cy="105" r="6" fill="#0ea5e9" />
                        <circle cx="510" cy="105" r="3" fill="#ffffff" />
                      </g>

                      {/* Finland */}
                      <g className="location-pin" filter="url(#glow)">
                        <circle cx="560" cy="65" r="20" fill="#0ea5e9" opacity="0.2" />
                        <circle cx="560" cy="65" r="15" fill="#0ea5e9" opacity="0.3" />
                        <circle cx="560" cy="65" r="10" fill="#0ea5e9" opacity="0.5" />
                        <circle cx="560" cy="65" r="6" fill="#0ea5e9" />
                        <circle cx="560" cy="65" r="3" fill="#ffffff" />
                      </g>

                      {/* Germany */}
                      <g className="location-pin" filter="url(#glow)">
                        <circle cx="540" cy="115" r="20" fill="#0ea5e9" opacity="0.2" />
                        <circle cx="540" cy="115" r="15" fill="#0ea5e9" opacity="0.3" />
                        <circle cx="540" cy="115" r="10" fill="#0ea5e9" opacity="0.5" />
                        <circle cx="540" cy="115" r="6" fill="#0ea5e9" />
                        <circle cx="540" cy="115" r="3" fill="#ffffff" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Orbital Rings */}
                <div className="orbit-ring orbit-ring-1"></div>
                <div className="orbit-ring orbit-ring-2"></div>
                <div className="orbit-ring orbit-ring-3"></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom Styles for Rotating Globe */}
        <style>{`
          .globe-container {
            perspective: 1200px;
            perspective-origin: center center;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .globe {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            animation: rotateGlobe 20s linear infinite;
          }

          .world-map {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            transform: rotateX(20deg);
            filter: drop-shadow(0 0 30px rgba(14, 165, 233, 0.3));
          }

          @keyframes rotateGlobe {
            0% {
              transform: rotateY(0deg);
            }
            100% {
              transform: rotateY(360deg);
            }
          }

          .orbit-ring {
            position: absolute;
            border: 2px solid rgba(14, 165, 233, 0.2);
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
          }

          .orbit-ring-1 {
            width: 80%;
            height: 80%;
            animation: rotateRing 15s linear infinite;
          }

          .orbit-ring-2 {
            width: 90%;
            height: 90%;
            animation: rotateRing 20s linear infinite reverse;
          }

          .orbit-ring-3 {
            width: 100%;
            height: 100%;
            animation: rotateRing 25s linear infinite;
          }

          @keyframes rotateRing {
            0% {
              transform: translate(-50%, -50%) rotateZ(0deg);
            }
            100% {
              transform: translate(-50%, -50%) rotateZ(360deg);
            }
          }

          .location-pin circle:first-child {
            animation: glow-pulse 2s ease-in-out infinite;
          }
          .location-pin circle:nth-child(2) {
            animation: glow-pulse 2s ease-in-out infinite 0.3s;
          }
          .location-pin circle:nth-child(3) {
            animation: glow-pulse 2s ease-in-out infinite 0.6s;
          }
          @keyframes glow-pulse {
            0%, 100% {
              opacity: 0.3;
              r: 18;
            }
            50% {
              opacity: 0.6;
              r: 22;
            }
          }
        `}</style>
      </section>

      <Footer />
    </div>
  )
}

export default About

