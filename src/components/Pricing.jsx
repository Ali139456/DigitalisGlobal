import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Custom',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic website development',
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO setup',
        'Email support',
        '3 months maintenance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 'Custom',
      description: 'Ideal for growing businesses',
      features: [
        'Full website development',
        'Unlimited pages',
        'Custom design',
        'Advanced SEO',
        'E-commerce integration',
        'Priority support',
        '6 months maintenance',
        'Content management system'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations and complex projects',
      features: [
        'Complete digital solution',
        'Custom web application',
        'Multi-platform development',
        'Dedicated project manager',
        '24/7 support',
        '12 months maintenance',
        'Performance optimization',
        'Security audit',
        'Training & documentation'
      ],
      popular: false
    },
  ]

  const services = [
    {
      category: 'Website Development',
      items: [
        { service: 'Basic Website (5 pages)', price: 'Starting at $1,500' },
        { service: 'Business Website (10 pages)', price: 'Starting at $3,000' },
        { service: 'E-commerce Website', price: 'Starting at $5,000' },
        { service: 'Custom Web Application', price: 'Custom Quote' },
      ]
    },
    {
      category: 'Design Services',
      items: [
        { service: 'Logo Design', price: 'Starting at $300' },
        { service: 'Brand Identity Package', price: 'Starting at $1,500' },
        { service: 'UI/UX Design', price: 'Starting at $2,000' },
        { service: 'Social Media Graphics', price: 'Starting at $500' },
      ]
    },
    {
      category: 'Digital Marketing',
      items: [
        { service: 'SEO Setup & Optimization', price: 'Starting at $800/month' },
        { service: 'Social Media Management', price: 'Starting at $1,200/month' },
        { service: 'Google Ads Management', price: 'Starting at $1,500/month' },
        { service: 'Content Marketing', price: 'Starting at $1,000/month' },
      ]
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
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-teal-600 mb-8 transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-4 sm:mb-6 px-4">
              Transparent <span className="text-teal-600">Pricing</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              We offer flexible pricing options tailored to your needs. All projects are custom-quoted based on your specific requirements.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 px-4">
              Choose Your Plan
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Select a plan that fits your business needs, or contact us for a custom quote.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative p-8 rounded-2xl border-2 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-br from-teal-50 to-white border-teal-400 shadow-xl scale-105'
                    : 'bg-white border-slate-200 hover:border-teal-300 hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal-600 text-white text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-bold text-teal-600 mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm sm:text-base text-slate-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-teal-600 mt-1">✓</span>
                      <span className="text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className={`w-full px-6 py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? 'bg-teal-600 text-white hover:bg-teal-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Pricing */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Service Pricing
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Detailed pricing for individual services. All prices are starting points and may vary based on project scope.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {services.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <span className="text-slate-700 font-medium">
                        {item.service}
                      </span>
                      <span className="text-teal-600 font-semibold">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center p-12 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us for a personalized quote tailored to your specific needs and budget.
            </p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-600 shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Quote
            </motion.a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Pricing

