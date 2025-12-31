import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurJourney = () => {
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
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
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
            className="text-xs font-bold tracking-[0.2em] text-teal-600 uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Milestones
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Our journey{' '}
            <span className="text-teal-600">so far</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 via-teal-400 to-teal-200 transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />

          <motion.div
            className="space-y-12 md:space-y-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {milestones.map((milestone, index) => {
              const isLeft = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Year Badge - Always centered on timeline at top */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-8 w-16 h-16 rounded-full bg-teal-600 items-center justify-center text-white font-bold text-lg shadow-lg z-20 border-4 border-white">
                    <span className="leading-none">{milestone.year}</span>
                  </div>
                  
                  {/* Mobile Year Badge */}
                  <div className="flex-shrink-0 w-12 h-12 md:hidden rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-lg z-10 mr-4">
                    <span className="leading-none">{milestone.year}</span>
                  </div>

                  {/* Content Card - Alternating left/right with equal width */}
                  <div className={`flex-1 md:w-[45%] mt-8 md:mt-0 px-4 md:px-0 ${
                    isLeft ? 'md:pr-10' : 'md:pl-10 md:ml-auto'
                  }`}>
                    <motion.div
                      className="group relative p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-xl transition-all duration-300"
                      whileHover={{ y: -4 }}
                    >
                      {/* Icon */}
                      <div className={`absolute -top-5 w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300 shadow-md ${
                        isLeft ? '-right-5' : '-left-5'
                      }`}>
                        {milestone.icon}
                      </div>

                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-3">
                            {milestone.title}
                          </h3>
                          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                            {milestone.description}
                          </p>
                    </motion.div>
                  </div>

                  {/* Spacer for right side items */}
                  {!isLeft && <div className="hidden md:block md:w-[45%]" />}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurJourney

