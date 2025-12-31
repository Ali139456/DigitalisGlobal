import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/#about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '#blog' },
    ],
    services: [
      { name: 'Website Development', href: '/service/website-development' },
      { name: 'Ecommerce', href: '/service/ecommerce' },
      { name: 'Graphic Designing', href: '/service/graphic-designing' },
      { name: 'SEO', href: '/service/seo' },
      { name: 'UI/UX Design', href: '/service/ui-ux-design' },
    ],
    portfolio: [
      { name: 'WordPress', href: '#portfolio' },
      { name: 'Shopify', href: '#portfolio' },
      { name: 'Graphic Designing', href: '#portfolio' },
      { name: 'Other', href: '#portfolio' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: 'https://facebook.com' },
    { name: 'Instagram', icon: '📷', href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: '💼', href: 'https://linkedin.com' },
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-16">
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
                src="/uploads/2023/12/cropped-cropped-DG-Logo-1.webp" 
                alt="Digitalis Global Logo" 
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900" style={{ display: 'none' }}>digitalis</h2>
            </Link>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-md">
              Digitalis Global is a leading platform for web development, graphic design, and marketing.
            </p>
            <p className="text-teal-600 font-semibold mb-6">
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
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-teal-600 flex items-center justify-center text-lg transition-all backdrop-blur-sm border border-slate-200 hover:border-teal-500 hover:text-white"
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
                      className="text-slate-600 hover:text-teal-600 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-teal-600 transition-colors text-sm"
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
                    className="text-slate-600 hover:text-teal-600 transition-colors text-sm"
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
                  <a
                    href={item.href}
                    className="text-slate-600 hover:text-teal-600 transition-colors text-sm"
                  >
                    {item.name}
                  </a>
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
              <span className="text-teal-600 text-xl">📍</span>
              <div>
                <p className="text-slate-600 text-sm">
                  Sydney, Australia, Finland, Germany
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">✉️</span>
              <div>
                <a
                  href="mailto:info@digitalisglobal.com"
                  className="text-slate-600 hover:text-teal-600 transition-colors text-sm"
                >
                  info@digitalisglobal.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-teal-600 text-xl">📞</span>
              <div>
                <a
                  href="tel:+61466312363"
                  className="text-slate-600 hover:text-teal-600 transition-colors text-sm block"
                >
                  +61 466 312 363
                </a>
                <a
                  href="tel:+358417217377"
                  className="text-slate-600 hover:text-teal-600 transition-colors text-sm block"
                >
                  +358 41 7217377
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
              className="text-slate-500 hover:text-teal-600 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-slate-500 hover:text-teal-600 transition-colors text-sm"
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

