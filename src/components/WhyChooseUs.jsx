import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const stats = [
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: '/7', label: 'Availability Hours' },
    { value: 500, suffix: '+', label: 'Satisfied Clients' },
    { value: 20, suffix: '+', label: 'Expert Team Members' },
  ]

  const features = [
    {
      icon: '🚀',
      title: 'High-Performance Solutions',
      desc: 'Tailored digital solutions for businesses in Australia, the UK, the USA, and Finland.'
    },
    {
      icon: '🎯',
      title: 'Results-Driven Approach',
      desc: 'Every solution is designed to deliver real growth and measurable outcomes.'
    },
    {
      icon: '⚡',
      title: 'Expert Services',
      desc: 'WordPress development, MERN stack, Shopify, SEO, and digital marketing expertise.'
    },
    {
      icon: '✨',
      title: 'Quality & Transparency',
      desc: 'Focus on quality, transparency, and on-time delivery for every project.'
    },
    {
      icon: '🎨',
      title: 'Innovative Design',
      desc: 'Blend of innovative UI/UX design with strategic SEO to boost visibility.'
    },
    {
      icon: '🔮',
      title: 'Future-Ready',
      desc: 'Scalable e-commerce platforms and cutting-edge tech solutions.'
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

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-sky-50/30 py-12 md:py-16 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Header and Stats Layout */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Left Side - Header Text */}
          <motion.div
            className="lg:col-span-5 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Why Choose Us
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              What makes our{' '}
              <motion.span 
                className="text-sky-500 inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
              >
                customers appreciate us?
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-base md:text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Digitalis Global is your trusted partner for high-performance digital solutions 
              tailored to businesses in Australia, the UK, the USA, and Finland. We offer expert 
              services in WordPress development, MERN stack web applications, Shopify store setup, 
              SEO, and digital marketing.
            </motion.p>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div
            ref={ref}
            className="lg:col-span-7 grid grid-cols-2 gap-3"
          >
          {stats.map((stat, index) => {
            const cardColors = [
              { bg: 'bg-gradient-to-br from-sky-500/20 to-blue-500/15', border: 'border-sky-400/40', text: 'from-sky-600 to-blue-600', label: 'text-sky-700' },
              { bg: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/15', border: 'border-emerald-400/40', text: 'from-emerald-600 to-teal-600', label: 'text-emerald-700' },
              { bg: 'bg-gradient-to-br from-purple-500/20 to-pink-500/15', border: 'border-purple-400/40', text: 'from-purple-600 to-pink-600', label: 'text-purple-700' },
              { bg: 'bg-gradient-to-br from-orange-500/20 to-amber-500/15', border: 'border-orange-400/40', text: 'from-orange-600 to-amber-600', label: 'text-orange-700' },
            ]
            const colors = cardColors[index % cardColors.length]
            
            return (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative text-center p-[5px] rounded-xl ${colors.bg} border-2 ${colors.border} hover:shadow-lg transition-all overflow-hidden`}
              whileHover={{ y: -3, scale: 1.02 }}
            >
              <div className="relative h-full w-full bg-white/90 rounded-lg p-3 flex flex-col items-center justify-center">
                <motion.div
                  className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${colors.text} bg-clip-text text-transparent mb-1`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.3, 
                    type: "spring", 
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span>
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={index * 0.2}
                        suffix={stat.suffix}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                </motion.div>
                <motion.p 
                  className={`text-[10px] md:text-xs ${colors.label} font-semibold leading-tight`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {stat.label}
                </motion.p>
              </div>
            </motion.div>
            )
          })}
          </motion.div>
        </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
          {features.map((feature, index) => {
            const gradientColors = [
              'from-sky-500/10 via-blue-500/5 to-purple-500/10',
              'from-emerald-500/10 via-teal-500/5 to-cyan-500/10',
              'from-orange-500/10 via-amber-500/5 to-yellow-500/10',
              'from-pink-500/10 via-rose-500/5 to-red-500/10',
              'from-indigo-500/10 via-blue-500/5 to-sky-500/10',
              'from-violet-500/10 via-purple-500/5 to-fuchsia-500/10',
            ]
            
            return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white border border-slate-200 hover:border-sky-300 transition-all overflow-hidden shadow-sm hover:shadow-lg"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Simple top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Subtle background gradient on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index % gradientColors.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                initial={false}
              />
              
              <div className="relative z-10">
                {/* Icon with simple background */}
                <motion.div 
                  className="relative mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sky-50 group-hover:bg-sky-100 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-3xl">{feature.icon}</span>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-sm text-slate-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {feature.desc}
                </motion.p>
              </div>
            </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

