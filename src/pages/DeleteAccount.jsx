import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './DeleteAccount.css'

export default function DeleteAccount() {
  const [form, setForm] = useState({ email: '', phone: '', reason: '', confirm: false })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.confirm) return
    setSubmitted(true)
  }

  return (
    <div className="policy-page">
      <div className="policy-nav">
        <Link to="/" className="policy-logo">
          <img src={logo} alt="Brahmakosh" />
          <span>Brahmakosh</span>
        </Link>
      </div>

      <div className="policy-container">
        <div className="policy-header">
          <h1>Delete Account</h1>
          <p>We're sorry to see you go. Your account and all associated data will be permanently deleted.</p>
        </div>

        {submitted ? (
          <div className="delete-success">
            <div className="success-icon">🙏</div>
            <h2>Request Submitted</h2>
            <p>Your account deletion request has been received. We will process it within <strong>7 business days</strong>. You will receive a confirmation email once completed.</p>
            <Link to="/" className="back-home-btn">Return to Home</Link>
          </div>
        ) : (
          <div className="delete-card">
            <div className="delete-warning">
              <h3>⚠️ Before you proceed, please note:</h3>
              <ul>
                <li>All your spiritual journey data, readings, and history will be permanently deleted.</li>
                <li>Your subscription (if active) will be cancelled immediately with no refund.</li>
                <li>This action is <strong>irreversible</strong> and cannot be undone.</li>
                <li>You will lose access to all purchased content and consultations.</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="delete-form">
              <div className="form-group">
                <label>Registered Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Registered Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Reason for Leaving (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Help us improve by sharing your reason..."
                  value={form.reason}
                  onChange={e => setForm({ ...form, reason: e.target.value })}
                />
              </div>
              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="confirm"
                  checked={form.confirm}
                  onChange={e => setForm({ ...form, confirm: e.target.checked })}
                />
                <label htmlFor="confirm">I understand that this action is permanent and irreversible.</label>
              </div>
              <button type="submit" className="delete-btn" disabled={!form.confirm}>
                Submit Deletion Request
              </button>
            </form>
          </div>
        )}
      </div>

      <div className="policy-footer">
        <span>© {new Date().getFullYear()} Brahmakosh Divine Consultancy L.L.C.</span>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  )
}
