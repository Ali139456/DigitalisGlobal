import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedTestimonials({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full">
      {/* Left Arrow - Up */}
      <button
        onClick={prevTestimonial}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-300 shadow-lg flex items-center justify-center text-slate-700 hover:text-sky-500 hover:border-sky-400 hover:bg-sky-50 transition-all z-10"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Right Arrow - Down */}
      <button
        onClick={nextTestimonial}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-slate-300 shadow-lg flex items-center justify-center text-slate-700 hover:text-sky-500 hover:border-sky-400 hover:bg-sky-50 transition-all z-10"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className="mx-12 md:mx-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-slate-200 relative overflow-hidden min-h-[400px] md:min-h-[450px] flex flex-col"
          >
          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-50 to-blue-50 rounded-bl-full opacity-50" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-slate-50 to-sky-50 rounded-tr-full opacity-50" />
          
          {/* Decorative lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          
          {/* Quote icon decoration */}
          <div className="absolute top-6 left-6 text-6xl text-sky-100 font-serif">"</div>
          <div className="absolute bottom-6 right-6 text-6xl text-blue-100 font-serif rotate-180">"</div>
          
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-6 relative"
            >
              <div className="relative">
                {currentTestimonial.image ? (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.author}
                    className="w-24 h-24 rounded-full object-cover border-4 border-slate-200 shadow-lg"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                ) : null}
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br from-slate-500 to-slate-700 flex items-center justify-center text-white font-bold text-3xl shadow-lg ${
                    currentTestimonial.image ? "hidden" : ""
                  }`}
                >
                  {currentTestimonial.author.charAt(0)}
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-sky-200 animate-pulse" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl lg:text-2xl text-slate-900 font-medium leading-relaxed mb-8 relative z-10"
            >
              <span className="text-sky-500 text-3xl font-serif mr-2">"</span>
              {currentTestimonial.quote}
              <span className="text-sky-500 text-3xl font-serif ml-2">"</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center pt-6 border-t-2 border-slate-200 w-full"
            >
              <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-1">
                {currentTestimonial.author}
              </h4>
              <p className="text-sm md:text-base text-slate-600">
                {currentTestimonial.role}
              </p>
              {/* Decorative line */}
              <div className="mt-4 w-16 h-1 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full" />
            </motion.div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-slate-900 w-8"
                : "bg-slate-300 w-2 hover:bg-slate-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
