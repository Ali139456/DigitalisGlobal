import React from 'react'
import { motion } from 'framer-motion'

const ClientLogos = () => {
  const clientLogos = [
    {
      name: 'Client Logo 1',
      logo: '/46a5db53233a2e81212bbd01bfa23fcc-300x89.webp',
    },
    {
      name: 'Client Logo 2',
      logo: '/26d3fefd12f4835875061d676e3711ba-300x88.webp',
    },
    {
      name: 'Client Logo 3',
      logo: '/19cf39213c4ea88862748ed06f08d5b4-300x88.webp',
    },
    {
      name: 'Client Logo 4',
      logo: '/9ac160c424a46c79469c0fa9075de3ba-300x89.webp',
    },
    {
      name: 'Client Logo 5',
      logo: '/6e9f56b6411a055549a39650594ee4c6-300x88.webp',
    },
    {
      name: 'Client Logo 6',
      logo: '/2ac7bf310630d06c05c31966d208c0a8-300x88.webp',
    },
    {
      name: 'Client Logo 7',
      logo: '/ec9959caffbe06607a4b62ade39af502-300x88.webp',
    },
    {
      name: 'Client Logo 8',
      logo: '/b1978849e13fea5e245cb5844568fd25-300x88.webp',
    },
  ]

  // Duplicate logos for seamless infinite loop
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos]

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-slate-50/30 to-white py-16 sm:py-20 overflow-hidden">
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
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
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
            Our Clients
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Trusted by <span className="text-sky-500">Leading Brands</span>
          </h2>
          <p className="text-slate-600 text-lg">We're proud to work with innovative companies worldwide</p>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
              className="flex items-center justify-center gap-6 sm:gap-8 md:gap-10"
              initial={{ x: 0 }}
              animate={{ x: '-33.333%' }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedLogos.map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="group flex items-center justify-center p-6 sm:p-8 bg-white rounded-2xl border-2 border-slate-200 shadow-sm hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex-shrink-0"
                  style={{ width: '220px', minHeight: '140px' }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-sky-50 to-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full h-auto max-h-16 sm:max-h-20 md:max-h-24 object-contain relative z-10"
                    style={{ 
                      filter: 'none',
                      WebkitFilter: 'none',
                      opacity: 1,
                      mixBlendMode: 'normal'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

