import React from 'react'
import partnerLogo from '../assets/imagesFromApp/Brahmakosh_Partner.png'
import chantImg from '../assets/imagesFromApp/chant.png'
import './Partner.css'

export default function Partner({ openPartnerModal }) {
  return (
    <section className="partner-section" id="partner">
      <div className="divine-sparkles" />
      <div className="partner-container">
        <div className="partner-content reveal-up" onClick={openPartnerModal}>
          <div className="partner-bg-glow" />
          <div className="portal-light-source" />
          
          <div className="partner-text-block">
            <div className="partner-badge reveal-up">
              <div className="badge-glow" />
              <img src={partnerLogo} alt="" className="badge-logo" />
              <span>Divine Partner</span>
            </div>
            
            <div className="section-label">Grow With Us</div>
            <h2 className="partner-title">
              Become Our <em>Astrology Partner</em>
            </h2>
            <p className="partner-desc">
              Join the world's most advanced spiritual AI ecosystem. 
              Bring your expertise to a global audience and transform lives 
              with the power of divine intelligence.
            </p>
            <button className="partner-cta-btn">
              Explore Partnership
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <div className="partner-visual">
            <div className="partner-main-center reveal-up">
              <div className="logo-glow-aura" />
              <div className="logo-ring ring-1" />
              <div className="logo-ring ring-2" />
              <img src={chantImg} alt="Divine Chant" className="partner-central-chant" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
