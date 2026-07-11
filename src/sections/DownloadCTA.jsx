import { Download } from 'lucide-react'
import heroBg from '../assets/webDowloadImages/chakraImage.png'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './DownloadCTA.css'

export default function DownloadCTA({ openDownloadModal }) {
  return (
    <section className="cta" id="download">
      <div className="cta-overlay" />
      <div className="cta-mandala">
        <img src={heroBg} alt="" aria-hidden="true" />
      </div>
      <div className="cta-content">
        <img src={logo} alt="Brahmakosh" className="cta-logo reveal-scale" />
        <h2 className="reveal-up">Begin Your <em>Sacred Journey</em></h2>
        <p className="reveal-up">
          Download Brahmakosh and step into a world where ancient spiritual
          wisdom meets divine intelligence. Your transformation begins now.
        </p>
        <div className="cta-stores reveal-up">
          <button className="btn-primary" onClick={openDownloadModal}>
            <Download size={18} />
            Download App
          </button>
        </div>
      </div>
    </section>
  )
}
