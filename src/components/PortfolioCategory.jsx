import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'

const PortfolioCategory = () => {
  const { category } = useParams()

  const portfolioData = {
    'wordpress': {
      title: 'WordPress Development',
      description: 'Get powerful, custom WordPress websites with Digitalis Global. We specialize in responsive design, plugin integration, theme customization, and SEO-friendly development tailored to your business goals.',
      projects: [
        {
          title: 'Peak View Roofing',
          description: 'At Peak View Roofing Services, we\'re committed to providing high-quality roofing solutions that safeguard homes and exceed customer expectations. Based in the Sutherland Shire, we bring over 20 years of experience, backed by full licensing and insurance, ensuring you receive reliable and professional service. As specialized metal roofers, we handle everything from new roof installations.',
          features: ['Service Overview', 'Responsive Design', 'Contact Forms', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/Peak-View-roofing-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Kare Foundation',
          description: 'Kare had a pure soul and lived to assist those less fortunate, and our aim is to keep her fire burning. She worked with people living with a disability at the time of her passing, and her future goal was to assist people living with a disability worldwide.',
          features: ['Service Overview', 'Accessible Design', 'Contact Information', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/kare-Foundation-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Hakiki',
          description: 'Hakiki is wordpress based web application. It includes product catalog, online shopping functionality, ingredient transparency, educational content or blog, social media integration, and mobile-friendly design.',
          features: ['Product Catalog', 'Online Shopping Functionality', 'Ingredient Transparency', 'Educational Content or Blog', 'Social Media Integration', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/Hakiki-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Es Tanks Australia',
          description: 'Es Tanks Australia is wordpress based web application. It includes service overview, applications and industry solutions, custom tank options, request a quote or contact form, social media integration, and mobile-friendly design.',
          features: ['Service Overview', 'Applications and Industry Solutions', 'Custom Tank Options', 'Request a Quote or Contact Form', 'Social Media Integration', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/Estank-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Esencia Wellness & Spa',
          description: 'Esencia Wellness & Spa is wordpress based web application. It includes service overview, online booking system, client testimonials, special offers, social media integration, and mobile-friendly design.',
          features: ['Service Overview', 'Online Booking System', 'Client Testimonials', 'Special Offers', 'Social Media Integration', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/Essencia-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Coastal Robotic Movers',
          description: 'Coastal Robotic Movers is wordpress based web application. It includes service overview, product showcase, eco-friendly benefits, customer testimonials, social media integration, and mobile-friendly design.',
          features: ['Service Overview', 'Product Showcase', 'Eco-Friendly Benefits', 'Customer Testimonials', 'Social Media Integration', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/Coastal-Robotic-Mowers-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Assure Disability Services',
          description: 'Assure Disability Services is wordpress based web application. It includes service overview, contact information, accessible design, careers section, social media integration, and mobile-friendly design.',
          features: ['Service Overview', 'Contact Information', 'Accessible Design', 'Careers Section', 'Social Media Integration', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/Assure-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Path 2 Lifecare',
          description: 'Path2Lifecare is wordpress based web application. It includes service overview, contact information, accessible design, NDIS integration, social media integration, and mobile-friendly design.',
          features: ['Service Overview', 'Contact Information', 'Accessible Design', 'NDIS Integration', 'Social Media Integration', 'Mobile-Friendly Design'],
          image: '/uploads/2024/12/path-to-life-care-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Outlook Property',
          description: 'Outlook Property is wordpress based web application. It includes property listings, search functionality, property details page, lead capture forms, mobile-friendly design, and language and currency options.',
          features: ['Property Listings', 'Search Functionality', 'Property Details Page', 'Lead Capture Forms', 'Mobile-Friendly Design', 'Language and Currency Options'],
          image: '/uploads/2024/12/Outlook-Property-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Linkedd',
          description: 'Linkedd is wordpress based web application. It offers personalized disability support services, specializes in personal care, domestic assistance, and community engagement, provides skill-building and respite care, focuses on empowering individuals to live independently.',
          features: ['Personalized Disability Support Services', 'Personal Care', 'Domestic Assistance', 'Community Engagement', 'Skill-building and Respite Care', 'Independent Living Support'],
          image: '/uploads/2024/12/linkedd-1024x768.webp',
          status: 'Completed'
        },
      ]
    },
    'shopify': {
      title: 'Shopify Development',
      description: 'Launch and scale your online store with Digitalis Global\'s expert Shopify development services. From custom themes to app integrations and optimization, we deliver seamless Shopify solutions tailored to your brand.',
      projects: [
        {
          title: 'Hiphop',
          description: 'Hiphop is Shopify based web application. It includes login/register, payment gateway integration, products listing, newsletters, search and filters.',
          features: ['Login/Register', 'Payment Gateway Integration', 'Products Listing', 'Newsletters', 'Search and Filters'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Base Performance Co',
          description: 'Base Performance Co is Shopify based web application. It includes products listing, newsletters, search and filters, size guide, login/register, payment gateway integration.',
          features: ['Products Listing', 'Newsletters', 'Search and Filters', 'Size Guide', 'Login/Register', 'Payment Gateway Integration'],
          image: '/uploads/2024/12/Base-Performance-Co-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Singular Official',
          description: 'Singular Official is Shopify based web application. It includes login/register, payment gateway integration, products listing, customer-centric experience, search and filters, newsletters.',
          features: ['Login/Register', 'Payment Gateway Integration', 'Products Listing', 'Customer-Centric Experience', 'Search and Filters', 'Newsletters'],
          image: '/uploads/2024/08/Singular-1024x768.png',
          status: 'Completed'
        },
        {
          title: 'Libra The Label',
          description: 'Libra The Label is Shopify based web application. It includes login/register, payment gateway integration, products listing, customer-centric experience, search and filters, newsletters.',
          features: ['Login/Register', 'Payment Gateway Integration', 'Products Listing', 'Customer-Centric Experience', 'Search and Filters', 'Newsletters'],
          image: '/uploads/2024/08/Libra-the-Label-1024x768.png',
          status: 'Completed'
        },
        {
          title: 'Katie Perry',
          description: 'Ketie Perry is an Australian-based garment online store which have products for men, women and kids. It includes login/register, products listing, search and filters, payment gateways, chat bot, blogs.',
          features: ['Login/Register', 'Products Listing', 'Search and Filters', 'Payment Gateways', 'Chat Bot', 'Blogs'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Puzzle Art Australia',
          description: 'We specialize in crafting exquisite wooden puzzles that transcend the boundaries of mere entertainment and transform into stunning pieces of art, carefully curated from extraordinary experiences.',
          features: ['Product Showcase', 'E-commerce Functionality', 'Custom Design Options', 'Shopping Cart', 'Payment Integration'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Nbluxe',
          description: 'We\'re committed to creating beautiful bridal and special occasion gowns that are affordable (all our gowns are under $500) without compromising on quality and style. Each design and material used has been carefully thought out and selected with our customers in mind.',
          features: ['Product Catalog', 'Size Guide', 'Custom Orders', 'Payment Integration', 'Customer Reviews'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Lux And Co Australia',
          description: 'Lux And Co Australia is Shopify based web application. It includes calendar integration for booking, affiliates, trust-pilot integration, wedding application form, plans listing, step-form, marriage certificate generation, user communication.',
          features: ['Calendar Integration for Booking', 'Affiliates', 'Trust-pilot Integration', 'Wedding Application Form', 'Plans Listing', 'Step-Form', 'Marriage Certificate Generation', 'User Communication'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'That Little Shop in Jannali',
          description: 'The little shop in Jannali is an E-commerce store that includes products like clothes, daily accessories and gift-wears. It is based in Australia. It includes login/register, ship and pickup, newsletter integration, products listing.',
          features: ['Login/Register', 'Ship and Pickup', 'Newsletter Integration', 'Products Listing', 'Payment Gateway'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
        {
          title: 'Noodz Bootique',
          description: 'We are an ethically sourced fashion brand. We work with a small number of boutique suppliers both in Australia and overseas that manufacture garments in small batches. Our clothes are made from premium materials which are meant to be worn several times for many years to come.',
          features: ['Product Catalog', 'Ethical Sourcing Information', 'Size Guide', 'Payment Integration', 'Newsletter'],
          image: '/uploads/2024/12/hiphop-1024x768.webp',
          status: 'Completed'
        },
      ]
    },
    'graphic-designing': {
      title: 'Graphic Designing',
      description: 'Discover Digitalis Global\'s stunning graphic design work. Our creative team delivers innovative design solutions that visually communicate your brand\'s message and values.',
      projects: [
        {
          title: 'Nextgen',
          description: 'Complete branding and graphic design package for Nextgen.',
          features: ['Brand Identity', 'Logo Design', 'Marketing Materials'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Durmac Group',
          description: 'Professional graphic design and branding solutions for Durmac Group.',
          features: ['Brand Identity', 'Logo Design', 'Corporate Materials'],
          image: '/uploads/2024/12/Durmac-Group-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Anvatech',
          description: 'Modern graphic design and branding for Anvatech.',
          features: ['Brand Identity', 'Logo Design', 'Digital Assets'],
          image: '/uploads/2024/12/Anvatech-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Strong Group',
          description: 'Complete branding package for Strong Group.',
          features: ['Brand Identity', 'Logo Design', 'Marketing Collateral'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Puzzle Art',
          description: 'Creative graphic design for Puzzle Art brand.',
          features: ['Brand Identity', 'Logo Design', 'Product Packaging'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Peak Electrical',
          description: 'Professional branding for Peak Electrical services.',
          features: ['Brand Identity', 'Logo Design', 'Business Cards'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Sound Sation',
          description: 'Modern graphic design for Sound Sation.',
          features: ['Brand Identity', 'Logo Design', 'Social Media Graphics'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Is In Luxury',
          description: 'Luxury branding and graphic design for Is In Luxury.',
          features: ['Brand Identity', 'Logo Design', 'Premium Materials'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Game day',
          description: 'Creative graphic design for Game day brand.',
          features: ['Brand Identity', 'Logo Design', 'Event Materials'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
        {
          title: 'Mevan AI',
          description: 'Modern tech branding for Mevan AI.',
          features: ['Brand Identity', 'Logo Design', 'Digital Assets'],
          image: '/uploads/2024/12/Nextgen-1024x756.webp',
          status: 'Completed'
        },
      ]
    },
    'squarespace-wix': {
      title: 'Squarespace / Wix',
      description: 'Professional Squarespace and Wix website development services. We create beautiful, functional websites that help your business stand out online.',
      projects: [
        {
          title: 'Anni-wear',
          description: 'Anni-wear is Wix based web application. It includes login/register, returns portal, newsletter, reviews from Judge.me, products listing, payment methods integration.',
          features: ['Login/Register', 'Returns Portal', 'Newsletter', 'Reviews from Judge.me', 'Products Listing', 'Payment Methods Integration'],
          image: '/uploads/2024/12/Chapter-1-Academy-1024x768.webp',
          status: 'Completed'
        },
      ]
    }
  }

  const categoryData = portfolioData[category]

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white py-20 pt-32 font-['Montserrat']">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-8 rounded-2xl bg-white border border-slate-200 shadow-lg max-w-md mx-auto"
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Category Not Found</h1>
          <p className="text-slate-600 mb-6">The portfolio category you are looking for does not exist.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:bg-blue-600 hover:shadow-xl hover:shadow-sky-500/30"
          >
            Back to Portfolio
          </Link>
        </motion.div>
        <Footer />
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
    // CHANGE 1: Added Montserrat Font to the entire wrapper
    <div className="min-h-screen bg-white font-['Montserrat']">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-50 via-sky-50/30 to-white py-20 overflow-hidden pt-32"
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-sky-100/20 to-blue-100/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-16">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-sky-500 mb-8 transition-colors"
            >
              <span>←</span>
              <span>Back to Portfolio</span>
            </Link>

            <motion.p
              className="text-xs font-bold tracking-[0.2em] text-sky-500 uppercase mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Portfolio Category
            </motion.p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 px-4">
              {categoryData.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              {categoryData.description}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section className="relative py-20 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-100/40 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 z-10">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {categoryData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                // CHANGE 2: Background #589CD5, White Text
                className="group relative overflow-hidden rounded-2xl bg-[#589CD5] border border-white/20 hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      console.error('Failed to load image:', project.image);
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center"><p class="text-slate-500 text-sm">Image not available</p></div>';
                    }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content - Text White */}
                <div className="p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                    {project.title}
                  </h3>
                  {/* Description - White/90 opacity */}
                  <p className="text-sm sm:text-base text-white/90 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features - Updated pill style for blue background */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 rounded-md bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CHANGE 3: CTA Card Background #52C4C9, White Text */}
          <motion.div
            className="mt-12 sm:mt-20 text-center bg-[#52C4C9] p-6 sm:p-12 rounded-2xl shadow-lg text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              Ready to Start Your <span className="text-white">Project?</span>
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Let's discuss how we can bring your vision to life with our expert team and proven track record.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 px-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#52C4C9] shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get Started
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:bg-white/20 hover:border-white hover:-translate-y-0.5"
              >
                View All Categories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PortfolioCategory