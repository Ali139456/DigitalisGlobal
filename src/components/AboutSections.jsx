import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSections = () => {
  const shouldReduceMotion = useReducedMotion()

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const [journeyRef, journeyInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const missionFeatures = [
    {
      title: 'Speed',
      description: 'Rapid delivery without compromising quality',
      icon: '⚡',
    },
    {
      title: 'Craft',
      description: 'Meticulous attention to detail in every project',
      icon: '🎨',
    },
    {
      title: 'Trust',
      description: 'Building lasting relationships with our clients',
      icon: '🤝',
    },
  ]

  const milestones = [
    {
      year: '2021',
      title: 'Digitalis Global began with a vision',
      description: 'A group of ambitious friends coming together in early 2021 to found a company aimed at delivering solutions for an increasingly digital world. Digitalis set out to make its mark in key areas like web development, graphic design, and online marketing.',
      icon: '🌱',
    },
    {
      year: '2022',
      title: 'Powered by dedication and drive',
      description: 'The Digitalis team wasted no time in offering their skills and services to clients near and far. As demand grew, so did the company, rapidly expanding from three enterprising founders to a 20+ team of experienced professionals.',
      icon: '🚀',
    },
    {
      year: '2023',
      title: 'In just under three years',
      description: 'Digitalis Global has transformed from a bootstrap startup into an established industry player operating from a fully-equipped office hub. The company\'s exponential growth speaks clearly to both the immense market need for digital solutions.',
      icon: '💪',
    },
    {
      year: '2024',
      title: 'Today, Digitalis Global',
      description: 'Provides diverse solutions: custom software, graphics, e-commerce, and digital marketing for businesses spanning startups to Fortune 500. With a rich portfolio of 500+ clients, we excel in web and mobile development.',
      icon: '🌟',
    },
  ]

  // Animation variants with reduced motion support
  const sectionVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const gridVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  }

  const missionCardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      {/* Our Mission Section */}
      <section 
        ref={missionRef}
        className="relative w-full bg-white py-20 md:py-32 overflow-hidden"
      >
        {/* Subtle gradient blob background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-sky-100/30 via-blue-100/20 to-sky-50/30 rounded-full blur-3xl" />
        
        {/* Optional grain overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Mission Content */}
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.p
                className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
              >
                OUR MISSION
              </motion.p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Building digital experiences that transform businesses
              </h2>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
                We craft cutting-edge web applications, mobile solutions, and digital platforms that drive growth and elevate your brand in the digital landscape. Our mission is to deliver exceptional results that exceed expectations.
              </p>
            </motion.div>

            {/* Right Column - Feature Cards */}
            <motion.div
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {missionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={missionCardVariants}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
                  whileHover={shouldReduceMotion ? {} : { y: -8 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey Section - Modern Design */}
      <section className="relative w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-32 md:py-40 overflow-hidden">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-sky-500/30 to-blue-600/30 rounded-full blur-[120px]"
            animate={{
              x: shouldReduceMotion ? 0 : [0, 100, -50, 0],
              y: shouldReduceMotion ? 0 : [0, -80, 60, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-[100px]"
            animate={{
              x: shouldReduceMotion ? 0 : [0, -80, 70, 0],
              y: shouldReduceMotion ? 0 : [0, 100, -60, 0],
              scale: [1, 0.8, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <motion.div
            className="text-center mb-20 md:mb-28"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-600/20 border border-sky-500/30 text-sky-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm">
                Our Journey
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-sky-200 to-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: shouldReduceMotion ? 0 : 0.2 }}
            >
              Milestones That
              <br />
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Define Us
              </span>
            </motion.h2>
          </motion.div>

          {/* Modern Timeline Grid */}
          <motion.div
            ref={journeyRef}
            className="relative"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-sky-500/30 to-transparent transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative auto-rows-fr">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative group h-full"
                >
                  {/* Connecting Dot (Desktop Only) */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg shadow-sky-500/50" />

                  {/* Glassmorphism Card */}
                  <motion.div
                    className="relative h-full p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl overflow-hidden flex flex-col"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                    }}
                    whileHover={shouldReduceMotion ? undefined : { 
                      y: -12, 
                      scale: 1.03,
                      rotateY: 5,
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 20 
                    }}
                  >
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div 
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4), rgba(2, 132, 199, 0.4), rgba(14, 165, 233, 0.4))',
                          backgroundSize: '200% 200%',
                          animation: shouldReduceMotion ? 'none' : 'gradientShift 3s ease infinite',
                        }}
                      />
                      <style>{`
                        @keyframes gradientShift {
                          0%, 100% { background-position: 0% 50%; }
                          50% { background-position: 100% 50%; }
                        }
                      `}</style>
                    </div>

                    {/* Glowing Background Effect */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-sky-500/0 via-blue-500/0 to-cyan-500/0 rounded-3xl blur-xl group-hover:from-sky-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"
                      animate={shouldReduceMotion ? {} : {
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Content Container - Horizontal Layout */}
                    <div className="relative z-10 flex items-start gap-4 flex-1">
                      {/* Left Side - Year Badge */}
                      <div className="flex-shrink-0">
                        {/* Year Badge - Modern Design */}
                        <motion.div
                          className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-500 text-white font-black text-lg shadow-2xl shadow-sky-500/50 relative overflow-hidden"
                          whileHover={shouldReduceMotion ? {} : { 
                            scale: 1.1, 
                            rotate: [0, -5, 5, 0] 
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                          <span className="relative z-10">{milestone.year}</span>
                        </motion.div>
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-sky-300 transition-colors duration-300">
                          {milestone.title}
                        </h3>
                        <p className="text-sm md:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300 flex-1">
                          {milestone.description}
                        </p>
                      </div>

                      {/* Bottom Glow Line */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: shouldReduceMotion ? 0 : index * 0.1 + 0.3, duration: 0.6 }}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>

                    {/* Shine Effect on Hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutSections
