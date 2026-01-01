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

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  
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
          setAboutMenuOpen(false)
        }
      }
    }

    if (servicesMenuOpen || aboutMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [servicesMenuOpen, aboutMenuOpen])

  const rightNavItems = [
    { name: 'About', href: '#about', hasDropdown: true, menuType: 'about' },
    { name: 'Services', href: '#services', hasDropdown: true, menuType: 'services' },
    { name: 'Portfolio', href: '/portfolio', hasDropdown: false },
    { name: 'Pricing', href: '/pricing', hasDropdown: false },
    { name: 'Careers', href: '/careers', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
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
                    } else if (item.name === 'About') {
                      e.preventDefault()
                      setMobileAboutOpen(!mobileAboutOpen)
                    } else {
                      setMobileMenuOpen(false)
                    }
                  } else {
                    if (item.name !== 'Services' && item.name !== 'About') {
                      setMobileMenuOpen(false)
                    }
                  }
                }}
              >
                {item.href.startsWith('/') ? (
                  <Link 
                    to={item.href}
                    className="navbar-link"
                    onClick={(e) => {
                      // On desktop, toggle mega menu on click for dropdown items
                      if (window.innerWidth > 768) {
                        if (item.hasDropdown && (item.menuType === 'services' || item.menuType === 'about')) {
                          e.preventDefault()
                          if (item.menuType === 'services') {
                            setAboutMenuOpen(false)
                            setServicesMenuOpen(!servicesMenuOpen)
                          } else if (item.menuType === 'about') {
                            setServicesMenuOpen(false)
                            setAboutMenuOpen(!aboutMenuOpen)
                          }
                        } else {
                          setServicesMenuOpen(false)
                          setAboutMenuOpen(false)
                        }
                      } else {
                        // Mobile behavior
                        if (item.name === 'Services' || item.name === 'About') {
                          e.preventDefault()
                        } else {
                          setMobileMenuOpen(false)
                        }
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <span className="dropdown-indicator">▼</span>
                    )}
                  </Link>
                ) : (
                  <a 
                    href={isHomePage ? item.href : `/${item.href}`}
                    className="navbar-link"
                    onClick={(e) => {
                      // On desktop, toggle mega menu on click for dropdown items
                      if (window.innerWidth > 768) {
                        if (item.hasDropdown && (item.menuType === 'services' || item.menuType === 'about')) {
                          e.preventDefault()
                          if (item.menuType === 'services') {
                            setAboutMenuOpen(false)
                            setServicesMenuOpen(!servicesMenuOpen)
                          } else if (item.menuType === 'about') {
                            setServicesMenuOpen(false)
                            setAboutMenuOpen(!aboutMenuOpen)
                          }
                        } else {
                          setServicesMenuOpen(false)
                          setAboutMenuOpen(false)
                          if (!isHomePage && item.href.startsWith('#')) {
                            e.preventDefault()
                            navigate('/' + item.href)
                          }
                        }
                      } else {
                        // Mobile behavior
                        if (item.name === 'About' || item.name === 'Services') {
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
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <span className="dropdown-indicator">▼</span>
                    )}
                  </a>
                )}
                
                {/* Mega Menu for About */}
                {item.name === 'About' && (
                  <>
                    {/* Desktop Mega Menu - hidden on mobile */}
                    <div 
                      className={`mega-menu ${aboutMenuOpen ? 'active' : ''} desktop-only`}
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      <div className="mega-menu-container">
                        <div className="mega-menu-header">
                          <h3>About Us</h3>
                          <p>Learn more about Digitalis Global</p>
                        </div>
                        <div className="mega-menu-grid">
                          <Link
                            to="/about/about-us"
                            className="mega-menu-item"
                            onClick={(e) => {
                              e.stopPropagation()
                              setMobileMenuOpen(false)
                              setMobileAboutOpen(false)
                              setAboutMenuOpen(false)
                              setServicesMenuOpen(false)
                            }}
                          >
                            <span className="mega-menu-icon">📖</span>
                            <div className="mega-menu-content">
                              <h4>About Us</h4>
                              <span className="mega-menu-arrow">→</span>
                            </div>
                          </Link>
                          <Link
                            to="/about/our-team"
                            className="mega-menu-item"
                            onClick={(e) => {
                              e.stopPropagation()
                              setMobileMenuOpen(false)
                              setMobileAboutOpen(false)
                              setAboutMenuOpen(false)
                              setServicesMenuOpen(false)
                            }}
                          >
                            <span className="mega-menu-icon">👥</span>
                            <div className="mega-menu-content">
                              <h4>Our Team</h4>
                              <span className="mega-menu-arrow">→</span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile About Submenu - only show on mobile */}
                    {mobileAboutOpen && (
                      <ul className="mobile-services-menu">
                        <li>
                          <Link
                            to="/about/about-us"
                            className="mobile-service-link"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobileAboutOpen(false)
                            }}
                          >
                            <span className="mobile-service-icon">📖</span>
                            <span>About Us</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about/our-team"
                            className="mobile-service-link"
                            onClick={() => {
                              setMobileMenuOpen(false)
                              setMobileAboutOpen(false)
                            }}
                          >
                            <span className="mobile-service-icon">👥</span>
                            <span>Our Team</span>
                          </Link>
                        </li>
                      </ul>
                    )}
                  </>
                )}

                {/* Mega Menu for Services */}
                {item.name === 'Services' && (
                  <>
                    {/* Desktop Mega Menu - hidden on mobile */}
                    <div 
                      className={`mega-menu ${servicesMenuOpen ? 'active' : ''} desktop-only`}
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
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-right">

          <div className="navbar-icons">
            <button className="icon-button" aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>
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

