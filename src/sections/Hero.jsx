import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroBg from '../assets/webDowloadImages/hero_bg.png'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './Hero.css'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ isReady }) {
  const heroRef = useRef(null)

  useEffect(() => {
    // Wait until the preloader says we are ready to reveal
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power4.out' },
        delay: 0.3 // Sync perfectly with App.jsx main-reveal transition fade
      })

      // Cinematic Volumetric Reveal Effect
      tl.fromTo('.hero-logo-center',
        { opacity: 0, scale: 0.8, y: 60, filter: 'blur(15px)' },
        { opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 2 })
        .fromTo('.hero-title',
          { opacity: 0, y: 50, scale: 0.95, filter: 'blur(10px)' },
          { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 1.5 }, '-=1.4')
        .fromTo('.hero-subtitle-italic',
          { opacity: 0, y: 30, filter: 'blur(5px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2 }, '-=1.0')
        .fromTo('.hero-features-row',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1 }, '-=0.9')
    }, heroRef)

    return () => ctx.revert()
  }, [isReady])

  return (
    <section ref={heroRef} className="hero" id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-content">
        <div className="hero-logo-center">
          <img src={logo} alt="Brahmakosh Logo" />
        </div>

        <div className="hero-text-wrapper">
          <h1 className="hero-title">Brahmakosh</h1>

          <p className="hero-subtitle-italic">
            Where Ancient Wisdom Meets Divine Intelligence
          </p>

          <div className="hero-features-row">
            <span>BRAHMAKOSH INTELLIGENCE</span> <span className="dot">•</span>
            <span>ASTROLOGY</span> <span className="dot">•</span>
            <span>MEDITATION</span> <span className="dot">•</span>
            <span>WELLNESS</span> <span className="dot">•</span>
            <span>REMEDIES</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Explore</span>
      </div>
    </section>
  )
}
