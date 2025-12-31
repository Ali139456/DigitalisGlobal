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
    <section className="relative w-full bg-gradient-to-br from-slate-50 to-white py-16 sm:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Trusted by <span className="text-teal-600">Leading Brands</span>
          </h2>
          <p className="text-slate-600 text-lg">We're proud to work with innovative companies worldwide</p>
        </div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
              className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16"
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
                <div
                  key={`${client.name}-${index}`}
                  className="flex items-center justify-center p-4 sm:p-6 transition-all duration-300 hover:scale-110 flex-shrink-0"
                  style={{ width: '200px' }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full h-auto max-h-20 sm:max-h-24 md:max-h-28 object-contain filter brightness-100 contrast-100 saturate-100"
                    style={{ filter: 'none' }}
                    onError={(e) => {
                      e.target.style.display = 'none'
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos

