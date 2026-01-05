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
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-sky-50/30 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      
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
            Why Choose Us
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            What makes our{' '}
            <span className="text-sky-500">customers appreciate us?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Digitalis Global is your trusted partner for high-performance digital solutions 
            tailored to businesses in Australia, the UK, the USA, and Finland. We offer expert 
            services in WordPress development, MERN stack web applications, Shopify store setup, 
            SEO, and digital marketing.
          </p>
        </motion.div>

            {/* Stats Grid */}
            <motion.div
              ref={ref}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
            >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all hover:scale-105"
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-sky-500 mb-2"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.3, 
                  type: "spring", 
                  stiffness: 200,
                  damping: 15
                }}
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
              <p className="text-sm md:text-base text-slate-600 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-sky-100/30 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Our team blends innovative UI/UX design with strategic SEO to boost your visibility, 
            user engagement, and conversions. With a focus on quality, transparency, and on-time 
            delivery, we help businesses build a strong online presence that delivers real growth.
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

