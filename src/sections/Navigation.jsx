import { useEffect, useRef, useCallback, useState } from 'react'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './Navigation.css'

export default function Navigation({ openDownloadModal, openWaniModal, openBazarModal }) {
  const navRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 60)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
    setIsMobileMoreOpen(false)
  }, [])

  return (
    <nav ref={navRef} className="nav" id="nav">
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logo} alt="Brahmakosh" />
          <span>Brahmakosh</span>
        </div>
        
        <div className="nav-right">
          <div className="nav-links">
            <a onClick={() => scrollTo('about')}>About</a>
            <a onClick={() => scrollTo('guides')}>Guides</a>
            <a onClick={() => scrollTo('connect-astrologer')}>Experts</a>
            <a onClick={() => scrollTo('remedies')}>Remedies</a>
            <a onClick={() => scrollTo('global')}>Contact Us</a>
            <div className="nav-more-wrapper">
              <a className="nav-more-trigger">
                More <span className="chevron-down">▾</span>
              </a>
              <div className="nav-mega-menu">
                <div className="mega-menu-inner">
                  <a onClick={() => scrollTo('partner')}>Become Astrology Partner</a>
                  <a onClick={() => { setIsOpen(false); openBazarModal(); }}>Brahmakosh Bazar</a>
                  <a onClick={() => { setIsOpen(false); openWaniModal(); }}>Brahmakosh Wani</a>
                  <a onClick={() => scrollTo('services')}>Services</a>
                </div>
              </div>
            </div>
          </div>
          <button className="nav-cta" onClick={openDownloadModal}>
            DOWNLOAD APP
          </button>
          <button 
            className={`nav-mobile-toggle ${isOpen ? 'open' : ''}`} 
            aria-label="Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
        <a onClick={() => scrollTo('about')}>About</a>
        <a onClick={() => scrollTo('guides')}>Guides</a>
        <a onClick={() => scrollTo('connect-astrologer')}>Experts</a>
        <a onClick={() => scrollTo('remedies')}>Remedies</a>
        <a onClick={() => scrollTo('global')}>Contact Us</a>
        <div className={`mobile-more-group ${isMobileMoreOpen ? 'expanded' : ''}`}>
          <div className="mobile-more-trigger" onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}>
            <span>More</span>
            <span className={`chevron-down ${isMobileMoreOpen ? 'rotated' : ''}`}>▾</span>
          </div>
          <div className="mobile-more-links">
            <a onClick={() => scrollTo('partner')}>Become Astrology Partner</a>
            <a onClick={() => { setIsOpen(false); openBazarModal(); }}>Brahmakosh Bazar</a>
            <a onClick={() => { setIsOpen(false); openWaniModal(); }}>Brahmakosh Wani</a>
            <a onClick={() => scrollTo('services')}>Services</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
