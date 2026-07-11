import { useEffect } from 'react'
import { X, Waves } from 'lucide-react'
import logo from '../../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './WaniModal.css'

export default function WaniModal({ isOpen, onClose }) {
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
    <div className="wani-modal-backdrop" onClick={onClose}>
      <div className="wani-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="wani-visual-bg">
          <div className="wani-wave-circle circle-1" />
          <div className="wani-wave-circle circle-2" />
          <div className="wani-wave-circle circle-3" />
        </div>

        <button className="wani-modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="wani-modal-header">
          <div className="wani-logo-wrapper">
            <img src={logo} alt="Brahmakosh Wani" className="wani-main-logo" />
            <div className="wani-icon-overlay">
              <Waves className="wani-pulse-icon" size={20} />
            </div>
          </div>
          <div className="coming-soon-badge-premium">Coming Soon</div>
        </div>

        <h2 className="wani-modal-title">Experience <em>Brahmakosh Wani</em></h2>

        <p className="wani-modal-desc">
          The ultimate spiritual acoustic experience. Immerse yourself in divine chants,
          Vedic meditations, and celestial frequencies designed to harmonize your soul.
        </p>

        <div className="wani-features-grid">
          <div className="wani-feature-item">
            <div className="feature-dot" />
            <span>Divine Chants</span>
          </div>
          <div className="wani-feature-item">
            <div className="feature-dot" />
            <span>Vedic Mantras</span>
          </div>
          <div className="wani-feature-item">
            <div className="feature-dot" />
            <span>Sound Healing</span>
          </div>
          <div className="wani-feature-item">
            <div className="feature-dot" />
            <span>Live Satsangs</span>
          </div>
        </div>

        <button className="wani-notify-btn" onClick={onClose}>
          Notify Me When Launching
        </button>
      </div>
    </div>
  )
}
