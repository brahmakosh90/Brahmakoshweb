import shlokaImg from '../assets/webDowloadImages/gitaslok.jpeg'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-visual reveal-left">
          <div className="about-image-glow" />
          <div className="about-image-wrap">
            <img src={shlokaImg} alt="Sacred Shloka Mandala" />
          </div>
        </div>
        <div className="about-text">
          <div className="section-label reveal-up">Our Sacred Mission</div>
          <h2 className="reveal-up">
            Bridging Timeless Wisdom<br />
            With Tomorrow's Intelligence
          </h2>
          <p className="reveal-up">
            Brahmakosh is born from a deep reverence for India's ancient spiritual
            heritage and a vision for its digital future. We believe that the
            profound teachings of the Bhagavad Gita, the healing power of meditation,
            and the precision of Vedic astrology deserve a platform as elevated
            as the wisdom itself.
          </p>
          <p className="reveal-up">
            From our headquarters in Dubai to our technology hub in New Delhi,
            our team of spiritual scholars, technologists, and wellness experts
            work together to create experiences that transform lives.
          </p>
          <div className="about-quote reveal-up">
            "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय"<br />
            <span className="about-quote-source">
              — Perform your duty with steadfastness, O Arjuna. — Bhagavad Gita 2.48
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
