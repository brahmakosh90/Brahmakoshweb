import { useEffect } from 'react'
import { X, ShoppingBag } from 'lucide-react'
import logo from '../../assets/imagesFromApp/Brahmabazaar_Icon.png'
import './BazarModal.css'

export default function BazarModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="bazar-modal-backdrop" onClick={onClose}>
      <div className="bazar-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="bazar-visual-bg">
          <div className="bazar-wave-circle circle-1" />
          <div className="bazar-wave-circle circle-2" />
          <div className="bazar-wave-circle circle-3" />
        </div>

        <button className="bazar-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="bazar-modal-header">
          <div className="bazar-logo-wrapper">
            <img src={logo} alt="Brahmakosh Bazar" className="bazar-main-logo" />
            <div className="bazar-icon-overlay">
              <ShoppingBag className="bazar-pulse-icon" size={20} />
            </div>
          </div>
          <div className="coming-soon-badge-premium">Coming Soon</div>
        </div>

        <h2 className="bazar-modal-title">Welcome to <em>Brahmakosh Bazar</em></h2>

        <p className="bazar-modal-desc">
          India's most trusted spiritual marketplace. Explore a curated collection of 
          authentic Vedic remedies, energized gemstones, and sacred tools for your journey.
        </p>

        <div className="bazar-features-grid">
          <div className="bazar-feature-item">
            <div className="feature-dot" />
            <span>Vedic Remedies</span>
          </div>
          <div className="bazar-feature-item">
            <div className="feature-dot" />
            <span>Sacred Ornaments</span>
          </div>
          <div className="bazar-feature-item">
            <div className="feature-dot" />
            <span>Healing Crystals</span>
          </div>
          <div className="bazar-feature-item">
            <div className="feature-dot" />
            <span>Lab Certified</span>
          </div>
        </div>

        <button className="bazar-notify-btn" onClick={onClose}>
          Notify Me When Open
        </button>
      </div>
    </div>
  )
}
