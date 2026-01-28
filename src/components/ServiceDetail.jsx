import React, { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Footer from './Footer'

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const navigate = useNavigate()
  // State for country code
  const [selectedCountry, setSelectedCountry] = useState('+971')

  // Comprehensive Country Codes
  const countryCodes = [
    { name: "Afghanistan", code: "+93" }, { name: "Albania", code: "+355" }, { name: "Algeria", code: "+213" },
    { name: "Andorra", code: "+376" }, { name: "Angola", code: "+244" }, { name: "Argentina", code: "+54" },
    { name: "Armenia", code: "+374" }, { name: "Australia", code: "+61" }, { name: "Austria", code: "+43" },
    { name: "Azerbaijan", code: "+994" }, { name: "Bahrain", code: "+973" }, { name: "Bangladesh", code: "+880" },
    { name: "Belarus", code: "+375" }, { name: "Belgium", code: "+32" }, { name: "Belize", code: "+501" },
    { name: "Benin", code: "+229" }, { name: "Bhutan", code: "+975" }, { name: "Bolivia", code: "+591" },
    { name: "Bosnia & Herzegovina", code: "+387" }, { name: "Botswana", code: "+267" }, { name: "Brazil", code: "+55" },
    { name: "Brunei", code: "+673" }, { name: "Bulgaria", code: "+359" }, { name: "Burkina Faso", code: "+226" },
    { name: "Burundi", code: "+257" }, { name: "Cambodia", code: "+855" }, { name: "Cameroon", code: "+237" },
    { name: "Canada", code: "+1" }, { name: "Central African Rep.", code: "+236" }, { name: "Chad", code: "+235" },
    { name: "Chile", code: "+56" }, { name: "China", code: "+86" }, { name: "Colombia", code: "+57" },
    { name: "Comoros", code: "+269" }, { name: "Congo", code: "+242" }, { name: "Costa Rica", code: "+506" },
    { name: "Croatia", code: "+385" }, { name: "Cuba", code: "+53" }, { name: "Cyprus", code: "+357" },
    { name: "Czech Republic", code: "+420" }, { name: "Denmark", code: "+45" }, { name: "Djibouti", code: "+253" },
    { name: "Dominica", code: "+1-767" }, { name: "Dominican Republic", code: "+1-809" }, { name: "Ecuador", code: "+593" },
    { name: "Egypt", code: "+20" }, { name: "El Salvador", code: "+503" }, { name: "Equatorial Guinea", code: "+240" },
    { name: "Eritrea", code: "+291" }, { name: "Estonia", code: "+372" }, { name: "Ethiopia", code: "+251" },
    { name: "Fiji", code: "+679" }, { name: "Finland", code: "+358" }, { name: "France", code: "+33" },
    { name: "Gabon", code: "+241" }, { name: "Gambia", code: "+220" }, { name: "Georgia", code: "+995" },
    { name: "Germany", code: "+49" }, { name: "Ghana", code: "+233" }, { name: "Greece", code: "+30" },
    { name: "Grenada", code: "+1-473" }, { name: "Guatemala", code: "+502" }, { name: "Guinea", code: "+224" },
    { name: "Guyana", code: "+592" }, { name: "Haiti", code: "+509" }, { name: "Honduras", code: "+504" },
    { name: "Hong Kong", code: "+852" }, { name: "Hungary", code: "+36" }, { name: "Iceland", code: "+354" },
    { name: "India", code: "+91" }, { name: "Indonesia", code: "+62" }, { name: "Iran", code: "+98" },
    { name: "Iraq", code: "+964" }, { name: "Ireland", code: "+353" }, { name: "Israel", code: "+972" },
    { name: "Italy", code: "+39" }, { name: "Ivory Coast", code: "+225" }, { name: "Jamaica", code: "+1-876" },
    { name: "Japan", code: "+81" }, { name: "Jordan", code: "+962" }, { name: "Kazakhstan", code: "+7" },
    { name: "Kenya", code: "+254" }, { name: "Kiribati", code: "+686" }, { name: "North Korea", code: "+850" },
    { name: "South Korea", code: "+82" }, { name: "Kuwait", code: "+965" }, { name: "Kyrgyzstan", code: "+996" },
    { name: "Laos", code: "+856" }, { name: "Latvia", code: "+371" }, { name: "Lebanon", code: "+961" },
    { name: "Lesotho", code: "+266" }, { name: "Liberia", code: "+231" }, { name: "Libya", code: "+218" },
    { name: "Liechtenstein", code: "+423" }, { name: "Lithuania", code: "+370" }, { name: "Luxembourg", code: "+352" },
    { name: "Macau", code: "+853" }, { name: "Macedonia", code: "+389" }, { name: "Madagascar", code: "+261" },
    { name: "Malawi", code: "+265" }, { name: "Malaysia", code: "+60" }, { name: "Maldives", code: "+960" },
    { name: "Mali", code: "+223" }, { name: "Malta", code: "+356" }, { name: "Marshall Islands", code: "+692" },
    { name: "Mauritania", code: "+222" }, { name: "Mauritius", code: "+230" }, { name: "Mexico", code: "+52" },
    { name: "Micronesia", code: "+691" }, { name: "Moldova", code: "+373" }, { name: "Monaco", code: "+377" },
    { name: "Mongolia", code: "+976" }, { name: "Montenegro", code: "+382" }, { name: "Morocco", code: "+212" },
    { name: "Mozambique", code: "+258" }, { name: "Myanmar", code: "+95" }, { name: "Namibia", code: "+264" },
    { name: "Nauru", code: "+674" }, { name: "Nepal", code: "+977" }, { name: "Netherlands", code: "+31" },
    { name: "New Zealand", code: "+64" }, { name: "Nicaragua", code: "+505" }, { name: "Niger", code: "+227" },
    { name: "Nigeria", code: "+234" }, { name: "Norway", code: "+47" }, { name: "Oman", code: "+968" },
    { name: "Pakistan", code: "+92" }, { name: "Palau", code: "+680" }, { name: "Panama", code: "+507" },
    { name: "Papua New Guinea", code: "+675" }, { name: "Paraguay", code: "+595" }, { name: "Peru", code: "+51" },
    { name: "Philippines", code: "+63" }, { name: "Poland", code: "+48" }, { name: "Portugal", code: "+351" },
    { name: "Qatar", code: "+974" }, { name: "Romania", code: "+40" }, { name: "Russia", code: "+7" },
    { name: "Rwanda", code: "+250" }, { name: "Samoa", code: "+685" }, { name: "San Marino", code: "+378" },
    { name: "Sao Tome & Principe", code: "+239" }, { name: "Saudi Arabia", code: "+966" }, { name: "Senegal", code: "+221" },
    { name: "Serbia", code: "+381" }, { name: "Seychelles", code: "+248" }, { name: "Sierra Leone", code: "+232" },
    { name: "Singapore", code: "+65" }, { name: "Slovakia", code: "+421" }, { name: "Slovenia", code: "+386" },
    { name: "Solomon Islands", code: "+677" }, { name: "Somalia", code: "+252" }, { name: "South Africa", code: "+27" },
    { name: "Spain", code: "+34" }, { name: "Sri Lanka", code: "+94" }, { name: "Sudan", code: "+249" },
    { name: "Suriname", code: "+597" }, { name: "Swaziland", code: "+268" }, { name: "Sweden", code: "+46" },
    { name: "Switzerland", code: "+41" }, { name: "Syria", code: "+963" }, { name: "Taiwan", code: "+886" },
    { name: "Tajikistan", code: "+992" }, { name: "Tanzania", code: "+255" }, { name: "Thailand", code: "+66" },
    { name: "Togo", code: "+228" }, { name: "Tonga", code: "+676" }, { name: "Trinidad & Tobago", code: "+1-868" },
    { name: "Tunisia", code: "+216" }, { name: "Turkey", code: "+90" }, { name: "Turkmenistan", code: "+993" },
    { name: "Tuvalu", code: "+688" }, { name: "Uganda", code: "+256" }, { name: "Ukraine", code: "+380" },
    { name: "United Arab Emirates", code: "+971" }, { name: "United Kingdom", code: "+44" }, { name: "United States", code: "+1" },
    { name: "Uruguay", code: "+598" }, { name: "Uzbekistan", code: "+998" }, { name: "Vanuatu", code: "+678" },
    { name: "Vatican City", code: "+379" }, { name: "Venezuela", code: "+58" }, { name: "Vietnam", code: "+84" },
    { name: "Yemen", code: "+967" }, { name: "Zambia", code: "+260" }, { name: "Zimbabwe", code: "+263" }
  ];

  // Comprehensive Technology icons mapping
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
    'Tailwind': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    'Laravel': 'https://cdn.simpleicons.org/laravel/FF2D20',
    'AWS': 'https://cdn.simpleicons.org/amazonaws/232F3E',
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
    'Shopify': 'https://cdn.simpleicons.org/shopify/96BF48',
    'WooCommerce': 'https://cdn.simpleicons.org/woocommerce/96588A',
    'Liquid': 'https://cdn.simpleicons.org/liquid/4B9BF5',
    'HTML5': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS3': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Ruby on Rails': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg',
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Adobe Photoshop': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
    'Adobe Illustrator': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
    'Adobe InDesign': 'https://cdn.simpleicons.org/adobeindesign/FF3366',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'Sketch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg',
    'Canva': 'https://www.canva.com/favicon.ico',
    'Google Ads': 'https://cdn.simpleicons.org/googleads/4285F4',
    'Facebook Ads': 'https://cdn.simpleicons.org/facebook/1877F2',
    'Mailchimp': 'https://cdn.simpleicons.org/mailchimp/FFE01B',
    'HubSpot': 'https://cdn.simpleicons.org/hubspot/FF7A59',
    'Google Analytics': 'https://cdn.simpleicons.org/googleanalytics/E37400',
    'Hootsuite': 'https://cdn.simpleicons.org/hootsuite/1DA1F2',
    'Google Search Console': 'https://cdn.simpleicons.org/google/4285F4',
    'SEMrush': 'https://cdn.simpleicons.org/semrush/65C4D8',
    'Ahrefs': 'https://cdn.simpleicons.org/ahrefs/1E1E1E',
    'Moz': 'https://cdn.simpleicons.org/moz/FFFFFF',
    'Screaming Frog': 'https://cdn.simpleicons.org/screamingfrog/FF6B6B',
    'Adobe XD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg',
    'InVision': 'https://cdn.simpleicons.org/invision/FF3366',
    'Principle': 'https://cdn.simpleicons.org/principle/FF3366',
    'Framer': 'https://cdn.simpleicons.org/framer/0055FF',
    'Adobe Premiere Pro': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg',
    'After Effects': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg',
    'Final Cut Pro': 'https://cdn.simpleicons.org/apple/000000',
    'DaVinci Resolve': 'https://cdn.simpleicons.org/davinciresolve/000000',
    'Motion': 'https://cdn.simpleicons.org/apple/000000',
    'Magento': 'https://cdn.simpleicons.org/magento/EE672F',
    'Stripe': 'https://cdn.simpleicons.org/stripe/635BFF',
    'PayPal': 'https://cdn.simpleicons.org/paypal/00457C',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Canva Pro': 'https://cdn.simpleicons.org/canva/00C4CC',
  }

  const servicesData = {
    'full-stack-development': {
      title: 'Full Stack Development',
      description: 'Comprehensive end-to-end development solutions that cover both frontend and backend technologies.',
      heroDescription: 'At Digitalis Global, we build high-performance, user-friendly websites that combine sleek design with cutting-edge technology. From responsive brochure sites to complex e-commerce platforms, our web development solutions are tailored to your unique goals. We stay ahead of tech trends and follow best coding practices to ensure your site delivers exceptional speed, functionality, and user experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
      icon: '🧩',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
      sections: [
        {
          title: 'Web Development',
          description: 'We build high-performance, user-friendly websites combining sleek design with cutting-edge technology. From responsive sites to complex platforms, our solutions ensure exceptional speed and functionality.'
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
        'Flask', 'Django', 'ASP.NET', 'Firebase', 'MongoDB', 'PostgreSQL', 'Prisma', 'GraphQL', 'SQL', 'Ruby on Rails', 'Python'
      ]
    },
    'website-development': {
      title: 'Website Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences across all devices.',
      heroDescription: 'We create websites that not only look stunning but also perform exceptionally. Every site we build is optimized for speed, SEO, and user engagement. From simple landing pages to complex multi-page websites, we deliver solutions that drive results.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      icon: '🌐',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 bg-clip-text text-transparent',
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
        'HTML5', 'CSS3', 'JavaScript', 'React JS', 'Next JS', 'WordPress', 'Tailwind', 'TypeScript', 'Node JS', 'PHP', 'MongoDB', 'PostgreSQL'
      ]
    },
    'ecommerce': {
      title: 'Ecommerce Solutions',
      description: 'Powerful e-commerce platforms that drive sales and provide seamless shopping experiences.',
      heroDescription: 'Transform your business with a custom e-commerce solution that converts visitors into customers. We build stores that are both beautiful and functional, with seamless checkout processes and powerful inventory management.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      icon: '🛒',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
        'Shopify', 'WooCommerce', 'Magento', 'React JS', 'Node JS', 'WordPress', 'MongoDB', 'PostgreSQL', 'AWS', 'Stripe', 'PayPal'
      ]
    },
    'shopify': {
      title: 'Shopify Development',
      description: 'Custom Shopify stores that are optimized for conversions and built to scale with your business.',
      heroDescription: 'We specialize in creating beautiful, high-converting Shopify stores. From theme customization to app development, we help you build an online store that stands out and drives sales.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80',
      icon: '🛍️',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
        'Shopify', 'Liquid', 'JavaScript', 'React JS', 'HTML5', 'CSS3', 'GraphQL', 'Node JS', 'Stripe', 'PayPal'
      ]
    },
    'wordpress': {
      title: 'WordPress Development',
      description: 'Custom WordPress websites and themes that are fast, secure, and easy to manage.',
      heroDescription: 'We create powerful WordPress websites that combine beautiful design with robust functionality. From custom themes to plugin development, we help you build a WordPress site that meets your exact needs.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80',
      icon: '📝',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
        'WordPress', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'WooCommerce', 'React JS', 'Node JS'
      ]
    },
    'graphic-designing': {
      title: 'Graphic Designing',
      description: 'Creative visual designs that capture your brand essence and communicate your message effectively.',
      heroDescription: 'We create visually stunning designs that tell your story and connect with your audience. Every design is crafted to make a lasting impression and drive engagement.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80',
      icon: '🎨',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
        'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Figma', 'Sketch', 'Canva', 'Adobe XD'
      ]
    },
    'digital-marketing': {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that increase brand visibility and drive conversions.',
      heroDescription: 'We combine creativity with analytics to create marketing campaigns that not only look great but also drive measurable business growth. From social media to email marketing, we help you reach and engage your target audience.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
      icon: '📣',
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
      gradient: 'from-sky-500 to-blue-600',
      titleStyle: 'font-black italic tracking-tighter bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent',
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
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 font-['Montserrat']">
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
        <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-3xl`} />
        <div className={`absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-3xl`} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-1 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            {/* Left Column: Title and Description */}
            <div>
              <div className="flex items-center gap-4 mb-6 ">
                {service.icon && <span className="text-6xl" aria-hidden="true">{service.icon}</span>}
                {/* Fixed Title clipping issue with pr-4 pb-1 */}
                <h1 className={`text-2xl md:text-3xl font-bold tracking-tight whitespace-nowrap pr-4 pb-1 ${service.titleStyle || `bg-gradient-to-r ${service.gradient || 'from-sky-500 to-blue-600'} bg-clip-text text-transparent`}`}>
                  {service.title || 'Service'}
                </h1>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl leading-relaxed">
                {service.heroDescription}
              </p>
            </div>

            {/* Right Column: Contact Form (Moved here) */}
            <div className="relative w-full">
              {/* Updated Form Container: Blue Glassmorphism + RESPONSIVE SIZING */}
              <div className="relative w-full max-w-lg lg:max-w-full mx-auto rounded-3xl p-6 sm:p-8 md:p-10 border border-white/20 shadow-2xl overflow-hidden z-0 bg-[#589CD5] backdrop-blur-md">
                {/* Background Layer: Subtle Glow */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${service.gradient} opacity-20 rounded-full blur-3xl`}></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Have any questions?</h3>
                  
                  <form className="space-y-5">
                    {/* Name Input */}
                    <div>
                      <input
                        type="text"
                        placeholder="Name*"
                        className="w-full bg-white/20 border border-white/30 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-base"
                      />
                    </div>

                    {/* Email Input */}
                    <div>
                      <input
                        type="email"
                        placeholder="Email*"
                        className="w-full bg-white/20 border border-white/30 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-base"
                      />
                    </div>

                    {/* Phone Input with Responsive Dropdown (Stacks on very small screens) */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative w-full sm:w-1/3 min-w-[120px]">
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-full h-full appearance-none bg-white/20 border border-white/30 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-white transition-colors cursor-pointer text-base"
                          style={{ backgroundImage: 'none' }} 
                        >
                          {countryCodes.map((country, idx) => (
                            <option key={idx} value={country.code} className="bg-white text-slate-900">
                              {country.code} ({country.name})
                            </option>
                          ))}
                        </select>
                         {/* Custom Arrow Icon for Dropdown */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                      <input
                        type="tel"
                        placeholder="Phone No*"
                        className="w-full sm:flex-1 bg-white/20 border border-white/30 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors text-base"
                      />
                    </div>

                    {/* Project Description */}
                    <div>
                      <textarea
                        rows="4"
                        placeholder="Tell us about your project"
                        className="w-full bg-white/20 border border-white/30 rounded-xl px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none text-base"
                      ></textarea>
                    </div>

                    {/* Submit Button - Updated Background #3A3A3C */}
                    <button
                      type="submit"
                      className="w-full bg-[#3A3A3C] hover:bg-[#2c2c2e] text-white font-semibold py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-base"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content - Increased Max Width here */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 xl:px-20 py-20">
        {/* Service Sections */}
        {service.sections && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
            {service.sections.map((section, index) => (
              <motion.section
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Decorative Background */}
                <div className={`absolute -left-10 top-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl`} />
                
                {/* UPDATED CARD: Background color #52C4C9, White Text */}
                <div className="relative bg-[#52C4C9] rounded-3xl p-10 md:p-14 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[400px] flex flex-col justify-start pt-16">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className={`w-2 h-10 bg-white rounded-full`}></span>
                    {section.title}
                  </h2>
                  <p className="text-base text-white/90 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </motion.section>
            ))}
          </div>
        )}

        {/* Cutting-Edge Technologies Section */}
        {service.cuttingEdge && (
          <motion.section
            className="mb-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* UPDATED CARD: Gradient Background #589CD5 to #52C4C9 */}
            <div className={`relative bg-gradient-to-r from-[#589CD5] to-[#52C4C9] rounded-3xl p-8 md:p-12 text-white overflow-hidden`}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {service.cuttingEdge.title}
                </h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-4xl">
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
                      className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-3 h-3 rounded-full bg-white"></span>
                        <h3 className="font-semibold text-white">{feature}</h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Maintenance Section - UPDATED Background #589CD5 */}
        {service.maintenance && (
          <motion.section
            className="mb-20 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* UPDATED CONTAINER: #589CD5 Background, White Text, Glassy Inner Cards */}
            <div className="relative bg-[#589CD5] rounded-3xl p-8 md:p-12 border border-white/20 shadow-xl">
              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-bl-full`} />
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {service.maintenance.title}
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-4xl">
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
                    // Inner cards are now glassy white to match the blue theme
                    className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full bg-white group-hover:scale-125 transition-transform`}></span>
                      <h3 className="font-semibold text-white">{feature}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Technologies Section */}
        <motion.section
          className="mb-20 relative"
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
          
          {/* Decorative Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 rounded-3xl blur-3xl`} />
          
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {service.technologies.map((tech, index) => {
              const TechIcon = ({ techName }) => {
                const [iconError, setIconError] = useState(false)
                const iconUrl = techIcons[techName]
                
                return (
                  <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-50 to-white p-3 group-hover:scale-110 transition-transform duration-300">
                    {iconUrl && !iconError ? (
                      <img
                        src={iconUrl}
                        alt={techName}
                        className="w-full h-full object-contain"
                        onError={() => setIconError(true)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center rounded-lg bg-gradient-to-br from-sky-100 to-sky-200">
                        <span className="text-2xl font-bold text-blue-600">{techName.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                )
              }
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                >
                  <TechIcon techName={tech} />
                  <span className="text-sm font-medium text-slate-700 text-center group-hover:text-sky-500 transition-colors">
                    {tech}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.section>
      </div>

      {/* CTA Section - Full Width - UPDATED Background #589CD5 */}
      <motion.section
        className="relative w-full bg-[#589CD5] py-20 text-center overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 xl:px-20">
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
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#589CD5] shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl hover:-translate-y-0.5"
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
      
      {/* Footer Updated with background #3A3A3C and White Text */}
      <div className="bg-[#3A3A3C] text-white">
        <Footer />
      </div>
    </div>
  )
}

export default ServiceDetail