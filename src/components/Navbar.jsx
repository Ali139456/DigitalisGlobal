import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

// Helper function to generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

const services = [
  { title: "Full Stack Development", icon: "🧩" },
  { title: "Website Development", icon: "🌐" },
  { title: "Ecommerce", icon: "🛒" },
  { title: "Graphic Designing", icon: "🎨" },
  { title: "Digital Marketing", icon: "📣" },
  { title: "SEO", icon: "🔎" },
  { title: "UI/UX Design", icon: "🧠" },
  { title: "Video Editing", icon: "🎬" },
].map(service => ({
  ...service,
  slug: generateSlug(service.title)
}));

const portfolioCategories = [
  { title: "WordPress", icon: "📝", slug: "wordpress" },
  { title: "Shopify", icon: "🛍️", slug: "shopify" },
  { title: "Graphic Designing", icon: "🎨", slug: "graphic-designing" },
  { title: "Wix", icon: "🌐", slug: "squarespace-wix" },
];

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [portfolioMenuOpen, setPortfolioMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false)
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Close mega menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth > 768) {
        if (!e.target.closest('.navbar-item.has-dropdown') && 
            !e.target.closest('.mega-menu')) {
          setServicesMenuOpen(false)
          setPortfolioMenuOpen(false)
        }
      }
    }

    if (servicesMenuOpen || portfolioMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesMenuOpen, portfolioMenuOpen])

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Close mega menus on Escape key
      if (e.key === 'Escape') {
        setServicesMenuOpen(false)
        setPortfolioMenuOpen(false)
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const rightNavItems = [
    { name: 'About Us', href: '/about', hasDropdown: false },
    { name: 'Services', href: '#services', hasDropdown: true, menuType: 'services' },
    { name: 'Portfolio', href: '/portfolio', hasDropdown: true, menuType: 'portfolio' },
    { name: 'Pricing', href: '/pricing', hasDropdown: false },
    { name: 'Careers', href: '/careers', hasDropdown: false },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isHomePage ? 'is-home' : ''}`}>
      <div className="navbar-line"></div>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img 
              src="/Digitlais-Logo-White%20(1).png" 
              alt="Digitalis Global Logo" 
              className="h-6 sm:h-8 w-auto logo-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'inline';
              }}
            />
            <span className="logo-text" style={{ display: 'none' }}>digitalis</span>
          </Link>
        </div>

        <div className="navbar-right">
          {/* Mobile Menu Close Button - shown when menu is open */}
          {mobileMenuOpen && (
            <button
              className="mobile-menu-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
          <ul className={`navbar-menu-right ${mobileMenuOpen ? 'active' : ''}`}>
            {rightNavItems.map((item, index) => (
              <li 
                key={index} 
                className={`navbar-item ${item.hasDropdown ? 'has-dropdown' : ''}`}
                onClick={(e) => {
                  // On mobile, prevent navigation for dropdown items
                  if (window.innerWidth <= 768) {
                    if (item.name === 'Services') {
                      e.preventDefault()
                      setMobileServicesOpen(!mobileServicesOpen)
                    } else if (item.name === 'Portfolio') {
                      e.preventDefault()
                      setMobilePortfolioOpen(!mobilePortfolioOpen)
                    } else {
                      setMobileMenuOpen(false)
                    }
                  } else {
                    if (item.name !== 'Services' && item.name !== 'Portfolio') {
                      setMobileMenuOpen(false)
                    }
                  }
                }}
              >
                {item.href.startsWith('/') ? (
                  <Link 
                    to={item.href}
                    className="navbar-link"
                    aria-haspopup={item.hasDropdown ? 'true' : undefined}
                    aria-expanded={item.hasDropdown ? (item.menuType === 'services' ? servicesMenuOpen : item.menuType === 'portfolio' ? portfolioMenuOpen : false) : undefined}
                    onClick={(e) => {
                      // On desktop, toggle mega menu on click for dropdown items
                      if (window.innerWidth > 768) {
                        if (item.hasDropdown && (item.menuType === 'services' || item.menuType === 'portfolio')) {
                          e.preventDefault()
                          if (item.menuType === 'services') {
                            setPortfolioMenuOpen(false)
                            setServicesMenuOpen(!servicesMenuOpen)
                          } else if (item.menuType === 'portfolio') {
                            setServicesMenuOpen(false)
                            setPortfolioMenuOpen(!portfolioMenuOpen)
                          }
                        } else {
                          setServicesMenuOpen(false)
                          setPortfolioMenuOpen(false)
                        }
                      } else {
                        // Mobile behavior
                        if (item.name === 'Services' || item.name === 'Portfolio') {
                          e.preventDefault()
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      // Keyboard accessibility: Enter or Space to toggle dropdown
                      if (item.hasDropdown && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault()
                        if (window.innerWidth > 768) {
                          if (item.menuType === 'services') {
                            setPortfolioMenuOpen(false)
                            setServicesMenuOpen(!servicesMenuOpen)
                          } else if (item.menuType === 'portfolio') {
                            setServicesMenuOpen(false)
                            setPortfolioMenuOpen(!portfolioMenuOpen)
                          }
                        }
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <span className="dropdown-indicator" aria-hidden="true">▼</span>
                    )}
                  </Link>
                ) : (
                <a 
                    href={isHomePage ? item.href : `/${item.href}`}
                  className="navbar-link"
                    aria-haspopup={item.hasDropdown ? 'true' : undefined}
                    aria-expanded={item.hasDropdown ? (item.menuType === 'services' ? servicesMenuOpen : item.menuType === 'portfolio' ? portfolioMenuOpen : false) : undefined}
                    onClick={(e) => {
                      // On desktop, toggle mega menu on click for dropdown items
                      if (window.innerWidth > 768) {
                        if (item.hasDropdown && (item.menuType === 'services' || item.menuType === 'about' || item.menuType === 'portfolio')) {
                          e.preventDefault()
                          if (item.menuType === 'services') {
                            setPortfolioMenuOpen(false)
                            setServicesMenuOpen(!servicesMenuOpen)
                          } else if (item.menuType === 'portfolio') {
                            setServicesMenuOpen(false)
                            setPortfolioMenuOpen(!portfolioMenuOpen)
                          }
                        } else {
                          setServicesMenuOpen(false)
                          setPortfolioMenuOpen(false)
                          if (!isHomePage && item.href.startsWith('#')) {
                            e.preventDefault()
                            navigate('/' + item.href)
                          }
                        }
                      } else {
                        // Mobile behavior
                        if (item.name === 'About' || item.name === 'Services' || item.name === 'Portfolio') {
                          e.preventDefault()
                        } else {
                          if (!isHomePage && item.href.startsWith('#')) {
                            e.preventDefault()
                            navigate('/' + item.href)
                          }
                          setMobileMenuOpen(false)
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      // Keyboard accessibility: Enter or Space to toggle dropdown
                      if (item.hasDropdown && (e.key === 'Enter' || e.key === ' ')) {
                        e.preventDefault()
                        if (window.innerWidth > 768) {
                          if (item.menuType === 'services') {
                            setPortfolioMenuOpen(false)
                            setServicesMenuOpen(!servicesMenuOpen)
                          } else if (item.menuType === 'portfolio') {
                            setServicesMenuOpen(false)
                            setPortfolioMenuOpen(!portfolioMenuOpen)
                          }
                        }
                      }
                    }}
                >
                  {item.name}
                  {item.hasDropdown && (
                      <span className="dropdown-indicator" aria-hidden="true">▼</span>
                  )}
                </a>
                )}
                
                {/* Mega Menu for Services */}
                {item.name === 'Services' && (
                  <>
                    {/* Desktop Mega Menu - hidden on mobile */}
                    <div 
                      className={`mega-menu ${servicesMenuOpen ? 'active' : ''} desktop-only`}
                      role="menu"
                      aria-label="Services menu"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mega-menu-container">
                        <div className="mega-menu-header">
                          <h3>Our Services</h3>
                          <p>Explore our comprehensive range of digital solutions</p>
                        </div>
                          <div className="mega-menu-grid">
                            {services.map((service, idx) => (
                              <Link
                                key={idx}
                                to={`/service/${service.slug}`}
                                className="mega-menu-item"
                                onClick={() => {
                                  setMobileMenuOpen(false)
                                  setMobileServicesOpen(false)
                                  setServicesMenuOpen(false)
                                }}
                              >
                                <span className="mega-menu-icon">{service.icon}</span>
                                <div className="mega-menu-content">
                                  <h4>{service.title}</h4>
                                  <span className="mega-menu-arrow">→</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mega-menu-footer">
                            <Link 
                              to="/#services" 
                              className="mega-menu-view-all"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileServicesOpen(false)
                                setServicesMenuOpen(false)
                                setPortfolioMenuOpen(false)
                              }}
                            >
                              View All Services →
                            </Link>
                          </div>
                      </div>
                    </div>
                    
                    
                    {/* Mobile Services Submenu - only show on mobile */}
                    {mobileServicesOpen && (
                      <ul className="mobile-services-menu">
                        {services.map((service, idx) => (
                          <li key={idx}>
                            <Link
                              to={`/service/${service.slug}`}
                              className="mobile-service-link"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileServicesOpen(false)
                              }}
                            >
                              <span className="mobile-service-icon">{service.icon}</span>
                              <span>{service.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}

                {/* Mega Menu for Portfolio */}
                {item.name === 'Portfolio' && (
                  <>
                    {/* Desktop Mega Menu - hidden on mobile */}
                    <div 
                      className={`mega-menu ${portfolioMenuOpen ? 'active' : ''} desktop-only`}
                      role="menu"
                      aria-label="Portfolio menu"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="mega-menu-container">
                        <div className="mega-menu-header">
                          <h3>Our Portfolio</h3>
                          <p>Explore our work across different platforms and services</p>
                        </div>
                        <div className="mega-menu-grid">
                          {portfolioCategories.map((category, idx) => (
                            <Link
                              key={idx}
                              to={`/portfolio/${category.slug}`}
                              className="mega-menu-item"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobilePortfolioOpen(false)
                                setPortfolioMenuOpen(false)
                              }}
                            >
                              <span className="mega-menu-icon">{category.icon}</span>
                              <div className="mega-menu-content">
                                <h4>{category.title}</h4>
                                <span className="mega-menu-arrow">→</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mega-menu-footer">
                          <Link 
                            to="/portfolio" 
                            className="mega-menu-view-all"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobilePortfolioOpen(false)
                              setPortfolioMenuOpen(false)
                            }}
                          >
                            View All Portfolio →
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Portfolio Submenu - only show on mobile */}
                    {mobilePortfolioOpen && (
                      <ul className="mobile-services-menu">
                        {portfolioCategories.map((category, idx) => (
                          <li key={idx}>
                            <Link
                              to={`/portfolio/${category.slug}`}
                              className="mobile-service-link"
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobilePortfolioOpen(false)
                              }}
                            >
                              <span className="mobile-service-icon">{category.icon}</span>
                              <span>{category.title}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          </div>

        <div className="navbar-right">
          <Link to="/contact" className="navbar-contact-button">
            Contact
          </Link>
        </div>

        <button 
          className="navbar-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar

