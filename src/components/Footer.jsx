import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    links: [
      { name: 'About', href: '/about/about-us' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Website Development', href: '/service/website-development' },
      { name: 'Ecommerce', href: '/service/ecommerce' },
      { name: 'Graphic Designing', href: '/service/graphic-designing' },
      { name: 'SEO', href: '/service/seo' },
      { name: 'UI/UX Design', href: '/service/ui-ux-design' },
    ],
    portfolio: [
      { name: 'WordPress', href: '/portfolio/wordpress' },
      { name: 'Shopify', href: '/portfolio/shopify' },
      { name: 'Graphic Designing', href: '/portfolio/graphic-designing' },
      { name: 'Squarespace / Wix', href: '/portfolio/squarespace-wix' },
    ],
  }

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      href: 'https://facebook.com' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      href: 'https://instagram.com' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      href: 'https://linkedin.com' 
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

  return (
    <footer className="relative w-full bg-gradient-to-br from-white via-slate-50 to-white text-slate-900 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Brand Column */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/dsd.png.png" 
                alt="Digitalis Global Logo" 
                className="h-10 sm:h-12 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </Link>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
              Digitalis Global is a leading platform for web development, graphic design, and marketing.
            </p>
            <p className="text-sky-500 font-semibold mb-6">
              Design | Develop | Market
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-sky-500 flex items-center justify-center transition-all backdrop-blur-sm border border-slate-200 hover:border-sky-500 text-slate-600 hover:text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Links</h3>
            <ul className="space-y-3">
              {footerLinks.links.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-slate-600 hover:text-sky-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-sky-500 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    className="text-slate-600 hover:text-sky-500 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Portfolio Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Portfolio</h3>
            <ul className="space-y-3">
              {footerLinks.portfolio.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-slate-600 hover:text-sky-500 transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="border-t border-slate-200 pt-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-3 sm:mb-4">Contact Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <span className="text-sky-500 text-xl">📍</span>
              <div>
                <p className="text-slate-600 text-sm">
                  Sydney, Australia, UK, Finland, Germany
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sky-500 text-xl">✉️</span>
              <div>
                <a
                  href="mailto:info@digitalisglobal.com"
                  className="text-slate-600 hover:text-sky-500 transition-colors text-sm"
                >
                  info@digitalisglobal.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-sky-500 text-xl">📞</span>
              <div>
                <a
                  href="tel:+61466312363"
                  className="text-slate-600 hover:text-sky-500 transition-colors text-sm block"
                >
                  +61 466 312 363
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-slate-500 text-sm text-center md:text-left">
            Copyright ©{currentYear} Digitalis Global. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-slate-500 hover:text-sky-500 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-slate-500 hover:text-sky-500 transition-colors text-sm"
            >
              Terms and Conditions
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

