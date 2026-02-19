import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const PHONE_NUMBER = '+48 123 456 789'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showPhone, setShowPhone] = useState(false)
  const [isShaking, setIsShaking] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const shakeInterval = setInterval(() => {
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
    }, 4000)

    return () => clearInterval(shakeInterval)
  }, [])

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="Fun Rent" />
        </Link>

        <div className="navbar-links">
          <Link to="/" className={isActive('/') ? 'active' : ''}>
            Home
          </Link>
          <Link to="/katalog" className={isActive('/katalog') ? 'active' : ''}>
            Katalog
          </Link>
          <Link to="/o-nas" className={isActive('/o-nas') ? 'active' : ''}>
            O nas
          </Link>
          <Link to="/kontakt" className={isActive('/kontakt') ? 'active' : ''}>
            Kontakt
          </Link>
          <Link to="/galeria" className={isActive('/galeria') ? 'active' : ''}>
            Galeria
          </Link>
        </div>

        <div className="navbar-social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>

        <a
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className={`navbar-cta ${isShaking ? 'shaking' : ''}`}
          onMouseEnter={() => setShowPhone(true)}
          onMouseLeave={() => setShowPhone(false)}
          aria-label={`Zadzwoń teraz: ${PHONE_NUMBER}`}
        >
          <span aria-hidden={showPhone}>{showPhone ? PHONE_NUMBER : 'Zadzwoń teraz'}</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
