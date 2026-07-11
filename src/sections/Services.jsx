import { Moon, BookOpen, Sun, Compass, Heart, Star } from 'lucide-react'
import './Services.css'

// Try importing Lottie safely
let LottiePlayer = null
try {
  const mod = await import('lottie-react')
  LottiePlayer = mod.default || mod
  if (typeof LottiePlayer !== 'function' && LottiePlayer?.default) {
    LottiePlayer = LottiePlayer.default
  }
} catch (e) {
  LottiePlayer = null
}

// Import animations
let meditatingAnim, astrologyAnim, yogaAnim
try {
  meditatingAnim = (await import('../assets/lotties/Meditating.json')).default
  astrologyAnim = (await import('../assets/lotties/Astrology.json')).default
  yogaAnim = (await import('../assets/lotties/YogaDeveloper.json')).default
} catch (e) {
  meditatingAnim = null
  astrologyAnim = null
  yogaAnim = null
}

const services = [
  {
    title: 'Meditation & Mindfulness',
    desc: 'Guided meditation sessions with ambient music, calming video backgrounds, and personalized timers for deep inner peace.',
    lottie: meditatingAnim,
    fallbackIcon: Heart,
  },
  {
    title: 'Vedic Astrology',
    desc: 'Daily horoscopes, lucky numbers, lucky colors, and comprehensive Kundli analysis based on precise Vedic calculations.',
    lottie: astrologyAnim,
    fallbackIcon: Star,
  },
  {
    title: 'Mantra Chanting',
    desc: 'Digital mala counter with haptic feedback for 108-count jaap. Track your daily chanting practice with soothing backgrounds.',
    icon: Moon,
  },
  {
    title: 'Bhagavad Gita',
    desc: 'Read shlokas from the sacred Bhagavad Gita with translations. Receive morning and evening spiritual thoughts daily.',
    icon: BookOpen,
  },
  {
    title: 'Yoga & Reiki Healing',
    desc: 'Guided yoga postures and Reiki energy healing sessions designed to balance your chakras and restore vitality.',
    lottie: yogaAnim,
    fallbackIcon: Sun,
  },
  {
    title: 'Spiritual Remedies',
    desc: 'Discover sacred gemstones, pooja services, and spiritual remedies curated by experts to harmonize your life energies.',
    icon: Compass,
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-header">
        <div className="section-label reveal-up" style={{ justifyContent: 'center' }}>The Sacred Toolkit</div>
        <h2 className="reveal-up">Everything for Your <em>Spiritual Journey</em></h2>
        <p className="reveal-up">
          A comprehensive suite of spiritual tools and services designed to
          nurture your mind, body, and soul.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => {
          const IconComp = s.icon || s.fallbackIcon
          return (
            <div key={i} className="service-card reveal-up">
              <div className="service-glow" />
              <div className="service-icon">
                {s.lottie && LottiePlayer ? (
                  <LottiePlayer animationData={s.lottie} loop={true} className="lottie-anim" />
                ) : (
                  <div className="icon-circle">
                    <IconComp size={28} />
                  </div>
                )}
              </div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
