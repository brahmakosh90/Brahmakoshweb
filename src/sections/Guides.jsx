import krishnaImg from '../assets/webDowloadImages/krishna.jpeg'
import rashmiImg from '../assets/imagesFromApp/reshmiTalk.png'
import './Guides.css'

export default function Guides() {
  return (
    <section className="guides" id="guides">
      <div className="guides-header">
        <div className="section-label reveal-up" style={{ justifyContent: 'center' }}>Your Spiritual Companions</div>
        <h2 className="reveal-up">Meet Your <em>Divine Guides</em></h2>
        <p className="reveal-up">
          Seek wisdom from Lord Krishna's teachings or receive personalized
          astrological guidance from Expert Rashmi — available anytime, anywhere.
        </p>
      </div>

      {/* Krishna */}
      <div className="guide-row">
        <div className="guide-image reveal-left">
          <div className="guide-aura" />
          <img src={krishnaImg} alt="Lord Krishna - Divine AI Guide" />
        </div>
        <div className="guide-info">
          <div className="guide-role reveal-up">Divine Spiritual Guide</div>
          <h3 className="reveal-up">Talk to Krishna</h3>
          <p className="reveal-up">
            Receive personalized spiritual guidance inspired by the eternal
            teachings of the Bhagavad Gita. Ask questions about life, dharma,
            karma, relationships, and purpose — and receive wisdom rooted in
            thousands of years of sacred knowledge.
          </p>
          <p className="reveal-up">
            Whether you seek clarity in moments of confusion or peace during
            turbulent times, Krishna's guidance illuminates your path forward.
          </p>
          <div className="guide-features reveal-up">
            <span className="guide-feature-tag">Gita Wisdom</span>
            <span className="guide-feature-tag">Spiritual Clarity</span>
            <span className="guide-feature-tag">Life Guidance</span>
            <span className="guide-feature-tag">Voice Chat</span>
          </div>
        </div>
      </div>

      {/* Rashmi */}
      <div className="guide-row reverse">
        <div className="guide-image reveal-right">
          <div className="guide-aura" />
          <img src={rashmiImg} alt="Expert Rashmi - Astrology Wellness Guide" />
        </div>
        <div className="guide-info">
          <div className="guide-role reveal-up">Astrology & Wellness Expert</div>
          <h3 className="reveal-up">Consult Expert Rashmi</h3>
          <p className="reveal-up">
            Get personalized astrological readings, Kundli analysis, daily
            predictions, and holistic wellness advice tailored to your birth
            chart. Rashmi combines deep Vedic astrology knowledge with modern
            wellness practices.
          </p>
          <p className="reveal-up">
            From your daily horoscope to detailed Dasha-Dosha analysis, receive
            insights that help you navigate life's journey with confidence.
          </p>
          <div className="guide-features reveal-up">
            <span className="guide-feature-tag">Kundli Analysis</span>
            <span className="guide-feature-tag">Daily Predictions</span>
            <span className="guide-feature-tag">Wellness Tips</span>
            <span className="guide-feature-tag">Numerology</span>
          </div>
        </div>
      </div>
    </section>
  )
}
