import React from 'react'
import { Sparkles, ShoppingBag, ShieldCheck, Gem, HeartPulse, Zap } from 'lucide-react'

// Import Remedy Images
import rudraksha2 from '../assets/remediesStore/2-mukhi_rudraksha01.webp'
import rudraksha4 from '../assets/remediesStore/4_Mukhi_Rudraksha_01.webp'
import tigerEye from '../assets/remediesStore/Tiger_s_Eye_Bracelet_S2.webp'
import gemstones from '../assets/remediesStore/gemStone.webp'
import generalRemedy from '../assets/remediesStore/51pdEvrIEmL._SX679_.jpg'
import ornament from '../assets/remediesStore/Untitled-3_0cb2bb8a-0375-490f-a0d1-5f599bb63880.webp'
import shreeChakra from '../assets/remediesStore/shreeChakraYnra.jpg'
import shpatik from '../assets/remediesStore/shpatik.webp'

import './Remedies.css'
import bazaarIcon from '../assets/imagesFromApp/Brahmabazaar_Icon.png'

const featuredRemedies = [
  {
    title: '4-Mukhi Rudraksha',
    desc: 'Pure Vedic beads blessed for mental peace, spiritual growth and protection from negative energies.',
    img: rudraksha4,
    category: 'Spiritual Beads',
    icon: <Sparkles size={20} />
  },
  {
    title: 'Certified Gemstones',
    desc: 'High-vibration gemstones selected by experts to balance your planetary influences and enhance luck.',
    img: gemstones,
    category: 'Planetary Stones',
    icon: <Gem size={20} />
  },
  {
    title: 'Energy Bracelets',
    desc: 'Tiger Eye and other sacred stone bracelets to manifest confidence, focus and protective shields.',
    img: tigerEye,
    category: 'Sacred Jewelry',
    icon: <HeartPulse size={20} />
  },
  {
    title: 'Siddha Rudraksha Mala',
    desc: 'Traditional 108+1 beads mala for deep meditation, chanting, and clearing spiritual blockages.',
    img: generalRemedy,
    category: 'Meditation Tools',
    icon: <Zap size={20} />
  },
  {
    title: 'Divine Rudraksha Pendant',
    desc: 'Hand-selected Rudraksha bead set in a premium silver cap for constant energy alignment.',
    img: ornament,
    category: 'Sacred Ornaments',
    icon: <Sparkles size={20} />
  },
  {
    title: 'Shree Chakra Yantra',
    desc: 'The most powerful sacred geometry for attracting wealth, prosperity, and divine protection.',
    img: shreeChakra,
    category: 'Sacred Geometry',
    icon: <Zap size={20} />
  },
  {
    title: 'Original Sphatik Shivling',
    desc: 'Pure crystal quartz beads to cool the mind, improve concentration, and enhance spiritual aura.',
    img: shpatik,
    category: 'Healing Crystals',
    icon: <Sparkles size={20} />
  },
  {
    title: '2-Mukhi Rudraksha',
    desc: 'Specialized bead for unity, strengthening relationships, and harmonizing the mind and soul.',
    img: rudraksha2,
    category: 'Spiritual Beads',
    icon: <HeartPulse size={20} />
  }
]

export default function Remedies({ openBazarModal }) {
  return (
    <section className="remedies" id="remedies">
      <div className="remedies-container">
        <div className="remedies-header">


          <div className="section-label reveal-up" style={{ justifyContent: 'center' }}>
            <Sparkles size={16} />
            Divine Remedies & Tools
          </div>
          <h2 className="reveal-up">Sacred Tools for <em>Spiritual Healing</em></h2>
          <p className="reveal-up">
            Our curated collection of Vedic remedies is authenticated and energized by
            learned priests to ensure they bring the maximum positive vibrations to your life.
          </p>
        </div>

        <div className="remedies-grid">
          {featuredRemedies.map((item, idx) => (
            <div key={idx} className="remedy-card reveal-up">
              <div className="remedy-image-wrapper">
                <div className="remedy-glow" />
                <img src={item.img} alt={item.title} />
              </div>
              <div className="remedy-category-pill">
                {item.icon}
                <span>{item.category}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <button className="remedy-btn" onClick={openBazarModal}>
                Explore Collection
              </button>
            </div>
          ))}
        </div>

        <div className="remedies-trust reveal-up">
          <div className="trust-block">
            <div className="trust-block-icon">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4>Lab Certified</h4>
              <span>100% Authentic & Tested</span>
            </div>
          </div>
          <div className="trust-block">
            <div className="trust-block-icon">
              <Zap size={24} />
            </div>
            <div>
              <h4>Prana Energized</h4>
              <span>Blessed by Vedic Rituals</span>
            </div>
          </div>
          <div className="trust-block">
            <div className="trust-block-icon">
              <ShoppingBag size={24} />
            </div>
            <div>
              <h4>Expert Selection</h4>
              <span>Curated by Top Astrologers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
