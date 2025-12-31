import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Thanks Digitalis for all their work on my websites, Highly recommended their services to anyone. They try really hard to please you. Very happy with their work thanks again.",
      author: "Gergia Patro.",
      role: "Founder Of Gskin",
      rating: 5,
      image: '/gergia.webp'
    },
    {
      quote: "Digitalis delivered quite quickly and accurately with my brief. Very happy with the output. Thanks team.",
      author: "Issa Rifai.",
      role: "Dwelleth Interpersonal Consulting Founder",
      rating: 5,
      image: '/issa.webp'
    },
    {
      quote: "Team Digitalis was very responsive. And got the job done in few minutes! Would definitely hire them again.",
      author: "Kay P.",
      role: "Noodz Boutique Founder",
      rating: 5,
      image: '/kay%20p.webp'
    },
    {
      quote: "Visually appealing and user-friendly. Thrilled with the end result.",
      author: "Fahde Yousif.",
      role: "Golden Eagle Security Founder",
      rating: 5,
      image: '/fahde.webp'
    },
    {
      quote: "Exceptional Website design and seamless under experience. Highly Recommended.",
      author: "Jane J.",
      role: "The Only Collagen Complex Founder",
      rating: 5,
      image: '/jane.webp'
    },
    {
      quote: "Team Digitalis worked hard and well on this gig and I'm very pleased with the result. Thanks",
      author: "Anne S.",
      role: "Anneskyvington Store Founder",
      rating: 5,
      image: '/anne.webp'
    },
    {
      quote: "Impressive attention to detail and prompt delivery. The website surpassed my expectations.",
      author: "Kattie Perry",
      role: "Kattie Perry Store Founder",
      rating: 5,
      image: '/kattie.webp'
    },
    {
      quote: "Saad and his team are very responsive and helpful; Will use again.",
      author: "Norman N.",
      role: "CEO Interlink Services",
      rating: 5,
      image: '/norman.webp'
    },
    {
      quote: "Fantastic Workshare my vision, Great communicator takes pride in his work; Highly recommended.",
      author: "Veronica.",
      role: "AIRB&BOO Founder",
      rating: 5,
      image: '/veronica.webp'
    },
    {
      quote: "Thanks Saad.Amazing work.",
      author: "Anna C.",
      role: "Imagine Heealing Founder",
      rating: 5,
      image: '/anna.webp'
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Get indices for left, center, and right testimonials
  const getLeftIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length
  const getCenterIndex = () => currentIndex
  const getRightIndex = () => (currentIndex + 1) % testimonials.length

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
    <section className="relative w-full bg-gradient-to-br from-white to-slate-50 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

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
            Testimonial
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            People talk about{' '}
            <span className="text-teal-600">us</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel - 3 Column Layout */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center">
            {/* Left Testimonial - Small */}
            <AnimatePresence mode="wait">
              <motion.div
                key={getLeftIndex()}
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="hidden md:block bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 md:col-span-3"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[getLeftIndex()].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4 line-clamp-3">
                  "{testimonials[getLeftIndex()].quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  {testimonials[getLeftIndex()].image ? (
                    <img
                      src={testimonials[getLeftIndex()].image}
                      alt={testimonials[getLeftIndex()].author}
                      className="w-8 h-8 rounded-full object-cover border-2 border-teal-400"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm ${testimonials[getLeftIndex()].image ? 'hidden' : ''}`}>
                    {testimonials[getLeftIndex()].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {testimonials[getLeftIndex()].author}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {testimonials[getLeftIndex()].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Center Testimonial - Large */}
            <AnimatePresence mode="wait">
              <motion.div
                key={getCenterIndex()}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200 md:col-span-6"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="text-4xl text-teal-600/20">"</div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(testimonials[getCenterIndex()].rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </div>

                <p className="text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed mb-4 sm:mb-6 font-medium">
                  {testimonials[getCenterIndex()].quote}
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  {testimonials[getCenterIndex()].image ? (
                    <img
                      src={testimonials[getCenterIndex()].image}
                      alt={testimonials[getCenterIndex()].author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-teal-400 flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-base flex-shrink-0 ${testimonials[getCenterIndex()].image ? 'hidden' : ''}`}>
                    {testimonials[getCenterIndex()].author.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                      {testimonials[getCenterIndex()].author}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 truncate">
                      {testimonials[getCenterIndex()].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Testimonial - Small */}
            <AnimatePresence mode="wait">
              <motion.div
                key={getRightIndex()}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="hidden md:block bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-200 md:col-span-3"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[getRightIndex()].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-4 line-clamp-3">
                  "{testimonials[getRightIndex()].quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  {testimonials[getRightIndex()].image ? (
                    <img
                      src={testimonials[getRightIndex()].image}
                      alt={testimonials[getRightIndex()].author}
                      className="w-8 h-8 rounded-full object-cover border-2 border-teal-400"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                  ) : null}
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm ${testimonials[getRightIndex()].image ? 'hidden' : ''}`}>
                    {testimonials[getRightIndex()].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {testimonials[getRightIndex()].author}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {testimonials[getRightIndex()].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-all hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center text-slate-600 hover:text-teal-600 hover:border-teal-300 transition-all hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-teal-600 w-8'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials

