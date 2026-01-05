import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSections = () => {
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
      side: 'left',
    },
    {
      year: '2022',
      title: 'Powered by dedication and drive',
      description: 'The Digitalis team wasted no time in offering their skills and services to clients near and far. As demand grew, so did the company, rapidly expanding from three enterprising founders to a 20+ team of experienced professionals.',
      side: 'right',
    },
    {
      year: '2023',
      title: 'In just under three years',
      description: 'Digitalis Global has transformed from a bootstrap startup into an established industry player operating from a fully-equipped office hub. The company\'s exponential growth speaks clearly to both the immense market need for digital solutions.',
      side: 'left',
    },
    {
      year: '2024',
      title: 'Today, Digitalis Global',
      description: 'Provides diverse solutions: custom software, graphics, e-commerce, and digital marketing for businesses spanning startups to Fortune 500. With a rich portfolio of 500+ clients, we excel in web and mobile development.',
      side: 'right',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const timelineLineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  }

  const milestoneVariants = (side) => ({
    hidden: { 
      opacity: 0, 
      x: side === 'left' ? -50 : 50 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  })

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
              initial={{ opacity: 0, y: 30 }}
              animate={missionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
                initial={{ opacity: 0 }}
                animate={missionInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
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
              animate={missionInView ? "visible" : "hidden"}
            >
              {missionFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
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

      {/* Our Journey Section */}
      <section 
        ref={journeyRef}
        className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 md:py-32 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16 md:mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={journeyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={journeyInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              OUR JOURNEY
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Milestones that shaped{' '}
              <span className="text-sky-500">our story</span>
            </h2>
          </motion.div>

          {/* Timeline - Desktop */}
          <div className="hidden lg:block relative">
            {/* Center Vertical Line */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-sky-500 transform -translate-x-1/2"
              variants={timelineLineVariants}
              initial="hidden"
              animate={journeyInView ? "visible" : "hidden"}
              style={{ transformOrigin: 'top' }}
            />

            {/* Timeline Items */}
            <div className="relative">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-16 ${
                    milestone.side === 'left' ? 'justify-end pr-1/2' : 'justify-start pl-1/2'
                  }`}
                  variants={milestoneVariants(milestone.side)}
                  initial="hidden"
                  animate={journeyInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  <div className={`w-5/12 ${milestone.side === 'left' ? 'text-right' : 'text-left'}`}>
                    <motion.div
                      className="relative bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -4 }}
                    >
                      {/* Year Pill */}
                      <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold mb-4 ${milestone.side === 'left' ? 'ml-auto' : ''}`}>
                        {milestone.year}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>

                      {/* Decorative corner */}
                      <div className={`absolute top-0 ${milestone.side === 'left' ? 'right-0' : 'left-0'} w-24 h-24 bg-gradient-to-br from-sky-100/30 to-transparent rounded-bl-full ${milestone.side === 'right' ? 'rounded-bl-none rounded-br-full' : ''}`} />
                    </motion.div>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-lg z-10" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Timeline - Mobile */}
          <div className="lg:hidden relative pl-8">
            {/* Left Border Line */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-blue-500 to-sky-500"
              variants={timelineLineVariants}
              initial="hidden"
              animate={journeyInView ? "visible" : "hidden"}
              style={{ transformOrigin: 'top' }}
            />

            {/* Stacked Timeline Items */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={milestoneVariants('left')}
                  initial="hidden"
                  animate={journeyInView ? "visible" : "hidden"}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {/* Dot */}
                  <div className="absolute -left-11 top-2 w-4 h-4 rounded-full bg-sky-500 border-4 border-white shadow-lg z-10" />

                  <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
                    <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-sm font-bold mb-4">
                      {milestone.year}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSections

