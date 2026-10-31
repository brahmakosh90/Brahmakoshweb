import { Link } from 'react-router-dom'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './Footer.css'

export default function Footer({ openDownloadModal }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Brahmakosh" />
              <span>Brahmakosh</span>
            </div>
            <p>
              A sacred digital sanctuary where ancient spiritual wisdom
              meets advanced AI technology. Dubai · India · New York · London
            </p>
          </div>
          <div className="footer-col">
            <h5>Features</h5>
            <a href="#guides">Talk to Krishna</a>
            <a href="#guides">Expert Rashmi</a>
            <a href="#services">Meditation</a>
            <a href="#services">Astrology</a>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <a href="#services">Mantra Chanting</a>
            <a href="#darshan">Digital Darshan</a>
            <a href="#services">Yoga & Reiki</a>
            <a href="#services">Bhagavad Gita</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#about">About Us</a>
            <a href="#global">Contact Us</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openDownloadModal(); }}>Download App</a>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/delete-account">Delete Account</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Brahmakosh Divine Consultancy L.L.C. All rights reserved.</span>
          <span>Made with 🙏 for spiritual seekers worldwide</span>
        </div>
      </div>
    </footer>
  )
}
