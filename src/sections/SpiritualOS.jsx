import { Fingerprint } from 'lucide-react'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'

// Import Service Logos
import vaniLogo from '../assets/brahmLogos/brahmavani.png'
import intelligenceLogo from '../assets/brahmLogos/brahmaIntelligance.png'
import gyanLogo from '../assets/brahmLogos/brahmaGyan.png'
import gurukulLogo from '../assets/brahmLogos/gurukul.png'
import bazaarLogo from '../assets/brahmLogos/Brahmabazaar_Icon.png'
import shalaLogo from '../assets/brahmLogos/bramshala.png'
import './SpiritualOS.css'

const modules = [
  { icon: vaniLogo, name: 'BrahmaVaani', desc: 'Sacred Acoustics' },
  { icon: intelligenceLogo, name: 'Brahmakosh Intelligence', desc: 'Divine AI' },
  { icon: gyanLogo, name: 'BrahmaGyaan', desc: 'Infinite Wisdom' },
  { icon: gurukulLogo, name: 'Brahmakosh Gurukul', desc: 'Ancient Learning' },
  { icon: bazaarLogo, name: 'Brahmakosh Bazaar', desc: 'Spiritual Marketplace' },
  { icon: shalaLogo, name: 'Brahmshaala', desc: 'Cosmic Practice' },
]

export default function SpiritualOS({ openWaniModal, openBazarModal, openDownloadModal }) {
  return (
    <section className="spiritual-os" id="spiritual-os">
      <div className="os-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="os-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`
          }} />
        ))}
      </div>

      <div className="os-container">
        <div className="os-header reveal-up">
          <div className="os-label-wrapper">
            <Fingerprint className="os-label-icon" size={16} />
            <span className="os-label">India's First Integrated Ecosystem</span>
          </div>
          <h2 className="os-title">
            India's First <em>Spiritual Operating System</em>
          </h2>
          <p className="os-desc">
            A comprehensive divine ecosystem integrating ancient Vedic wisdom with
            next-generation technology to power your sacred journey.
          </p>
        </div>

        <div className="os-visual-core reveal-scale">
          {/* Energy Lines SVG */}
          <svg className="os-energy-lines" viewBox="0 0 800 600">
            <path d="M400,300 L140,110" className="energy-line line-1" />
            <path d="M400,300 L660,110" className="energy-line line-2" />
            <path d="M400,300 L100,300" className="energy-line line-3" />
            <path d="M400,300 L700,300" className="energy-line line-4" />
            <path d="M400,300 L140,490" className="energy-line line-5" />
            <path d="M400,300 L660,490" className="energy-line line-6" />
          </svg>

          <div className="hud-ring ring-outer" />
          <div className="hud-ring ring-middle" />
          <div className="hud-ring ring-inner" />
          <div className="hud-ring ring-pulsing" />

          <div className="os-modules-grid">
            {modules.map((m, i) => (
              <div key={i} className={`os-module-node node-${i + 1}`}>
                <div className="node-glass" onClick={() => {
                  if (m.name === 'BrahmaVaani') openWaniModal();
                  if (m.name === 'Brahmakosh Bazaar') openBazarModal();
                }} style={{ cursor: (m.name.includes('Vaani') || m.name.includes('Bazaar')) ? 'pointer' : 'default' }}>
                  <div className="node-icon">
                    <img src={m.icon} alt={m.name} className="module-logo-icon" />
                    <div className="icon-glow" />
                  </div>
                  <div className="node-info">
                    <span>{m.name}</span>
                    <h4>{m.desc}</h4>

                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="os-central-hub">
            <div className="hub-glow" />
            <img src={logo} alt="Brahmakosh OS" className="hub-logo" />
            <div className="hub-pulse" />
          </div>
        </div>

        <div className="os-footer reveal-up">
          <div className="os-coming-soon-badge" onClick={openDownloadModal} style={{ cursor: 'pointer' }}>
            <div className="badge-aura" />
            <div className="badge-shimmer" />
            <img src={logo} alt="" className="badge-mini-logo" />
            <span>Available Now for Your <em>Digital Soul</em></span>
          </div>
        </div>
      </div>
    </section>
  )
}
