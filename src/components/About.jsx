import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AboutSections from './AboutSections'
import Footer from './Footer'

// UPDATED: Accurate geographic paths and positions relative to the 1000x500 SVG viewbox
const COUNTRY_PATHS = {
};

const About = () => {
  const teamMembers = [
    { name: 'Saad Ali', role: 'Founder / CEO', image: '/saad.webp' },
    { name: 'M. Bilal Tahir', role: 'Co-Founder / Project Manager', image: '/bilal.webp' },
    { name: 'Muhammad Hamza', role: 'Co-Founder / Network Architect', image: '/hamza.webp' },
    { name: 'Danial S.', role: 'Business Developer Australia', image: '/danial.webp' },
    { name: 'Muhammad Hamza', role: 'HR / Project Manager', image: '/Hamza_HR.png' },
    { name: 'Yasir Wazir Satti', role: 'General Manager', image: '/YASIR.webp' },
    { name: 'Inam Anwar', role: 'Business Developer Australia', image: '/INAM.webp' },
    { name: 'Sarib Khan', role: 'Marketing Lead', image: '/sarib.webp' },
    { name: 'Ameer hamza', role: 'Chief Technology Officer', image: '/Ameer_Hamza.png' },
  ]

  const locations = [
    { id: 'au', name: 'Australia', emoji: '🇦🇺', x: "88%", y: "65%" },
    { id: 'uk', name: 'United Kingdom', emoji: '🇬🇧', x: "45.2%", y: "17%" },
    { id: 'de', name: 'Germany', emoji: '🇩🇪', x: "48.5%", y: "21%" },
    { id: 'fi', name: 'Finland', emoji: '🇫🇮', x: "55%", y: "11%" },
  ]

  const milestones = [
    { 
      year: '2021', title: 'The Vision', 
      desc: 'Digitalis Global was born from a vision to bridge the gap between complex business challenges and elegant digital solutions.',
      color: '#f97316', x: '10%', y: '10%', position: 'above' 
    },
    { 
      year: '2022', title: 'Global Expansion', 
      desc: 'We crossed borders, establishing our presence in the UK and Australia to serve a truly international clientele.',
      color: '#0ea5e9', x: '26%', y: '25%', position: 'below' 
    },
    { 
      year: '2023', title: 'Technological Peak', 
      desc: 'Integrated cutting-edge AI and cloud architectures into our core service offerings.',
      color: '#ef4444', x: '42%', y: '52%', position: 'above' // PUSHED FURTHER DOWN: From 45% to 52%
    },
    { 
      year: '2024', title: 'Future Frontiers', 
      desc: 'Continuing to innovate and lead as a premier digital partner for enterprises worldwide.',
      color: '#84cc16', x: '58%', y: '50%', position: 'below' 
    },
    { 
      year: '2025', title: 'Innovation Milestone', 
      desc: 'Setting new benchmarks in the digital landscape with groundbreaking advancements and global scaling.',
      color: '#facc15', x: '74%', y: '68%', position: 'above' 
    },
    { 
      year: '2026', title: 'Global Impact', 
      desc: 'Expanding our digital ecosystem to redefine industry standards and empower businesses on a massive scale.',
      color: '#22d3ee', x: '90%', y: '85%', position: 'below' 
    }
  ]

  const [activeLocation, setActiveLocation] = useState(locations[0])

  const teamContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }

  const teamItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  return (
    <div className="min-h-screen bg-white font-['Montserrat'] overflow-x-hidden">
      <style>{`
        @keyframes geo-pulse-large {
          0% { fill: rgba(14, 165, 233, 0.4); filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.6)); transform: scale(1); }
          50% { fill: rgba(14, 165, 233, 0.8); filter: drop-shadow(0 0 40px rgba(14, 165, 233, 1)); transform: scale(1.05); }
          100% { fill: rgba(14, 165, 233, 0.4); filter: drop-shadow(0 0 10px rgba(14, 165, 233, 0.6)); transform: scale(1); }
        }
        @keyframes radar-ping {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        .animate-geo-large {
          animation: geo-pulse-large 2s infinite ease-in-out;
          transform-origin: center;
          transform-box: fill-box;
        }
        .radar-ping {
          animation: radar-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-50 via-sky-50/30 to-white py-20 overflow-hidden pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <p className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">Our Story & Team</h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              From a vision in 2021 to a leading digital solutions provider, discover the journey and the amazing people that shaped Digitalis Global.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden">
        {/* Background Fix: Absolute positioned div prevents scroll shaking */}
        <div 
          className="absolute inset-0 w-full h-full z-0"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #589CD5 100%)'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 text-center">
          <motion.div 
            className="mb-20 flex flex-col items-center" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              The minds behind <span className="text-slate-600">Digitalis</span>
            </h2>
            <p className="text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              We are a collective of thinkers, builders, and dreamers. Together, we build the future of digital experiences.
            </p>
            <button className="px-8 py-3 rounded-full border border-slate-900 text-slate-900 text-sm font-bold hover:bg-slate-900 hover:text-white transition-all duration-300">
              See Career Opportunities
            </button>
          </motion.div>

          {/* GRID: 3x3 Layout */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" 
            variants={teamContainerVariants} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                variants={teamItemVariants} 
                className="group relative h-[400px] w-full overflow-hidden rounded-lg bg-white shadow-xl border border-slate-100"
              >
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full bg-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* UPDATED: Dark Gradient Overlay - Fades out to 0 opacity on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-0" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                  {/* The Vertical Accent Line */}
                  <div className="absolute left-0 bottom-6 h-10 w-1 bg-indigo-500/80 rounded-r-full group-hover:bg-indigo-400 transition-colors" />
                  
                  <div className="pl-4 relative z-10">
                    <h3 className="text-lg font-bold text-[#589CD5] tracking-wide">{member.name}</h3>
                    <p className="text-xs font-bold text-[#589CD5] uppercase tracking-wider mt-1">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* MILESTONES WINDING ROAD SECTION - BELOW TEAM */}
      <section className="relative w-full py-32 md:py-48 overflow-hidden bg-[#09090B]">
        <div className="absolute top-10 md:top-20 left-0 w-full px-6 text-center z-20">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 md:mb-6">
              Milestones That <span className="text-sky-400">Define Us</span>
            </h2>
            <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto px-4">
              A chronological journey of our growth and digital evolution.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full max-w-6xl mx-auto h-[450px] md:h-[750px] mt-24 md:mt-48">
          <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M 50 50 C 300 50, 200 350, 500 350 C 800 350, 700 550, 950 550"
              stroke="#1e293b"
              strokeWidth="40"
              strokeLinecap="round"
              className="opacity-30"
            />
            <motion.path
              d="M 50 50 C 300 50, 200 350, 500 350 C 800 350, 700 550, 950 550"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeDasharray="12 20"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="drop-shadow-[0_0_10px_#38bdf8]"
            />
          </svg>

          {milestones.map((ms, i) => (
            <motion.div 
              key={i} 
              className="absolute flex flex-col items-center group" 
              style={{ 
                left: ms.x, 
                top: ms.position === 'above' ? 'auto' : `${parseInt(ms.y) - 5}%`,
                bottom: ms.position === 'above' ? `${100 - parseInt(ms.y) - 5}%` : 'auto', 
                width: 'clamp(85px, 12vw, 250px)', 
                marginLeft: 'clamp(-125px, -6vw, -42px)' 
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              {ms.position === 'above' && (
                <div className="mb-2 md:mb-4 text-center px-2">
                  <h4 className="font-bold text-sm md:text-3xl mb-0.5 md:mb-1" style={{ color: ms.color }}>{ms.year}</h4>
                  <h5 className="text-white font-bold text-[9px] md:text-xl mb-1 tracking-tight">{ms.title}</h5>
                  <p className="hidden md:block text-slate-300 text-[13px] leading-relaxed line-clamp-2">{ms.desc}</p>
                </div>
              )}
              {ms.position === 'above' && <div className="w-[1px] md:w-[3px] h-4 md:h-10 mb-1" style={{ backgroundColor: ms.color }} />}
              
              <div 
                className="w-8 h-8 md:w-16 md:h-16 rounded-full border-[2px] md:border-[4px] flex items-center justify-center bg-[#09090B] shadow-2xl z-10 transition-all group-hover:scale-110 duration-300"
                style={{ borderColor: ms.color }}
              >
                <div className="w-3 h-3 md:w-8 md:h-8 rounded-full animate-pulse shadow-inner" style={{ backgroundColor: ms.color }} />
              </div>

              <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full z-20 border md:border-2 border-[#09090B] ${ms.position === 'above' ? 'mt-[-4px] md:mt-[-6px]' : 'mb-[-4px] md:mb-[-6px]'}`} style={{ backgroundColor: ms.color }} />
              
              {ms.position === 'below' && <div className="w-[1px] md:w-[3px] h-4 md:h-10 mt-1" style={{ backgroundColor: ms.color }} />}
              {ms.position === 'below' && (
                <div className="mt-2 md:mt-4 text-center px-2">
                  <h4 className="font-bold text-sm md:text-3xl mb-0.5 md:mb-1" style={{ color: ms.color }}>{ms.year}</h4>
                  <h5 className="text-white font-bold text-[9px] md:text-xl mb-1 tracking-tight">{ms.title}</h5>
                  <p className="hidden md:block text-slate-300 text-[13px] leading-relaxed line-clamp-2">{ms.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* GLOBAL REACH SECTION */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden bg-white">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Global <span className="text-sky-500">Reach</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Operating across international borders to bring high-end digital solutions to our partners worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveLocation(item)}
                    className={`flex items-center gap-2 md:gap-4 p-3 md:p-4 rounded-2xl transition-all border ${
                      activeLocation.id === item.id 
                      ? 'bg-sky-500/10 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.1)]' 
                      : 'bg-slate-50 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <span className="text-xl md:text-2xl">{item.emoji}</span>
                    <span className={`text-xs md:text-base font-bold ${activeLocation.id === item.id ? 'text-sky-600' : 'text-slate-500'}`}>
                      {item.name}
                    </span>
                  </button> 
                ))}
              </div>
            </motion.div>

            <motion.div className="relative p-4" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}>
              <div className="relative w-full aspect-[16/10] bg-slate-50 rounded-3xl overflow-hidden shadow-inner border border-slate-200">
                <div className="absolute inset-0 opacity-[0.25] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center pointer-events-none" />
                
                <svg viewBox="0 0 1000 500" className="relative w-full h-full z-10">
                  <rect width="1000" height="500" fill="transparent" />
                  {locations.map(loc => ( 
                    <path 
                      key={`bg-${loc.id}`} 
                      d={COUNTRY_PATHS[loc.id]} 
                      fill="#cbd5e1" 
                      stroke="#94a3b8"
                      strokeWidth="1"
                      className="opacity-50" 
                    />
                  ))}
                  <AnimatePresence mode='wait'>
                    <motion.path
                      key={activeLocation.id}
                      d={COUNTRY_PATHS[activeLocation.id]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="animate-geo-large"
                    />
                  </AnimatePresence>
                </svg>

                {locations.map((loc) => (
                  <div key={loc.id} className="absolute z-10" style={{ left: loc.x, top: loc.y }}>
                    <div className="relative -translate-x-1/2 -translate-y-1/2">
                      <div className={`absolute inset-0 w-3 h-3 md:w-5 md:h-5 rounded-full ${activeLocation.id === loc.id ? 'radar-ping bg-sky-400' : ''}`} />
                      <motion.div 
                        animate={{ 
                          scale: activeLocation.id === loc.id ? 1.2 : 1,
                          backgroundColor: activeLocation.id === loc.id ? "#0ea5e9" : "#64748b" 
                        }}
                        className="relative w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-white shadow-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About;