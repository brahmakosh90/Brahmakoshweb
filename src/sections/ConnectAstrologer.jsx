import React, { useState } from 'react'
import { MessageSquare, Phone, ShieldCheck, Star, ArrowRight, Video } from 'lucide-react'
import expertsSymbol from '../assets/imagesFromApp/experts_symbol.png'

// Import Expert Images
import agedManImg from '../assets/astroImages/agedman.jpeg'
import agedMan2Img from '../assets/astroImages/agedMan2.jpeg'
import womanImg from '../assets/astroImages/woman1.jpeg'
import youngManImg from '../assets/astroImages/youngMan.jpeg'
import youngMan2Img from '../assets/astroImages/youngMan2.jpeg'
import youngMan3Img from '../assets/astroImages/youngman3.jpeg'
import agedMan3Img from '../assets/astroImages/agedMan3.jpeg'

import './ConnectAstrologer.css'

const allExperts = [
  { 
    name: 'Swami Narayan', 
    img: agedMan3Img, 
    exp: '11 Yrs Exp', 
    rating: '5.0', 
    type: 'Vedic Specialist', 
    status: 'Online',
    categories: ['Top Rated', 'Trending']
  },
  { 
    name: 'Mohit Pandey', 
    img: youngManImg, 
    exp: '5 Yrs Exp', 
    rating: '4.9', 
    type: 'Vedic Astrology', 
    status: 'Online',
    categories: ['Top Rated', 'Trending']
  },
  { 
    name: 'Neha Mishra', 
    img: womanImg, 
    exp: '4 Yrs Exp', 
    rating: '4.8', 
    type: 'Numerology', 
    status: 'In Call',
    categories: ['Top Rated', 'New']
  },
  { 
    name: 'Acharya Sharma', 
    img: agedManImg, 
    exp: '12 Yrs Exp', 
    rating: '5.0', 
    type: 'Vastushastra', 
    status: 'Online',
    categories: ['Top Rated', 'Trending']
  },
  { 
    name: 'Pandit Rajesh', 
    img: agedMan2Img, 
    exp: '10 Yrs Exp', 
    rating: '4.7', 
    type: 'Kundli Expert', 
    status: 'Online',
    categories: ['Trending', 'New']
  },
  { 
    name: 'Guru Ravi', 
    img: youngMan2Img, 
    exp: '6 Yrs Exp', 
    rating: '4.9', 
    type: 'Palmistry', 
    status: 'Offline',
    categories: ['New']
  },
  { 
    name: 'Acharya Vyas', 
    img: youngMan3Img, 
    exp: '5 Yrs Exp', 
    rating: '4.8', 
    type: 'Face Reading', 
    status: 'Online',
    categories: ['Trending']
  }
]

export default function ConnectAstrologer() {
  const [activeTab, setActiveTab] = useState('Top Rated')

  const filteredExperts = allExperts.filter(expert => 
    expert.categories.includes(activeTab)
  )

  return (
    <section className="connect-astrologer" id="connect-astrologer">
      <div className="connect-container">
        <div className="connect-header">
          <div className="section-label reveal-up" style={{ justifyContent: 'center' }}>
            <img src={expertsSymbol} alt="" className="expert-symbol-icon" />
            Sacred Consultation Hub
          </div>
          <h2 className="reveal-up">Connect with <em>Certified Experts</em></h2>
          <p className="reveal-up">
            Seek personalized guidance for your life's path, career, and spiritual
            growth from our hand-picked panel of Vedic astrologers.
          </p>
        </div>

        <div className="experts-board reveal-up">
          <div className="board-glass">
            <div className="board-header">
              <div className="live-badge">
                <span className="dot" />
                Live Specialists Available
              </div>
              <div className="board-tabs">
                {['Top Rated', 'Trending', 'New'].map(tab => (
                  <span 
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </span>
                ))}
              </div>
            </div>

            <div className="experts-list">
              {filteredExperts.map((expert, idx) => (
                <div key={idx} className="expert-item reveal-scale">
                  <div className="expert-profile">
                    <div className="expert-avatar-circle">
                      <img src={expert.img} alt={expert.name} className="expert-photo" />
                      <div className={`status-orb ${expert.status === 'Online' ? 'green' : expert.status === 'In Call' ? 'orange' : 'gray'}`} />
                    </div>
                    <div className="expert-info">
                      <h4>{expert.name}</h4>
                      <div className="expert-meta">
                        <span>{expert.type}</span>
                        <span className="bullet">•</span>
                        <span>{expert.exp}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="expert-rating">
                    <Star size={14} fill="var(--gold-rich)" color="var(--gold-rich)" />
                    <span>{expert.rating}</span>
                  </div>

                  <div className="expert-actions">
                    <button className="chat-mini-btn">
                      <MessageSquare size={16} />
                      Chat
                    </button>
                    <button className="call-mini-btn">
                      <Phone size={16} />
                    </button>
                    <button className="video-mini-btn" title="Video Call">
                      <Video size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="board-footer">
              <button className="view-all-experts">
                Explore All Experts <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="trust-footer reveal-up">
          <div className="trust-item">
            <ShieldCheck size={20} color="var(--gold-rich)" />
            <span>100% Private & Anonymous Consultation</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-item">
            <Star size={20} color="var(--gold-rich)" />
            <span>Verified Experts with Rigorous Testing</span>
          </div>
        </div>
      </div>
    </section>
  )
}
