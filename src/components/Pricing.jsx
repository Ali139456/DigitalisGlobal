import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Pricing = () => {
  const webPackages = [
    {
      name: 'Startup Website Package',
      features: [
        'Up to 3 Page Website',
        'Up to 5 Stock Images (Industry Specific)',
        'Contact Form',
        'jQuery Slider',
        '3 Banner Designs',
        'Google Friendly Sitemap',
        'Complete W3C Certified HTML',
        '48 to 72 hours TAT'
      ]
    },
    {
      name: 'Professional Website Package',
      features: [
        'Up to 10 Unique Pages Website',
        'CMS (Content Management System)/Admin Panel',
        'Contact us Form',
        'Online Appointment Scheduling CTA Form',
        'Book A Call CTA Form',
        'Up to 10 Stock images (Industry Specific)'
      ]
    },
    {
      name: 'Elite Website Package',
      features: [
        'Up to 15 Custom Pages Website',
        'Mobile Responsive',
        'CMS (Content Management System)/Admin Panel',
        'Conceptual and Dynamic Design',
        'Striking Hover Effects',
        'Online Reservation/Appointment Tool (Optional)'
      ]
    }
  ]

  const ecommercePackages = [
    {
      name: 'Basic E-Commerce Package',
      features: [
        '5 -8 Product Upload for stores',
        'Responsive Website (Desktop, Tab, and Mobile Compatible)',
        '3 – Custom Pages',
        'Request a quote/Contact us Form Page',
        'Blog Integration',
        'Apps and Widgets Integration',
        'LIVE CHAT'
      ]
    },
    {
      name: 'Premium E-Commerce Package',
      features: [
        'Everything in Basic Package+',
        'Upto 15 Products Store',
        '5 – Custom Pages',
        'Photo/Video Gallery',
        'Apps and Widgets Integration',
        'Speed Optimisation',
        'S.E.O Friendly URL & Sites',
        'SMO Media Integration ( Facebook, Instagram)',
        'Business Email Setup'
      ]
    },
    {
      name: 'Advance E-Commerce Package',
      features: [
        'Everything in Basic/Premium Package+',
        'Upto 100 Product Store',
        'Premium Themes (If required)',
        '5-10 Custom Pages',
        'SMO Media Integration ( Facebook, Instagram)',
        'Custom Logo',
        'Social Media Kit',
        'MAILCHIMP/Klaviyo Integration'
      ]
    }
  ]

  const graphicDesigningPackages = [
    {
      name: 'General Graphic Designing',
      features: [
        '2 Initial Design Concepts',
        '2 Rounds of Revisions',
        'Contact Details for 1 Employee'
      ]
    },
    {
      name: 'Logo Designing',
      features: [
        'Announced After Meeting 3 Initial Design Concepts',
        '2 Rounds of Revisions',
        'Mockups Not Included',
        '1 Color Profile Rendering (Full color rendered logo)'
      ]
    },
    {
      name: 'Illustration',
      features: [
        '1 Initial Design Concept',
        '3 Rounds of Revisions',
        'Up To Two (2) Digital Caricatures'
      ]
    }
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
        className="relative bg-gradient-to-br from-slate-50 via-teal-50/30 to-white py-20 overflow-hidden pt-32"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-100/20 to-blue-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 px-4">
              Our <span className="text-teal-600">Pricing</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Choose the perfect package for your business needs. All packages are customizable to fit your requirements.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Web Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Web Packages
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {webPackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-teal-600 mt-1 flex-shrink-0">•</span>
                        <span className="text-slate-600 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full"
                  >
                    <motion.button
                      className="w-full px-6 py-3 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="block group-hover:hidden">Get A Quote</span>
                      <span className="hidden group-hover:block">Contact Us</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* E-Commerce Packages */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              E-Commerce
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {ecommercePackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-teal-600 mt-1 flex-shrink-0">•</span>
                        <span className="text-slate-600 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full"
                  >
                    <motion.button
                      className="w-full px-6 py-3 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="block group-hover:hidden">Get A Quote</span>
                      <span className="hidden group-hover:block">Contact Us</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Graphic Designing Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Graphic Designing
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {graphicDesigningPackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                    {pkg.name}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-teal-600 mt-1 flex-shrink-0">•</span>
                        <span className="text-slate-600 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block w-full"
                  >
                    <motion.button
                      className="w-full px-6 py-3 rounded-lg font-semibold bg-teal-600 text-white hover:bg-teal-700 transition-all duration-300 relative overflow-hidden group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="block group-hover:hidden">Get A Quote</span>
                      <span className="hidden group-hover:block">Contact Us</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Pricing
