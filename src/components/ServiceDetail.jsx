import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()

  // Technology icons mapping
  const techIcons = {
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'React JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Next JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    'Angular JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'Vue JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    'Nuxt JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg',
    'Remix JS': 'https://remix.run/img/logos/logo.svg',
    'Three JS': 'https://threejs.org/files/icon.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Tailwind': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    'Laravel': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    'Azure': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    'PHP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    'Node JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    'Express JS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
    'ASP.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    'Firebase': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'Prisma': 'https://www.prisma.io/images/favicon-32x32.png',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'WordPress': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
    'Shopify': 'https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456ba9558012c2c7e8c0b3b0b0b0b0b0.svg',
    'WooCommerce': 'https://woocommerce.com/wp-content/themes/woo/images/woocommerce-logo.svg',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  }

  const servicesData = {
    'full-stack-development': {
      title: 'Full Stack Development',
      description: 'Comprehensive end-to-end development solutions that cover both frontend and backend technologies.',
      heroDescription: 'At Digitalis Global, we build high-performance, user-friendly websites that combine sleek design with cutting-edge technology. From responsive brochure sites to complex e-commerce platforms, our web development solutions are tailored to your unique goals. We stay ahead of tech trends and follow best coding practices to ensure your site delivers exceptional speed, functionality, and user experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
      icon: '🧩',
      sections: [
        {
          title: 'Web Development',
          description: 'At Digitalis Global, we build high-performance, user-friendly websites that combine sleek design with cutting-edge technology. From responsive brochure sites to complex e-commerce platforms, our web development solutions are tailored to your unique goals. We stay ahead of tech trends and follow best coding practices to ensure your site delivers exceptional speed, functionality, and user experience.'
        },
        {
          title: 'Front-end Development',
          description: 'Creating the client side of web applications using HTML, CSS, and JavaScript. We craft intuitive user interfaces that provide seamless experiences across all devices and browsers.'
        },
        {
          title: 'UI/UX Design',
          description: 'Developing web applications with user-friendly admin panels to manage website. We focus on creating interfaces that are both beautiful and functional, ensuring your users can navigate and interact with ease.'
        }
      ],
      cuttingEdge: {
        title: 'Cutting-Edge Technologies',
        description: 'Our use of the latest frameworks and technologies such as React.js, Angular, Vue.js, Node.js, Laravel, Ruby on Rails, and Python ensures your web solutions are future-ready',
        features: [
          'Performance Optimization',
          'Responsive Design',
          'Scalability',
          'Web Security'
        ]
      },
      maintenance: {
        title: 'Maintenance and Support',
        description: 'Our commitment doesn\'t end with the project\'s completion. We provide ongoing maintenance and support services to keep your application running smoothly. From updates and patches to addressing any issues promptly, our team ensures your digital presence remains optimal.',
        features: [
          'Regular Updates',
          'Bug Fixes',
          'Performance Monitoring',
          'Adaptive Maintenance'
        ]
      },
      technologies: [
        'JavaScript', 'React JS', 'Next JS', 'Angular JS', 'Vue JS', 'Nuxt JS', 'Remix JS', 'Three JS',
        'TypeScript', 'Tailwind', 'Laravel', 'AWS', 'Azure', 'PHP', 'Node JS', 'Express JS',
        'Flask', 'Django', 'ASP.NET', 'Firebase', 'MongoDB', 'PostgreSQL', 'Prisma', 'GraphQL', 'SQL'
      ]
    },
    'website-development': {
      title: 'Website Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences across all devices.',
      heroDescription: 'We create websites that not only look stunning but also perform exceptionally. Every site we build is optimized for speed, SEO, and user engagement. From simple landing pages to complex multi-page websites, we deliver solutions that drive results.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      icon: '🌐',
      sections: [
        {
          title: 'Responsive Web Design',
          description: 'We create websites that adapt seamlessly to all screen sizes, ensuring your visitors have an optimal experience whether they\'re on desktop, tablet, or mobile devices.'
        },
        {
          title: 'Content Management Systems',
          description: 'We integrate powerful CMS solutions like WordPress, allowing you to easily manage and update your website content without technical knowledge.'
        },
        {
          title: 'Performance Optimization',
          description: 'Speed matters. We optimize every aspect of your website for lightning-fast load times, improving user experience and search engine rankings.'
        }
      ],
      cuttingEdge: {
        title: 'Modern Technologies',
        description: 'We leverage the latest web technologies and frameworks to build websites that are fast, secure, and scalable.',
        features: [
          'Fast Loading Times',
          'SEO Optimization',
          'Mobile-First Design',
          'Cross-Browser Compatibility'
        ]
      },
      maintenance: {
        title: 'Ongoing Support',
        description: 'We provide continuous support and maintenance to ensure your website remains up-to-date, secure, and performing at its best.',
        features: [
          'Security Updates',
          'Content Updates',
          'Performance Monitoring',
          'Technical Support'
        ]
      },
      technologies: [
        'HTML5', 'CSS3', 'JavaScript', 'React JS', 'Next JS', 'WordPress', 'Tailwind', 'TypeScript'
      ]
    },
    'ecommerce': {
      title: 'Ecommerce Solutions',
      description: 'Powerful e-commerce platforms that drive sales and provide seamless shopping experiences.',
      heroDescription: 'Transform your business with a custom e-commerce solution that converts visitors into customers. We build stores that are both beautiful and functional, with seamless checkout processes and powerful inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      icon: '🛒',
      sections: [
        {
          title: 'E-commerce Platform Development',
          description: 'We build custom e-commerce solutions tailored to your business needs, from simple online stores to complex marketplaces with advanced features.'
        },
        {
          title: 'Payment Gateway Integration',
          description: 'Seamless integration with major payment processors including Stripe, PayPal, and Square, ensuring secure and smooth transactions for your customers.'
        },
        {
          title: 'Inventory Management',
          description: 'Advanced inventory tracking and management systems that help you stay on top of stock levels, automate reordering, and prevent overselling.'
        }
      ],
      cuttingEdge: {
        title: 'E-commerce Features',
        description: 'Our e-commerce solutions include all the features you need to run a successful online store.',
        features: [
          'Shopping Cart & Checkout',
          'Product Management',
          'Order Tracking',
          'Customer Accounts'
        ]
      },
      maintenance: {
        title: 'Store Maintenance',
        description: 'We provide ongoing support to keep your online store running smoothly, including updates, security patches, and performance optimization.',
        features: [
          'Platform Updates',
          'Security Monitoring',
          'Backup & Recovery',
          'Store Optimization'
        ]
      },
      technologies: [
        'Shopify', 'WooCommerce', 'React JS', 'Node JS', 'WordPress', 'MongoDB', 'PostgreSQL', 'AWS'
      ]
    },
    'shopify': {
      title: 'Shopify Development',
      description: 'Custom Shopify stores that are optimized for conversions and built to scale with your business.',
      heroDescription: 'We specialize in creating beautiful, high-converting Shopify stores. From theme customization to app development, we help you build an online store that stands out and drives sales.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      icon: '🛍️',
      sections: [
        {
          title: 'Shopify Store Setup',
          description: 'Complete Shopify store setup and configuration, including theme selection, customization, and optimization for your brand.'
        },
        {
          title: 'Custom Theme Development',
          description: 'We create custom Shopify themes that reflect your brand identity and provide an exceptional shopping experience for your customers.'
        },
        {
          title: 'Shopify App Integration',
          description: 'We integrate and customize Shopify apps to add powerful features like email marketing, inventory management, and customer reviews.'
        }
      ],
      cuttingEdge: {
        title: 'Shopify Features',
        description: 'Leverage the full power of Shopify with our custom development and optimization services.',
        features: [
          'Custom Themes',
          'App Development',
          'Liquid Programming',
          'API Integration'
        ]
      },
      maintenance: {
        title: 'Shopify Support',
        description: 'Ongoing support and maintenance for your Shopify store, ensuring it stays updated and performs optimally.',
        features: [
          'Theme Updates',
          'App Management',
          'Performance Optimization',
          'Store Maintenance'
        ]
      },
      technologies: [
        'Shopify', 'Liquid', 'JavaScript', 'React JS', 'HTML5', 'CSS3', 'GraphQL'
      ]
    },
    'wordpress': {
      title: 'WordPress Development',
      description: 'Custom WordPress websites and themes that are fast, secure, and easy to manage.',
      heroDescription: 'We create powerful WordPress websites that combine beautiful design with robust functionality. From custom themes to plugin development, we help you build a WordPress site that meets your exact needs.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      icon: '📝',
      sections: [
        {
          title: 'WordPress Theme Development',
          description: 'Custom WordPress themes built from scratch, tailored to your brand and optimized for performance and SEO.'
        },
        {
          title: 'Plugin Development',
          description: 'Custom WordPress plugins that add specific functionality to your website, from simple features to complex integrations.'
        },
        {
          title: 'WordPress Optimization',
          description: 'We optimize your WordPress site for speed, security, and search engine rankings, ensuring it performs at its best.'
        }
      ],
      cuttingEdge: {
        title: 'WordPress Features',
        description: 'We leverage WordPress\'s flexibility to create powerful, feature-rich websites that grow with your business.',
        features: [
          'Custom Themes',
          'Plugin Development',
          'WooCommerce Integration',
          'Multisite Setup'
        ]
      },
      maintenance: {
        title: 'WordPress Maintenance',
        description: 'Regular updates, security monitoring, and performance optimization to keep your WordPress site running smoothly.',
        features: [
          'Core Updates',
          'Plugin Updates',
          'Security Hardening',
          'Backup Management'
        ]
      },
      technologies: [
        'WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'WooCommerce'
      ]
    },
    'graphic-designing': {
      title: 'Graphic Designing',
      description: 'Creative visual designs that capture your brand essence and communicate your message effectively.',
      heroDescription: 'We create visually stunning designs that tell your story and connect with your audience. Every design is crafted to make a lasting impression and drive engagement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      icon: '🎨',
      sections: [
        {
          title: 'Brand Identity Design',
          description: 'Complete brand identity packages including logos, color palettes, typography, and brand guidelines that define your visual identity.'
        },
        {
          title: 'Marketing Materials',
          description: 'Eye-catching marketing materials including brochures, flyers, business cards, and promotional designs that effectively communicate your message.'
        },
        {
          title: 'Digital Graphics',
          description: 'Social media graphics, web banners, email templates, and other digital assets that engage your audience across all platforms.'
        }
      ],
      cuttingEdge: {
        title: 'Design Services',
        description: 'Comprehensive design services that cover all aspects of visual communication for your brand.',
        features: [
          'Logo Design',
          'Brand Guidelines',
          'Print Design',
          'Digital Graphics'
        ]
      },
      maintenance: {
        title: 'Design Support',
        description: 'Ongoing design support to keep your brand materials fresh and consistent across all touchpoints.',
        features: [
          'Asset Updates',
          'Brand Consistency',
          'New Material Design',
          'Design Consultation'
        ]
      },
      technologies: [
        'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'Canva'
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase brand visibility and drive conversions.',
      heroDescription: 'We combine creativity with analytics to create marketing campaigns that not only look great but also drive measurable business growth. From social media to email marketing, we help you reach and engage your target audience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      icon: '📣',
      sections: [
        {
          title: 'Social Media Marketing',
          description: 'Engaging social media content and strategic campaigns that build your brand presence and drive engagement across all platforms.'
        },
        {
          title: 'Content Marketing',
          description: 'High-quality content that attracts, engages, and converts your audience, from blog posts to video content.'
        },
        {
          title: 'Email Marketing',
          description: 'Automated email campaigns and newsletters that nurture leads and keep your audience engaged with your brand.'
        }
      ],
      cuttingEdge: {
        title: 'Marketing Strategies',
        description: 'Data-driven marketing strategies that deliver measurable results and help you achieve your business goals.',
        features: [
          'Campaign Management',
          'Analytics & Reporting',
          'A/B Testing',
          'Conversion Optimization'
        ]
      },
      maintenance: {
        title: 'Marketing Support',
        description: 'Ongoing marketing support to continuously optimize your campaigns and maximize your ROI.',
        features: [
          'Campaign Optimization',
          'Performance Analysis',
          'Strategy Refinement',
          'Content Updates'
        ]
      },
      technologies: [
        'Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'Google Analytics', 'Hootsuite'
      ]
    },
    'seo': {
      title: 'SEO Services',
      description: 'Search engine optimization that improves your website\'s visibility and drives organic traffic.',
      heroDescription: 'We help your website rank higher in search results, bringing more qualified visitors to your site without paid advertising. Our SEO strategies are proven to deliver sustainable, long-term results.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      icon: '🔎',
      sections: [
        {
          title: 'Technical SEO',
          description: 'We optimize your website\'s technical foundation, including site speed, mobile-friendliness, and crawlability, ensuring search engines can easily index your content.'
        },
        {
          title: 'On-Page SEO',
          description: 'We optimize your website\'s content, meta tags, and structure to improve your rankings for relevant keywords and search queries.'
        },
        {
          title: 'Content Optimization',
          description: 'We create and optimize content that ranks well in search engines while providing value to your audience, driving both traffic and conversions.'
        }
      ],
      cuttingEdge: {
        title: 'SEO Strategies',
        description: 'Comprehensive SEO strategies that improve your search engine rankings and drive organic traffic to your website.',
        features: [
          'Keyword Research',
          'Link Building',
          'Local SEO',
          'Content Strategy'
        ]
      },
      maintenance: {
        title: 'SEO Monitoring',
        description: 'Continuous monitoring and optimization to maintain and improve your search engine rankings over time.',
        features: [
          'Rank Tracking',
          'Performance Analysis',
          'Algorithm Updates',
          'SEO Audits'
        ]
      },
      technologies: [
        'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog', 'Google Analytics'
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      heroDescription: 'Great design is invisible. We create interfaces that feel natural and effortless, guiding users seamlessly through their journey. Our designs are based on user research and testing, ensuring they meet real user needs.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      icon: '🧠',
      sections: [
        {
          title: 'User Research',
          description: 'We conduct thorough user research to understand your audience\'s needs, behaviors, and pain points, informing every design decision.'
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'We create detailed wireframes and interactive prototypes that allow you to visualize and test your product before development begins.'
        },
        {
          title: 'Visual Design',
          description: 'Beautiful, modern interface designs that reflect your brand while prioritizing usability and user experience.'
        }
      ],
      cuttingEdge: {
        title: 'Design Excellence',
        description: 'We follow industry best practices and design principles to create interfaces that users love and that drive business results.',
        features: [
          'User-Centered Design',
          'Responsive Design',
          'Accessibility',
          'Design Systems'
        ]
      },
      maintenance: {
        title: 'Design Support',
        description: 'Ongoing design support to ensure your product evolves with user needs and stays ahead of design trends.',
        features: [
          'Design Updates',
          'User Testing',
          'Design Iterations',
          'Design Consultation'
        ]
      },
      technologies: [
        'Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'Framer'
      ]
    },
    'video-editing': {
      title: 'Video Editing',
      description: 'Professional video production and editing services that bring your stories to life.',
      heroDescription: 'We transform raw footage into compelling narratives that engage, inform, and inspire your audience. From corporate videos to social media content, we create videos that make an impact.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=80',
      icon: '🎬',
      sections: [
        {
          title: 'Video Production',
          description: 'Full production services from planning and scripting to shooting and post-production, ensuring your video tells your story effectively.'
        },
        {
          title: 'Post-Production',
          description: 'Professional editing, color correction, and sound design that transform raw footage into polished, professional videos.'
        },
        {
          title: 'Motion Graphics',
          description: 'Animated titles, transitions, and effects that add visual interest and enhance your video\'s storytelling.'
        }
      ],
      cuttingEdge: {
        title: 'Video Services',
        description: 'Comprehensive video services that cover all aspects of video production and editing.',
        features: [
          'Video Editing',
          'Color Grading',
          'Sound Design',
          'Motion Graphics'
        ]
      },
      maintenance: {
        title: 'Video Support',
        description: 'Ongoing support for your video content, including updates, revisions, and new video production.',
        features: [
          'Content Updates',
          'Video Revisions',
          'New Productions',
          'Content Strategy'
        ]
      },
      technologies: [
        'Adobe Premiere Pro', 'After Effects', 'Final Cut Pro', 'DaVinci Resolve', 'Motion'
      ]
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl leading-relaxed">
              {service.heroDescription}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-20">
        {/* Service Sections */}
        {service.sections && service.sections.map((section, index) => (
          <motion.section
            key={index}
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {section.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">
              {section.description}
            </p>
          </motion.section>
        ))}

        {/* Cutting-Edge Technologies Section */}
        {service.cuttingEdge && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {service.cuttingEdge.title}
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-4xl">
              {service.cuttingEdge.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.cuttingEdge.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <h3 className="font-semibold text-slate-900">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Maintenance Section */}
        {service.maintenance && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {service.maintenance.title}
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-4xl">
              {service.maintenance.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.maintenance.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2 h-2 rounded-full bg-teal-600"></span>
                    <h3 className="font-semibold text-slate-900">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Technologies Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Tech Expertise
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Diverse Technological Excellence - We Embrace Diversity in Technology to Deliver Holistic 360° Development Solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer"
              >
                {techIcons[tech] ? (
                  <img
                    src={techIcons[tech]}
                    alt={tech}
                    className="w-12 h-12 mb-3 object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextSibling.style.display = 'block'
                    }}
                  />
                ) : null}
                <span className={`text-sm font-medium text-slate-700 text-center ${techIcons[tech] ? '' : 'text-lg'}`} style={{ display: techIcons[tech] ? 'block' : 'none' }}>
                  {tech}
                </span>
                {!techIcons[tech] && (
                  <span className="text-sm font-medium text-slate-700 text-center">
                    {tech}
                  </span>
                )}
              </motion.div>
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
              Are you Ready?
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ignite Your Brand's Success Now!
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Shaping digital excellence & unlocking your potential with Digitalis Global.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-teal-600 shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 hover:-translate-y-0.5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  )
}

export default ServiceDetail
