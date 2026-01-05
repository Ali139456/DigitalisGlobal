import React from 'react'
import { motion } from 'framer-motion'
import Footer from './Footer'

const OurTeam = () => {
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
    <>
      <section className="relative w-full bg-gradient-to-br from-white to-slate-50 min-h-screen pt-24 pb-20">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Team
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              A team of amazing{' '}
              <span className="text-sky-500">people</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet our team of dedicated professionals driving innovation and excellence at Digitalis Global.
            </p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
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
      <Footer />
    </>
  )
}

export default OurTeam

