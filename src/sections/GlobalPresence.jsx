import { Mail, MapPin, Send } from 'lucide-react'
import dubaiImg from '../assets/globelPrescence/dubaiHorizontal.jpg'
import indiaImg from '../assets/globelPrescence/india.jpg'
import newyorkImg from '../assets/globelPrescence/newyark.jpg'
import londonImg from '../assets/globelPrescence/london.jpg'
import './GlobalPresence.css'

const offices = [
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    img: dubaiImg,
    address: 'Office 1004, Al Rostamani Real Estate, Al Hamriya, Bur Dubai',
    isHQ: true,
  },
  {
    city: 'New Delhi',
    country: 'India',
    img: indiaImg,
    address: 'Workingdom, Block A, 2nd Floor, Raj Nagar – II, South West Delhi',
  },
  {
    city: 'New York',
    country: 'United States',
    img: newyorkImg,
    address: '447 Broadway, 2nd Floor, Suite 3314, NY 10013',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    img: londonImg,
    address: 'First Floor Office, 3 Hornton Place, W8 4LZ',
  },
]

export default function GlobalPresence() {
  return (
    <section className="global" id="global">
      <div className="global-header">
        <div className="section-label-container reveal-up">
          <span className="section-label">Rooted Worldwide</span>
        </div>
        <h2 className="reveal-up">Contact <em>Us</em></h2>
        <p className="reveal-up">
          From our global headquarters in Dubai to our technology hub in India,
          Brahmakosh serves spiritual seekers across every continent.
        </p>
      </div>

      <div className="contact-section">
        <div className="contact-info-panel reveal-up">
          <div className="contact-card email-card">
            <div className="contact-icon">
              <Mail size={24} />
            </div>
            <div className="contact-details">
              <h4>Email Us</h4>
              <a href="mailto:contact@brahmakosh.com" className="contact-link">contact@brahmakosh.com</a>
            </div>
          </div>
          <div className="contact-card support-card">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>
            <div className="contact-details">
              <h4>Global Presence</h4>
              <p>Operating in 4 Major Spiritual Hubs</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container reveal-up">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <input type="text" id="name" placeholder=" " required />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
            </div>
            <div className="form-group">
              <input type="text" id="subject" placeholder=" " required />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea id="message" rows="5" placeholder=" " required></textarea>
              <label htmlFor="message">How can we help you?</label>
            </div>
            <button type="submit" className="contact-submit">
              <span>Send Message</span>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="global-bento-grid">
        {offices.map((o, i) => (
          <div
            key={i}
            className={`global-card reveal-up ${o.isHQ ? 'card-hq' : ''}`}
          >
            <div className="card-image-wrapper">
              <img src={o.img} alt={o.city} loading="lazy" />
            </div>

            <div className="global-overlay">
              <div className="overlay-content">
                {o.isHQ && <span className="hq-badge">Global Headquarters</span>}
                <div className="global-country-row">
                  <span className="global-country">{o.country}</span>
                </div>
                <h3 className="global-city">{o.city}</h3>
                <p className="global-address">{o.address}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
