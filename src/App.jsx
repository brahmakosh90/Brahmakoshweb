import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Particles from './sections/Particles'
import Navigation from './sections/Navigation'
import Hero from './sections/Hero'
import Preloader from './components/Preloader/Preloader'
import DownloadModal from './components/DownloadModal/DownloadModal'
import PartnerModal from './components/PartnerModal/PartnerModal'
import WaniModal from './components/WaniModal/WaniModal'
import BazarModal from './components/BazarModal/BazarModal'

// Lazy loaded sections
const About = lazy(() => import('./sections/About'))
const Guides = lazy(() => import('./sections/Guides'))
const ConnectAstrologer = lazy(() => import('./sections/ConnectAstrologer'))
const Remedies = lazy(() => import('./sections/Remedies'))
const DivineEcosystem = lazy(() => import('./sections/DivineEcosystem'))
const Services = lazy(() => import('./sections/Services'))
const Darshan = lazy(() => import('./sections/Darshan'))
const Reels = lazy(() => import('./sections/Reels'))
const Partner = lazy(() => import('./sections/Partner'))
const GlobalPresence = lazy(() => import('./sections/GlobalPresence'))
const DownloadCTA = lazy(() => import('./sections/DownloadCTA'))
const SpiritualOS = lazy(() => import('./sections/SpiritualOS'))
const SpiritualAction = lazy(() => import('./sections/SpiritualAction'))
const Footer = lazy(() => import('./sections/Footer'))

import lotusTemple2 from './assets/webDowloadImages/Whisk_d4308a01b591f719bcc4dc3b69cd67a2dr.jpeg'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const appRef = useRef(null)
  const [loading, setLoading] = useState(true)
  const [isDownloadModalOpen, setDownloadModalOpen] = useState(false)
  const [isPartnerModalOpen, setPartnerModalOpen] = useState(false)
  const [isWaniModalOpen, setWaniModalOpen] = useState(false)
  const [isBazarModalOpen, setBazarModalOpen] = useState(false)

  useEffect(() => {
    // Only initialize GSAP if not loading or if we want to pick up elements as they mount
    const ctx = gsap.context(() => {
      const initReveals = () => {
        gsap.utils.toArray('.reveal-up:not(.initialized)').forEach(el => {
          el.classList.add('initialized');
          gsap.to(el, {
            opacity: 1, y: 0, duration: 0.9, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          })
        })
        gsap.utils.toArray('.reveal-left:not(.initialized)').forEach(el => {
          el.classList.add('initialized');
          gsap.to(el, {
            opacity: 1, x: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          })
        })
        gsap.utils.toArray('.reveal-right:not(.initialized)').forEach(el => {
          el.classList.add('initialized');
          gsap.to(el, {
            opacity: 1, x: 0, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          })
        })
        gsap.utils.toArray('.reveal-scale:not(.initialized)').forEach(el => {
          el.classList.add('initialized');
          gsap.to(el, {
            opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
          })
        })
      };

      initReveals();

      // Re-run on a small interval or MutationObserver to catch lazy items
      const observer = new MutationObserver(initReveals);
      observer.observe(appRef.current, { childList: true, subtree: true });

      return () => observer.disconnect();
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef} className="app-container">
      <Preloader onComplete={() => setLoading(false)} />

      <div className={`main-reveal ${!loading ? 'visible' : ''}`}>
        <Particles />
        <Navigation
          openDownloadModal={() => setDownloadModalOpen(true)}
          openWaniModal={() => setWaniModalOpen(true)}
          openBazarModal={() => setBazarModalOpen(true)}
        />
        <Hero isReady={!loading} />

        <Suspense fallback={null}>
          <About />
          <Guides />
          <ConnectAstrologer />
          <DivineEcosystem />
          <Remedies openBazarModal={() => setBazarModalOpen(true)} />
          {/* <Darshan /> */}
          <SpiritualAction />
          <Services />
          {/* <Reels /> */}
          <Partner openPartnerModal={() => setPartnerModalOpen(true)} />
          <GlobalPresence />
          <DownloadCTA openDownloadModal={() => setDownloadModalOpen(true)} />
          <SpiritualOS
            openWaniModal={() => setWaniModalOpen(true)}
            openBazarModal={() => setBazarModalOpen(true)}
          />
          <Footer openDownloadModal={() => setDownloadModalOpen(true)} />
        </Suspense>
      </div>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />
      <WaniModal
        isOpen={isWaniModalOpen}
        onClose={() => setWaniModalOpen(false)}
      />
      <BazarModal
        isOpen={isBazarModalOpen}
        onClose={() => setBazarModalOpen(false)}
      />
    </div>
  )
}
