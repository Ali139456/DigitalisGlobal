import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Careers = () => {
  const stats = [
    { value: 20, suffix: '+', label: 'Expert Team Members' },
    { value: 24, suffix: '/7', label: 'Online Support' },
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 px-4">
              Join Our <span className="text-sky-500">Team</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Be part of a dynamic team that's shaping the future of digital solutions. 
              We're always looking for talented individuals to join our growing family.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all"
              >
                <div className="text-4xl sm:text-5xl font-bold text-sky-500 mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <p className="text-base sm:text-lg text-slate-600 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 px-4">
              Approx 20+ team members ready to online support for you
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              At Digitalis Global, we believe in building a team of passionate professionals 
              who are committed to delivering exceptional results. Our team members are spread 
              across different locations, working together to provide you with the best digital 
              solutions.
            </p>
          </motion.div>

          {/* Team Info */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Expert Team Members
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
                Our team consists of over 20 experienced professionals, each bringing unique 
                skills and expertise to the table. From developers and designers to marketers 
                and strategists, we have the talent to tackle any digital challenge.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Full Stack Developers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>UI/UX Designers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Digital Marketing Specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Graphic Designers</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>SEO Experts</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                24/7 Online Support
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We understand that digital needs don't follow a 9-to-5 schedule. That's why 
                our team is available around the clock to provide support and assistance whenever 
                you need it. Whether it's a technical issue or a quick question, we're here to help.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>24/7 availability</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Quick response times</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Multiple communication channels</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-sky-500">✓</span>
                  <span>Proactive monitoring</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Why Join Us */}
          <motion.div
            className="p-12 rounded-2xl bg-gradient-to-br from-sky-50 to-white border border-sky-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Why Join Digitalis Global?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Global Reach</h4>
                <p className="text-slate-600">
                  Work with clients from Australia, UK, USA, and Finland
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Growth Opportunities</h4>
                <p className="text-slate-600">
                  Rapidly expanding company with clear career paths
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Innovation</h4>
                <p className="text-slate-600">
                  Work on cutting-edge projects with modern technologies
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-lg text-slate-600 mb-6">
              Interested in joining our team? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="mailto:info@digitalisglobal.com"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Your Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Careers
