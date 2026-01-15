import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const faqs = [
    {
      question: 'Does Digitalis Global cover all SDLC phases?',
      answer: 'Yes, Digitalis Global provides comprehensive coverage across all stages of the Software Development Life Cycle (SDLC), including planning, analysis, design, implementation, testing, deployment, and ongoing maintenance and support.'
    },
    {
      question: 'What is your view on spec work?',
      answer: 'At Digitalis Global, we don\'t like the idea of asking designers and developers to do work without pay. It\'s not right. That\'s why all our developers and designers at Digitalis Global get a fair payment for the work they do.'
    },
    {
      question: 'WordPress? Isn\'t that a blogging platform?',
      answer: 'Yes, WordPress began as a blogging platform, but over time it has evolved into a versatile content management system (CMS) that supports a wide range of website types, including blogs, business websites, e-commerce stores, and more.'
    },
    {
      question: 'Does Digitalis Global provide hosting?',
      answer: 'We don\'t but we recommend using Hostinger, BlueHost or GoDaddy to bring you reliable, inexpensive hosting. Just make sure to choose hosting that includes an SSL Certificate, so your site can be an HTTPS secure site.'
    },
    {
      question: 'How does the Satisfaction Guarantee work?',
      answer: 'Our Satisfaction Guarantee ensures that if you are not completely satisfied with our product or service, we will work diligently to address your concerns and, if necessary, provide a refund or an alternative solution.'
    },
    {
      question: 'What currency do I pay in?',
      answer: 'We accept payments in three major currencies: USD (United States Dollar), AUD (Australian Dollar), and Euro.'
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
    <section className="relative w-full bg-gradient-to-br from-white via-slate-50/30 to-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-100/15 to-blue-100/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
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
            Our FAQ
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Frequently asked{' '}
            <span className="text-sky-500">questions</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our FAQs for seamless answers to common queries, whether you're delving 
            into our products, services, or seeking information.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          ref={ref}
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <motion.button
                className="w-full text-left p-6 rounded-2xl bg-white border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all flex items-center justify-between gap-4"
                onClick={() => toggleFAQ(index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-lg md:text-xl font-semibold text-slate-900 pr-8">
                  {index + 1}. {faq.question}
                </h3>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-500 transition-colors group-hover:bg-sky-200"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0">
                      <motion.div
                        className="p-6 rounded-xl bg-sky-50/50 border border-sky-100"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <p className="text-slate-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            Still have questions? We're here to help!
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

