import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Full Stack Development', path: '/services/full-stack-development' },
      { name: 'E-commerce Solutions', path: '/services/ecommerce' },
      { name: 'UI/UX Design', path: '/services/ui-ux-design' },
      { name: 'SEO Optimization', path: '/services/seo' },
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Work', path: '/portfolio' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    social: [
      { name: 'LinkedIn', url: '#' },
      { name: 'Twitter', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'Behance', url: '#' },
    ]
  }

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden pt-20 pb-10">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                DigitalisGlobal.
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md">
              We build digital experiences that matter. From complex web applications to stunning brand identities, we help businesses grow in the digital age.
            </p>
            
            {/* Newsletter Input */}
            <div className="relative max-w-md">
              <input 
                type="email" 
                placeholder="Subscribe to our newsletter" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-32 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-slate-900 px-6 rounded-full text-sm font-semibold hover:bg-slate-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-[1px] bg-blue-500 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.path}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Contact */}
            <div>
              <h3 className="text-white font-semibold mb-6">Connect</h3>
              <ul className="space-y-4 mb-8">
                {footerLinks.social.map((link, idx) => (
                  <li key={idx}>
                    <a 
                      href={link.url}
                      className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                      {link.name}
                      <svg className="w-3 h-3 -mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="text-slate-400 text-sm">
                <p>hello@digitalisglobal.com</p>
                <p>+971 50 123 4567</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} Digitalis Global. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
        
        {/* Massive Background Text Effect */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none opacity-[0.03]">
           <h1 className="text-[12rem] md:text-[16rem] font-bold text-center leading-none text-white tracking-tighter select-none whitespace-nowrap">
             DIGITALIS
           </h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer