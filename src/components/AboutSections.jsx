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

      {/* Our Journey Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.15, duration: 0.4 }}
            >
              Milestones
            </motion.p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Our journey <span className="text-sky-500">so far</span>
            </h2>
          </motion.div>

          {/* Animated Milestones Grid */}
          <motion.div
            ref={journeyRef}
            className="relative"
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {milestones.map((milestone, index) => (
                <motion.div key={index} variants={cardVariants} className="relative group">
                  {/* Card */}
                  <motion.div
                    className="relative h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    whileHover={shouldReduceMotion ? undefined : { y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 group-hover:from-sky-50/50 group-hover:to-blue-50/50 transition-all duration-300" />

                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-100/30 to-transparent rounded-bl-full" />

                    {/* Year Badge */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold text-lg shadow-lg mb-6 relative z-10">
                      <span>{milestone.year}</span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-sky-50 flex items-center justify-center text-4xl mb-6 relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                      {milestone.icon}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutSections
