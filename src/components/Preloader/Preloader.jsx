import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../../assets/imagesFromApp/brahmkosh_logo.jpeg'
import chakra from '../../assets/webDowloadImages/bgReoveImage.png'
import './Preloader.css'

export default function Preloader({ onComplete }) {
  const preloaderRef = useRef(null)
  const chakraRef = useRef(null)
  const logoRef = useRef(null)
  const beamsRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete() // Tells App.jsx to render site underneath
        
        // Gracefully fade out the entire preloader statically
        gsap.to(preloaderRef.current, {
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.set(preloaderRef.current, { display: 'none' }) // Ensure it's gone
          }
        })
      }
    })

    // Initial State
    gsap.set(logoRef.current, { scale: 0, opacity: 0, filter: 'blur(15px)' })
    gsap.set('.logo-glow-shell', { opacity: 0 }) // Make background glow totally hidden at start
    gsap.set('.beam', { opacity: 0, scale: 1.3 })

    // 1. Chakra spins up (0s to 3s)
    tl.to(chakraRef.current, {
      rotation: 360,
      duration: 3, 
      ease: 'power2.inOut'
    }, '0')
    
    // 2. Logo appears (1.0s to 2.5s)
    .to(logoRef.current, {
      scale: 1,
      opacity: 1,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: 'power3.out'
    }, '1.0') 
    
    // 3. Beams shoot in ONLY after logo appears (2.5s)
    .to('.beam', {
      scale: 1,
      opacity: 0.8,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power4.out'
    }, '2.5')
    
    // 4. Background Glow permanently fades in AS beams land (2.8s)
    .to('.logo-glow-shell', {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, '2.8')

    // 5. Pulsing burst on logo AS beams land (2.8s)
    .to(logoRef.current, {
      boxShadow: '0 0 150px rgba(255, 215, 100, 0.9), 0 0 60px rgba(255, 255, 255, 0.8)',
      repeat: 1,
      yoyo: true,
      duration: 0.5
    }, '2.8')
    
    // Hold the fully lit scene for 1.5s before fading out
    .to({}, { duration: 1.5 })

    // START INFINITE ROTATION SEPARATELY (so timeline can finish)
    gsap.to(chakraRef.current, {
      rotation: '+=360',
      repeat: -1,
      duration: 60,
      ease: 'none'
    })

    return () => {
      tl.kill()
      gsap.killTweensOf(chakraRef.current)
    }
  }, [onComplete])

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-bg-chakra">
        <img ref={chakraRef} src={chakra} alt="" className="chakra-main" />
      </div>

      {/* 4 Corner Beams */}
      <div ref={beamsRef} className="beams-container">
        <div className="beam beam-tl"></div>
        <div className="beam beam-tr"></div>
        <div className="beam beam-bl"></div>
        <div className="beam beam-br"></div>
      </div>

      <div className="preloader-logo-wrapper">
        <img ref={logoRef} src={logo} alt="Brahmakosh Logo" className="preloader-logo" />
        <div className="logo-glow-shell"></div>
      </div>

      <div className="preloader-overlay"></div>
    </div>
  )
}
