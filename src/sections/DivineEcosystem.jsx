import React, { useEffect, useState } from 'react'
import { CalendarCheck, Sparkles, Heart, ArrowRight, Coins, Flame } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// App Onboarding Screenshots
import onboarding1 from '../assets/OnBoardingImages/onboarding1.jpeg'
import onboarding2 from '../assets/OnBoardingImages/onboarding2.jpeg'
import onboarding3 from '../assets/OnBoardingImages/onboarding3.jpeg'
import onboarding4 from '../assets/OnBoardingImages/onboarding4.jpeg'
import onboarding5 from '../assets/OnBoardingImages/onboarding5.jpeg'
import onboarding6 from '../assets/OnBoardingImages/onboarding6.jpeg'
import onboarding7 from '../assets/OnBoardingImages/onboarding7.jpeg'
import onboarding8 from '../assets/OnBoardingImages/onboarding8.jpeg'
import onboarding9 from '../assets/OnBoardingImages/onboarding9.jpeg'
import onboarding10 from '../assets/OnBoardingImages/onboarding10.jpeg'

import './DivineEcosystem.css'

gsap.registerPlugin(ScrollTrigger)

export default function DivineEcosystem() {
  const [activeScreen, setActiveScreen] = useState(0)
  const screens = [
    onboarding1, onboarding2, onboarding3, onboarding4, onboarding5,
    onboarding6, onboarding7, onboarding8, onboarding9, onboarding10
  ]

  useEffect(() => {
    // Rotation logic for phone screen
    const interval = setInterval(() => {
      setActiveScreen(prev => (prev + 1) % screens.length)
    }, 4000)

    const ctx = gsap.context(() => {
      // Reveal entire showcase
      gsap.from('.ecosystem-showcase', {
        scrollTrigger: {
          trigger: '.divine-ecosystem',
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
      })

      // Orbiting cards stagger - ensuring visibility by avoiding initial opacity: 0
      gsap.from('.feature-node', {
        scrollTrigger: {
          trigger: '.ecosystem-showcase',
          start: 'top 90%',
        },
        y: 20,
        opacity: 0, // Keeping it but with clearProps and better trigger
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'all'
      })

      ScrollTrigger.refresh()
    })

    return () => {
      ctx.revert()
      clearInterval(interval)
    }
  }, [screens.length])

  return (
    <section className="divine-ecosystem" id="ecosystem">
      {/* Decorative Orbs */}
      <div className="card-glow" style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px' }} />
      <div className="card-glow" style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', opacity: 0.2 }} />

      <div className="ecosystem-container">
        <div className="ecosystem-header">
          <div className="section-label-container reveal-up">
            <span className="section-label">The Sacred Cycle</span>
          </div>

          <h2 className="reveal-up main-heading">
            Impact with every <span className="highlight-text italic">Spiritual Habit</span>
          </h2>

          <p className="reveal-up ecosystem-description">
            Experience an ecosystem where your daily devotion creates real-world ripples
            of positivity. <span className="p-emphasize">Earn digital karma, spread human kindness.</span>
          </p>
        </div>

        <div className="ecosystem-showcase">
          {/* Left: Phone Mockup */}
          <div className="phone-wrapper-fixed">
            <div className="phone-mockup-wrapper">
              <div className="phone-screen">
                {screens.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="App Screen"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      opacity: activeScreen === i ? 1 : 0,
                      zIndex: activeScreen === i ? 2 : 1
                    }}
                  />
                ))}
              </div>
            </div>
            {/* Floating Points Ticker */}
            <div className="points-ticker">
              <Coins size={24} color="var(--gold)" />
              <div>
                <span>+100</span>
                <p style={{ fontSize: '0.65rem', margin: 0, textTransform: 'uppercase', opacity: 0.7 }}>Points Earned</p>
              </div>
            </div>
            <div className="phone-glow" />
          </div>

          {/* Right: Feature Nodes */}
          <div className="floating-cards-column">
            {/* Node 1 */}
            <div className="feature-node" onMouseEnter={() => setActiveScreen(0)}>
              <div className="node-badge">Daily Habit</div>
              <div className="node-icon">
                <CalendarCheck size={32} />
              </div>
              <div className="node-content">
                <h3>Spiritual Check-in</h3>
                <p>Begin your morning with sacred mindfulness. Every check-in is a step toward inner peace.</p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="feature-node" onMouseEnter={() => setActiveScreen(6)}>
              <div className="node-badge">Recognition</div>
              <div className="node-icon">
                <Sparkles size={32} />
              </div>
              <div className="node-content">
                <h3>Karma Points</h3>
                <p>Your consistency is rewarded with Digital Karma. A visual map of your spiritual dedication.</p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="feature-node" onMouseEnter={() => setActiveScreen(5)}>
              <div className="node-badge">Ultimate Service</div>
              <div className="node-icon">
                <Heart size={32} />
              </div>
              <div className="node-content">
                <h3>Compassionate Daan</h3>
                <p>Redeem your points to feed cows, educate children, and support those in need.</p>
              </div>
            </div>

            {/* Node 4: Sankalp */}
            <div className="feature-node" onMouseEnter={() => setActiveScreen(7)}>
              <div className="node-badge">Commitment</div>
              <div className="node-icon">
                <Flame size={32} />
              </div>
              <div className="node-content">
                <h3>Sacred Sankalp</h3>
                <p>Take a divine vow for consistent growth—be it daily Hanuman Chalisa, Surya Arghya, or Shiva Abhishek. Track your spiritual promises.</p>
              </div>
            </div>

            <button className="btn-primary" style={{ marginTop: '20px', width: 'fit-content' }}>
              Experience the App <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
