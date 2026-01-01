import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()

  const servicesData = {
    'full-stack-development': {
      title: 'Full Stack Development',
      description: 'Comprehensive end-to-end development solutions that cover both frontend and backend technologies. We build scalable, performant applications that grow with your business.',
      longDescription: 'Our full stack development services encompass everything from user interface design to server infrastructure. We create seamless experiences that work flawlessly across all platforms and devices.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
      icon: '🧩',
      features: [
        {
          title: 'Custom Web Applications',
          desc: 'Tailored solutions built to your exact specifications'
        },
        {
          title: 'API Development',
          desc: 'RESTful and GraphQL APIs for seamless integrations'
        },
        {
          title: 'Database Design',
          desc: 'Optimized database architecture for performance'
        },
        {
          title: 'Cloud Deployment',
          desc: 'Scalable infrastructure on AWS, Azure, or GCP'
        },
        {
          title: 'Performance Optimization',
          desc: 'Fast loading times and smooth user experiences'
        },
        {
          title: 'Security Implementation',
          desc: 'Enterprise-grade security and best practices'
        }
      ],
      technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'TypeScript']
    },
    'website-development': {
      title: 'Website Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences across all devices. Fast, beautiful, and built for conversion.',
      longDescription: 'We create websites that not only look stunning but also perform exceptionally. Every site we build is optimized for speed, SEO, and user engagement.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      icon: '🌐',
      features: [
        {
          title: 'Responsive Design',
          desc: 'Perfect display on desktop, tablet, and mobile'
        },
        {
          title: 'SEO Optimization',
          desc: 'Built-in SEO to rank higher in search results'
        },
        {
          title: 'Fast Loading',
          desc: 'Optimized performance for instant page loads'
        },
        {
          title: 'Cross-Browser Compatible',
          desc: 'Works flawlessly on all modern browsers'
        },
        {
          title: 'CMS Integration',
          desc: 'Easy content management with WordPress or custom CMS'
        },
        {
          title: 'E-commerce Ready',
          desc: 'Full shopping cart and payment integration'
        }
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'WordPress', 'Shopify', 'Next.js']
    },
    'ecommerce': {
      title: 'Ecommerce Solutions',
      description: 'Powerful e-commerce platforms that drive sales and provide seamless shopping experiences. From setup to launch, we handle it all.',
      longDescription: 'Transform your business with a custom e-commerce solution that converts visitors into customers. We build stores that are both beautiful and functional.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      icon: '🛒',
      features: [
        {
          title: 'Store Setup',
          desc: 'Complete online store configuration and customization'
        },
        {
          title: 'Payment Integration',
          desc: 'Secure payment gateways like Stripe and PayPal'
        },
        {
          title: 'Inventory Management',
          desc: 'Real-time stock tracking and automated alerts'
        },
        {
          title: 'Order Processing',
          desc: 'Streamlined checkout and order fulfillment'
        },
        {
          title: 'Customer Accounts',
          desc: 'User profiles, order history, and wishlists'
        },
        {
          title: 'Analytics & Reporting',
          desc: 'Detailed insights into sales and customer behavior'
        }
      ],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'React', 'Node.js', 'Stripe', 'PayPal']
    },
    'graphic-designing': {
      title: 'Graphic Designing',
      description: 'Creative visual designs that capture your brand essence and communicate your message effectively. From logos to marketing materials.',
      longDescription: 'We create visually stunning designs that tell your story and connect with your audience. Every design is crafted to make a lasting impression.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      icon: '🎨',
      features: [
        {
          title: 'Logo & Branding',
          desc: 'Memorable logos and complete brand identity systems'
        },
        {
          title: 'Marketing Materials',
          desc: 'Brochures, flyers, and promotional designs'
        },
        {
          title: 'Social Media Graphics',
          desc: 'Eye-catching posts and stories for all platforms'
        },
        {
          title: 'Print Design',
          desc: 'Business cards, letterheads, and packaging'
        },
        {
          title: 'UI/UX Mockups',
          desc: 'High-fidelity designs for web and mobile apps'
        },
        {
          title: 'Brand Identity',
          desc: 'Complete brand guidelines and style guides'
        }
      ],
      technologies: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'Figma', 'Sketch', 'Canva Pro']
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase brand visibility and drive conversions. Data-driven strategies that deliver results.',
      longDescription: 'We combine creativity with analytics to create marketing campaigns that not only look great but also drive measurable business growth.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      icon: '📣',
      features: [
        {
          title: 'Social Media Marketing',
          desc: 'Engaging content and community management'
        },
        {
          title: 'Content Marketing',
          desc: 'Blog posts, articles, and content strategy'
        },
        {
          title: 'Email Campaigns',
          desc: 'Automated email sequences and newsletters'
        },
        {
          title: 'PPC Advertising',
          desc: 'Google Ads and social media ad campaigns'
        },
        {
          title: 'Marketing Analytics',
          desc: 'Track performance and optimize campaigns'
        },
        {
          title: 'Brand Strategy',
          desc: 'Complete brand positioning and messaging'
        }
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'Google Analytics', 'Hootsuite']
    },
    'seo': {
      title: 'SEO Services',
      description: 'Search engine optimization that improves your website\'s visibility and drives organic traffic. Sustainable growth through proven SEO strategies.',
      longDescription: 'We help your website rank higher in search results, bringing more qualified visitors to your site without paid advertising.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      icon: '🔎',
      features: [
        {
          title: 'Keyword Research',
          desc: 'Identify high-value keywords for your industry'
        },
        {
          title: 'On-Page SEO',
          desc: 'Optimize content, meta tags, and structure'
        },
        {
          title: 'Technical SEO',
          desc: 'Site speed, mobile-friendliness, and indexing'
        },
        {
          title: 'Link Building',
          desc: 'Quality backlinks from authoritative sites'
        },
        {
          title: 'Content Optimization',
          desc: 'SEO-friendly content that ranks and converts'
        },
        {
          title: 'Local SEO',
          desc: 'Get found by customers in your area'
        }
      ],
      technologies: ['Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Google Analytics']
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences. We design products people love to use.',
      longDescription: 'Great design is invisible. We create interfaces that feel natural and effortless, guiding users seamlessly through their journey.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      icon: '🧠',
      features: [
        {
          title: 'User Research',
          desc: 'Understand your users through interviews and surveys'
        },
        {
          title: 'Wireframing',
          desc: 'Low and high-fidelity prototypes'
        },
        {
          title: 'UI Design',
          desc: 'Beautiful, modern interface designs'
        },
        {
          title: 'Usability Testing',
          desc: 'Validate designs with real users'
        },
        {
          title: 'Design Systems',
          desc: 'Consistent component libraries and style guides'
        },
        {
          title: 'Interaction Design',
          desc: 'Smooth animations and micro-interactions'
        }
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer']
    },
    'video-editing': {
      title: 'Video Editing',
      description: 'Professional video production and editing services that bring your stories to life. From concept to final cut, we handle everything.',
      longDescription: 'We transform raw footage into compelling narratives that engage, inform, and inspire your audience.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
      icon: '🎬',
      features: [
        {
          title: 'Video Production',
          desc: 'Full production services from planning to shooting'
        },
        {
          title: 'Post-Production',
          desc: 'Professional editing and color correction'
        },
        {
          title: 'Motion Graphics',
          desc: 'Animated titles, transitions, and effects'
        },
        {
          title: 'Color Grading',
          desc: 'Cinematic color correction and enhancement'
        },
        {
          title: 'Sound Design',
          desc: 'Audio mixing, music, and sound effects'
        },
        {
          title: 'Video Optimization',
          desc: 'Optimized for web, social media, and streaming'
        }
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'DaVinci Resolve', 'Motion']
    }
  }

  const service = servicesData[serviceId]

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-teal-700 hover:shadow-xl"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    )
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${service.image})` }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        
        {/* Decorative Blur */}
        <div className="absolute inset-0 bg-teal-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors"
            >
              <span>←</span>
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl" aria-hidden="true">{service.icon}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {service.title}
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed px-4">
              {service.description}
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-20">
        {/* Long Description */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl px-4">
            {service.longDescription}
          </p>
        </motion.section>

        {/* Features Grid */}
        <motion.section
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 text-center px-4">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-semibold group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-6 sm:mb-8 text-center px-4">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {service.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-medium text-sm border border-teal-200 hover:bg-teal-100 hover:border-teal-300 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="relative rounded-3xl bg-gradient-to-br from-teal-600 to-teal-700 p-12 md:p-16 text-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our {service.title} services.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-600 shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
              <motion.button
                onClick={() => navigate('/')}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Services
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceDetail
