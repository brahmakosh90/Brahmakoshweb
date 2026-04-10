import React, { useState, useEffect } from 'react'
import chantingAction from '../assets/spritualAction/chanting.png'
import meditationAction from '../assets/spritualAction/meditation.png'
import prayerAction from '../assets/spritualAction/prayer.png'
import silenceAction from '../assets/spritualAction/silence.png'
import './SpiritualAction.css'

const actions = [
  { img: chantingAction, title: 'Sacred Chanting', subtitle: 'Harness the power of sound' },
  { img: meditationAction, title: 'Deep Meditation', subtitle: 'Find peace in stillness' },
  { img: prayerAction, title: 'Heartfelt Prayer', subtitle: 'Connect with the divine' },
  { img: silenceAction, title: 'Inner Silence', subtitle: 'Echoes of the soul' }
]

export default function SpiritualAction() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % actions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="spiritual-action">
      <div className="action-container">
        <div className="action-display reveal-scale">
          {actions.map((action, i) => (
            <div 
              key={i} 
              className={`action-frame ${activeIndex === i ? 'active' : ''}`}
            >
              <img src={action.img} alt={action.title} className="action-img" />
              <div className="action-content">
                <div className="action-label">Divine Practice</div>
                <h2 className="action-heading">{action.title}</h2>
                <p className="action-subheading">{action.subtitle}</p>
              </div>
              <div className="action-vignette" />
            </div>
          ))}
          
          {/* Progress Indicators */}
          <div className="action-progress">
            {actions.map((_, i) => (
              <div 
                key={i} 
                className={`progress-bar ${activeIndex === i ? 'active' : ''}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
