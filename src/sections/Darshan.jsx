import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import krishnaDeity from '../assets/lordImages/shreeKrisna.png'
import ramImg from '../assets/lordImages/ram.png'
import hanumanImg from '../assets/lordImages/hanuman.png'
import ganeshImg from '../assets/lordImages/ganesha.png'
import shivaImg from '../assets/lordImages/shiva.png'
import './Darshan.css'

gsap.registerPlugin(ScrollTrigger)

const deities = [
  { 
    name: 'Lord Krishna', 
    label: 'Divine Flute Player', 
    shlok: 'Whenever righteousness declines, I manifest Myself \nfor the protection of the good.', 
    img: krishnaDeity,
    glow: 'rgba(90, 160, 255, 0.4)'
  },
  { 
    name: 'Lord Ram', 
    label: 'Maryada Purushottam', 
    shlok: 'The embodiment of Dharma and Truth, a king who \nsacrificed his happiness for his people.', 
    img: ramImg,
    glow: 'rgba(255, 140, 0, 0.4)'
  },
  { 
    name: 'Lord Shiva', 
    label: 'Mahadev', 
    shlok: 'The Destroyer of Evil, the Transformer, and the Supreme Yogi \nwho resides in the silence of Kailash.', 
    img: shivaImg,
    glow: 'rgba(135, 206, 235, 0.4)'
  },
  { 
    name: 'Lord Hanuman', 
    label: 'The Supreme Devotee', 
    shlok: 'The strength of devotion can move mountains and cross oceans. \nPavanputra is always with you.', 
    img: hanumanImg,
    glow: 'rgba(255, 69, 0, 0.4)'
  },
  { 
    name: 'Lord Ganesh', 
    label: 'Vighnaharta', 
    shlok: 'The remover of all obstacles and the giver of success. \nBegin every journey with His name.', 
    img: ganeshImg,
    glow: 'rgba(255, 105, 180, 0.3)'
  },
]

export default function Darshan() {
  const darshanRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.deity-manifest-box')
      const dots = gsap.utils.toArray('.nav-dot-darshan')
      const bgGlow = document.querySelector('.darshan-bg-glow')

      // Main pinning timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: darshanRef.current,
          start: 'top top',
          end: `+=${deities.length * 85}%`, 
          pin: true,
          scrub: 0.8, // Snappier response (reduced from 1)
          snap: {
            snapTo: 1 / (deities.length - 1),
            duration: 0.6, 
            ease: 'power2.inOut',
            delay: 0.05
          },
          anticipatePin: 1,
        }
      })

      boxes.forEach((box, i) => {
        const itemTl = gsap.timeline()
        const visual = box.querySelector('.deity-visual-column')
        const info = box.querySelector('.deity-info-column')

        if (i === 0) {
          // First deity starts visible or manifests immediately
          itemTl.set(box, { opacity: 1, visibility: 'visible', scale: 1, y: 0, force3D: true })
          itemTl.set(visual, { x: 0, filter: 'brightness(1.1)' })
          itemTl.set(info, { x: 0, opacity: 1 })
          itemTl.set(bgGlow, { '--glow-color': deities[0].glow })
          itemTl.set(dots[0], { height: 60, backgroundColor: '#D4A520', boxShadow: '0 0 20px rgba(212, 165, 32, 0.4)' })
        } else {
          // Others manifest as you scroll
          itemTl.fromTo(box, 
            { opacity: 0, visibility: 'hidden', scale: 1, y: 15, force3D: true },
            { opacity: 1, visibility: 'visible', scale: 1, y: 0, duration: 1.5, ease: 'power2.out' }
          )
          .fromTo(visual, { x: -30, filter: 'brightness(0)' }, { x: 0, filter: 'brightness(1.1)', duration: 1.8, ease: 'expo.out' }, '<')
          .fromTo(info, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 1.8, ease: 'expo.out' }, '<0.2')

          // Update Background Glow Color
          itemTl.to(bgGlow, {
            '--glow-color': deities[i].glow,
            duration: 1
          }, '<')

          // Update Dot Status
          itemTl.to(dots[i], {
            height: 60,
            backgroundColor: '#D4A520',
            boxShadow: '0 0 20px rgba(212, 165, 32, 0.4)',
            duration: 0.3
          }, '<')
        }

        // Manifestation exit (except last)
        if (i < boxes.length - 1) {
          itemTl.to(box, {
            opacity: 0,
            scale: 1,
            y: -50,
            duration: 1,
            ease: 'power2.in'
          }, '+=1')
          .to(dots[i], {
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            boxShadow: 'none',
            duration: 0.3
          }, '<')
        }

      masterTl.add(itemTl)
      })

      // Ensure ScrollTrigger recalculates after setup
      ScrollTrigger.refresh()

    }, darshanRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="darshan" id="darshan" ref={darshanRef}>
      <div className="darshan-container">
        <div className="mandala-aura-wrapper">
          <div className="mandala-line" />
          <div className="mandala-line" />
          <div className="mandala-line" />
        </div>
        <div className="darshan-bg-glow" />

        <div className="darshan-header-overlay">
          <div className="section-label" style={{ justifyContent: 'center' }}>Sacred Virtual Darshan</div>
        </div>

        <div className="darshan-content-fixed">
          {deities.map((d, i) => (
            <div key={i} className="deity-manifest-box">
              <div className="deity-visual-column">
                <div className="deity-glow-ring" />
                <img src={d.img} alt={d.name} loading="lazy" />
              </div>
              <div className="deity-info-column">
                <h4>{d.label}</h4>
                <div className="deity-name-main">{d.name}</div>
                <div className="deity-shlok">
                  {d.shlok}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="darshan-nav-vertical">
          {deities.map((_, i) => (
            <div key={i} className="nav-dot-darshan" />
          ))}
        </div>
      </div>
    </section>
  )
}
