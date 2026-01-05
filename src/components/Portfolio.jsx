import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: 'WordPress Development',
      category: 'wordpress',
      description: 'Get powerful, custom WordPress websites with responsive design, plugin integration, and SEO-friendly development.',
      image: '/uploads/2024/12/Peak-View-roofing-1024x768.webp',
      tags: ['WordPress', 'Custom Theme', 'Responsive Design'],
      link: '/portfolio/wordpress'
    },
    {
      id: 2,
      title: 'Shopify Development',
      category: 'shopify',
      description: 'Launch and scale your online store with expert Shopify development services and custom themes.',
      image: '/uploads/2024/12/hiphop-1024x768.webp',
      tags: ['Shopify', 'E-commerce', 'Custom Themes'],
      link: '/portfolio/shopify'
    },
    {
      id: 3,
      title: 'Graphic Designing',
      category: 'graphic-designing',
      description: 'Stunning graphic design work with innovative design solutions that communicate your brand\'s message.',
      image: '/uploads/2024/12/Nextgen-1024x756.webp',
      tags: ['Branding', 'Logo Design', 'Creative Design'],
      link: '/portfolio/graphic-designing'
    },
    {
      id: 4,
      title: 'Squarespace / Wix',
      category: 'squarespace-wix',
      description: 'Professional Squarespace and Wix website development services for beautiful, functional websites.',
      image: '/uploads/2024/12/Chapter-1-Academy-1024x768.webp',
      tags: ['Squarespace', 'Wix', 'Website Development'],
      link: '/portfolio/squarespace-wix'
    },
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'wordpress', name: 'WordPress' },
    { id: 'shopify', name: 'Shopify' },
    { id: 'graphic-designing', name: 'Graphic Designing' },
    { id: 'squarespace-wix', name: 'Squarespace / Wix' },
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

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
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Our Work
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              Portfolio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Explore our collection of successful projects across WordPress, Shopify, 
              Graphic Design, and Custom Web Development
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 z-10">
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all ${
                  activeFilter === category.id
                    ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.error('Failed to load image:', item.image);
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center"><p class="text-slate-500 text-sm">Image not available</p></div>';
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-sky-500/90 backdrop-blur-sm text-white text-xs font-semibold">
                      {item.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <Link
                    to={item.link}
                    className="inline-flex items-center gap-2 text-sky-500 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    View Projects
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl text-slate-600 mb-4">No projects found in this category.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="text-sky-500 font-semibold hover:text-blue-600"
              >
                View All Projects
              </button>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            className="mt-20 text-center bg-gradient-to-br from-sky-50 to-blue-50 p-12 rounded-2xl border border-slate-200 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Ready to Start Your <span className="text-sky-500">Project?</span>
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expert team and proven track record.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link
                to="/#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio

