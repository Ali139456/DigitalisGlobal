import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedTestimonials } from './ui/animated-testimonials'

const Testimonials = () => {

  const testimonials = [
    {
      quote: "Thanks Digitalis for all their work on my websites, Highly recommended their services to anyone. They try really hard to please you. Very happy with their work thanks again.",
      author: "Gergia Patro.",
      role: "Founder Of Gskin",
      image: '/gergia.webp'
    },
    {
      quote: "Digitalis delivered quite quickly and accurately with my brief. Very happy with the output. Thanks team.",
      author: "Issa Rifai.",
      role: "Dwelleth Interpersonal Consulting Founder",
      image: '/issa.webp'
    },
    {
      quote: "Team Digitalis was very responsive. And got the job done in few minutes! Would definitely hire them again.",
      author: "Kay P.",
      role: "Noodz Boutique Founder",
      image: '/kay%20p.webp'
    },
    {
      quote: "Visually appealing and user-friendly. Thrilled with the end result.",
      author: "Fahde Yousif.",
      role: "Golden Eagle Security Founder",
      image: '/fahde.webp'
    },
    {
      quote: "Exceptional Website design and seamless under experience. Highly Recommended.",
      author: "Jane J.",
      role: "The Only Collagen Complex Founder",
      image: '/jane.webp'
    },
    {
      quote: "Team Digitalis worked hard and well on this gig and I'm very pleased with the result. Thanks",
      author: "Anne S.",
      role: "Anneskyvington Store Founder",
      image: '/anne.webp'
    },
    {
      quote: "Impressive attention to detail and prompt delivery. The website surpassed my expectations.",
      author: "Kattie Perry",
      role: "Kattie Perry Store Founder",
      image: '/kattie.webp'
    },
    {
      quote: "Saad and his team are very responsive and helpful; Will use again.",
      author: "Norman N.",
      role: "CEO Interlink Services",
      image: '/norman.webp'
    },
    {
      quote: "Fantastic Workshare my vision, Great communicator takes pride in his work; Highly recommended.",
      author: "Veronica.",
      role: "AIRB&BOO Founder",
      image: '/veronica.webp'
    },
    {
      quote: "Thanks Saad.Amazing work.",
      author: "Anna C.",
      role: "Imagine Heealing Founder",
      image: '/anna.webp'
    },
  ]

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

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12">
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
            Testimonial
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            People talk about{' '}
            <span className="text-sky-500">us</span>
          </h2>
        </motion.div>

        {/* Animated Testimonials */}
        <div className="max-w-5xl mx-auto">
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}

export default Testimonials

