import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const services = [
  {
    title: "Full Stack Development",
    desc: "Modern web apps with scalable backend and clean UI.",
    icon: "🧩",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
  },
  {
    title: "Website Development",
    desc: "Fast, responsive websites built for conversion.",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
  },
  {
    title: "Ecommerce",
    desc: "Shopify / WooCommerce / custom stores that sell.",
    icon: "🛒",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    title: "Graphic Designing",
    desc: "Branding, social media creatives, and marketing assets.",
    icon: "🎨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    title: "Digital Marketing",
    desc: "Growth campaigns across paid + organic channels.",
    icon: "📣",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "SEO",
    desc: "Technical + content SEO to rank and convert.",
    icon: "🔎",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "UI/UX Design",
    desc: "User-first design systems and product experiences.",
    icon: "🧠",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    title: "Video Editing",
    desc: "Short-form, ads, explainers, and YouTube edits.",
    icon: "🎬",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  },
].map(service => ({
  ...service,
  slug: generateSlug(service.title)
}));

function ServiceCard({ item, idx }) {
  return (
    <Link
      to={`/service/${item.slug}`}
      className={[
        "group relative block w-full overflow-hidden rounded-3xl border border-black/5 shadow-sm",
        "transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
        "min-h-[260px] lg:min-h-[260px]",
        "isolate will-change-transform",
      ].join(" ")}
      style={{
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        contain: 'layout style paint',
        WebkitBorderRadius: '1.5rem',
        borderRadius: '1.5rem',
      }}
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 rounded-3xl bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
        style={{ 
          backgroundImage: `url(${item.image})`,
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          WebkitBorderRadius: '1.5rem',
          borderRadius: '1.5rem',
        }}
      />
      
      {/* Dark overlay gradient */}
      <div 
        className="absolute inset-0 rounded-3xl bg-gradient-to-b from-black/70 via-black/50 to-black/80 group-hover:bg-sky-500/90 transition-colors duration-300"
        style={{
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)',
          WebkitBorderRadius: '1.5rem',
          borderRadius: '1.5rem',
        }}
      />

      {/* decorative blur blob */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-200/40 blur-3xl transition-opacity duration-300 group-hover:opacity-70 pointer-events-none" />

      {/* content */}
      <div className="relative flex h-full flex-col p-6 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white">
            <span aria-hidden="true">{item.icon}</span>
          </div>

          <span className="text-sm text-white/70 transition-colors group-hover:text-white">
            →
          </span>
        </div>

        <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
          {item.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-white/90">
          {item.desc}
        </p>
      </div>

      {/* Learn more - appears in center on hover */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{ 
          WebkitTransform: 'translateZ(0)',
          transform: 'translateZ(0)', 
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <span className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-500 font-semibold rounded-full border-2 border-white shadow-lg transition-all duration-200">
          Learn more
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export default function FeaturedServices() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  // Arrange cards for 2,3,3 layout across 3 columns
  // Col1: 2 cards (0, 4) | Col2: 3 cards (1, 5, 7) | Col3: 3 cards (2, 6, 3)
  const orderedServices = [
    services[0], // Col 1, card 1
    services[1], // Col 2, card 1
    services[2], // Col 3, card 1
    services[3], // Col 3, card 3
    services[4], // Col 1, card 2
    services[5], // Col 2, card 2
    services[6], // Col 3, card 2
    services[7], // Col 2, card 3
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-white via-slate-50/30 to-white overflow-hidden">
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
      
      <div className="relative mx-auto w-full px-6 py-20 sm:px-8 lg:px-16 xl:px-20">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
            >
              {/* Left copy - positioned at top left */}
              <motion.div
                className="lg:col-span-5 text-center lg:text-left"
                variants={leftContentVariants}
              >
            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Featured Services
            </motion.p>

                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  Services that help you go from{" "}
                  <span className="text-sky-500">concept</span> to{" "}
                  <span className="text-sky-500">completion</span>
                </motion.h2>

                <motion.p
                  className="text-sm sm:text-base leading-relaxed text-slate-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  Choose from design, development, marketing, and emerging tech.
                  Each service is delivered with clear milestones, fast iteration,
                  and a focus on measurable outcomes.
                </motion.p>

                <motion.div
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
              <motion.a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-400 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </motion.div>

            {/* Development Related Icons */}
            <motion.div
              className="mt-12 lg:mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {/* Code Icon */}
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <span className="text-sm font-medium">Code</span>
              </div>

              {/* Browser Icon */}
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span className="text-sm font-medium">Web</span>
              </div>

              {/* Mobile Icon */}
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Mobile</span>
              </div>

              {/* Database Icon */}
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
                <span className="text-sm font-medium">Database</span>
              </div>

              {/* Cloud Icon */}
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                <span className="text-sm font-medium">Cloud</span>
              </div>

              {/* Rocket Icon */}
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-8 h-8 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm font-medium">Fast</span>
              </div>
            </motion.div>

          </motion.div>

              {/* Right masonry grid - 3 columns with 2,3,3 pattern - Stepped/Offset layout */}
              <div className="lg:col-span-7">
                <div
                  id="services"
                  className="hidden lg:flex flex-col sm:flex-row gap-4 relative"
                >
                  {/* Column 1: 2 cards - starts lower */}
                  <div className="flex-1 flex flex-col gap-4 translate-y-16">
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[0]} idx={0} />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[4]} idx={4} />
                    </motion.div>
                  </div>
                  
                  {/* Column 2: 3 cards - starts slightly higher */}
                  <div className="flex-1 flex flex-col gap-4 translate-y-8">
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[1]} idx={1} />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[5]} idx={5} />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[7]} idx={7} />
                    </motion.div>
                  </div>
                  
                  {/* Column 3: 3 cards - starts even higher */}
                  <div className="flex-1 flex flex-col gap-4 translate-y-0">
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[2]} idx={2} />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[6]} idx={6} />
                    </motion.div>
                    <motion.div variants={cardVariants}>
                      <ServiceCard item={services[3]} idx={3} />
                    </motion.div>
                  </div>
                </div>
                
                {/* Mobile/Tablet Grid - 2 columns */}
                <div
                  className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {services.map((service, idx) => (
                    <motion.div key={idx} variants={cardVariants}>
                      <ServiceCard item={service} idx={idx} />
                    </motion.div>
                  ))}
                </div>
              </div>
        </motion.div>
      </div>

      {/* Decorative glows */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-sky-100/40 to-transparent" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-full w-32 bg-gradient-to-r from-blue-100/30 to-transparent" />
    </section>
  );
}
