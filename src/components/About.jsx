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

      {/* Global Reach Section */}
      <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Global Reach
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
                With operations across multiple international regions, Digitalis Global delivers cutting-edge digital solutions to clients worldwide. From web development to digital marketing, we're committed to transforming businesses across the globe. Let's connect.
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
                      <h3 className="text-lg font-bold text-slate-900">{item.country}</h3>
                      <p className="text-sm text-slate-600">{item.location}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Map */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full aspect-square max-w-2xl mx-auto">
                {/* World Map SVG */}
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Background Dotted Grid Pattern (light gray) */}
                    <pattern
                      id="bgDotPattern"
                      x="0"
                      y="0"
                      width="15"
                      height="15"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="7.5" cy="7.5" r="0.8" fill="#cbd5e1" opacity="0.4" />
                    </pattern>
                    
                    {/* Dense Blue Dot Pattern for Continents */}
                    <pattern
                      id="blueDotPattern"
                      x="0"
                      y="0"
                      width="5"
                      height="5"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2.5" cy="2.5" r="2" fill="#0ea5e9" />
                    </pattern>
                    
                    {/* Glow Filter for Pins */}
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background */}
                  <rect width="1000" height="500" fill="#f8fafc" />
                  <rect width="1000" height="500" fill="url(#bgDotPattern)" />

                  {/* World Map Continents - Made of Blue Dots */}
                  {/* North America */}
                  <g>
                    <path
                      d="M 150 100 L 300 80 L 350 120 L 320 180 L 200 200 L 120 160 Z"
                      fill="url(#blueDotPattern)"
                    />
                  </g>
                  
                  {/* South America */}
                  <g>
                    <path
                      d="M 250 200 L 320 220 L 340 280 L 300 350 L 240 340 L 220 280 Z"
                      fill="url(#blueDotPattern)"
                    />
                  </g>
                  
                  {/* Europe */}
                  <g>
                    <path
                      d="M 450 80 L 550 70 L 580 120 L 560 160 L 480 170 L 440 120 Z"
                      fill="url(#blueDotPattern)"
                    />
                  </g>
                  
                  {/* Africa */}
                  <g>
                    <path
                      d="M 500 180 L 580 190 L 600 250 L 580 320 L 520 350 L 480 300 L 480 220 Z"
                      fill="url(#blueDotPattern)"
                    />
                  </g>
                  
                  {/* Asia */}
                  <g>
                    <path
                      d="M 600 60 L 850 50 L 900 120 L 880 200 L 800 220 L 700 200 L 650 150 L 620 100 Z"
                      fill="url(#blueDotPattern)"
                    />
                  </g>
                  
                  {/* Australia */}
                  <g>
                    <path
                      d="M 750 280 L 850 270 L 870 310 L 850 340 L 780 350 L 740 320 Z"
                      fill="url(#blueDotPattern)"
                    />
                  </g>

                  {/* Glowing Location Pins */}
                  {/* Australia - Sydney */}
                  <g className="location-pin" filter="url(#glow)">
                    <circle cx="800" cy="310" r="20" fill="#0ea5e9" opacity="0.2" />
                    <circle cx="800" cy="310" r="15" fill="#0ea5e9" opacity="0.3" />
                    <circle cx="800" cy="310" r="10" fill="#0ea5e9" opacity="0.5" />
                    <circle cx="800" cy="310" r="7" fill="#0ea5e9" />
                    <path
                      d="M 800 310 L 792 330 L 800 322 L 808 330 Z"
                      fill="#0284c7"
                    />
                    <circle cx="800" cy="310" r="4" fill="#ffffff" />
                  </g>

                  {/* United Kingdom */}
                  <g className="location-pin" filter="url(#glow)">
                    <circle cx="520" cy="100" r="20" fill="#0ea5e9" opacity="0.2" />
                    <circle cx="520" cy="100" r="15" fill="#0ea5e9" opacity="0.3" />
                    <circle cx="520" cy="100" r="10" fill="#0ea5e9" opacity="0.5" />
                    <circle cx="520" cy="100" r="7" fill="#0ea5e9" />
                    <path
                      d="M 520 100 L 512 120 L 520 112 L 528 120 Z"
                      fill="#0284c7"
                    />
                    <circle cx="520" cy="100" r="4" fill="#ffffff" />
                  </g>

                  {/* Finland */}
                  <g className="location-pin" filter="url(#glow)">
                    <circle cx="550" cy="60" r="20" fill="#0ea5e9" opacity="0.2" />
                    <circle cx="550" cy="60" r="15" fill="#0ea5e9" opacity="0.3" />
                    <circle cx="550" cy="60" r="10" fill="#0ea5e9" opacity="0.5" />
                    <circle cx="550" cy="60" r="7" fill="#0ea5e9" />
                    <path
                      d="M 550 60 L 542 80 L 550 72 L 558 80 Z"
                      fill="#0284c7"
                    />
                    <circle cx="550" cy="60" r="4" fill="#ffffff" />
                  </g>

                  {/* Germany */}
                  <g className="location-pin" filter="url(#glow)">
                    <circle cx="540" cy="110" r="20" fill="#0ea5e9" opacity="0.2" />
                    <circle cx="540" cy="110" r="15" fill="#0ea5e9" opacity="0.3" />
                    <circle cx="540" cy="110" r="10" fill="#0ea5e9" opacity="0.5" />
                    <circle cx="540" cy="110" r="7" fill="#0ea5e9" />
                    <path
                      d="M 540 110 L 532 130 L 540 122 L 548 130 Z"
                      fill="#0284c7"
                    />
                    <circle cx="540" cy="110" r="4" fill="#ffffff" />
                  </g>
                </svg>

                {/* Glow Animation Styles */}
                <style>{`
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
                      opacity: 0.2;
                      r: 20;
                    }
                    50% {
                      opacity: 0.4;
                      r: 25;
                    }
                  }
                `}</style>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About

