import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Footer from './Footer'

const AboutUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    {
      year: '2021',
      title: 'Digitalis Global began with a vision',
      description: 'A group of ambitious friends coming together in early 2021 to found a company aimed at delivering solutions for an increasingly digital world. Digitalis set out to make its mark in key areas like web development, graphic design, and online marketing.',
      icon: '🌱',
    },
    {
      year: '2021',
      title: 'Powered by dedication and drive',
      description: 'The Digitalis team wasted no time in offering their skills and services to clients near and far. As demand grew, so did the company, rapidly expanding from three enterprising founders to a 20+ team of experienced professionals. Major milestones were achieved in short order.',
      icon: '🚀',
    },
    {
      year: '2022',
      title: 'While challenges have arisen',
      description: 'Digitalis Global has confronted each obstacle as an opportunity to adapt, evolve and strengthen the foundations of the business. If the past is any indicator, the next chapter promises even greater things for this ambitious team. Digitalis Global excels in the dynamic digital era, reaching new heights with confidence.',
      icon: '💪',
    },
    {
      year: '2023',
      title: 'In just under three years',
      description: 'Digitalis Global has transformed from a bootstrap startup into an established industry player operating from a fully-equipped office hub. The company\'s exponential growth speaks clearly to both the immense market need for digital solutions and the skill, work ethic and vision.',
      icon: '🏢',
    },
    {
      year: '2023',
      title: 'Today, Digitalis Global',
      description: 'Provides diverse solutions: custom software, graphics, e-commerce, and digital marketing for businesses spanning startups to Fortune 500. With a rich portfolio of 500+ clients, we excel in web and mobile development, graphic design, and cutting-edge tech to solve complex business challenges innovatively.',
      icon: '🌟',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
              Our Story
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              From a vision in 2021 to a leading digital solutions provider, discover the journey that shaped Digitalis Global.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Journey Section */}
      <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-slate-50 py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

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
              Milestones
            </motion.p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Our journey{' '}
              <span className="text-sky-500">so far</span>
            </h2>
          </motion.div>

          {/* Modern Timeline Grid */}
          <div ref={ref} className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative group"
                >
                  {/* Card with gradient background */}
                  <motion.div
                    className="relative h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    whileHover={{ y: -8, scale: 1.02 }}
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutUs

