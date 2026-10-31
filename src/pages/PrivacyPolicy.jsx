import { Link } from 'react-router-dom'
import logo from '../assets/imagesFromApp/brahmkosh_logo.jpeg'
import './PrivacyPolicy.css'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes:
    • Name, email address, and phone number
    • Date of birth and location (for astrological services)
    • Payment information (processed securely via third-party providers)
    • Spiritual preferences, consultation history, and app usage data
    • Device information and IP address`
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the information we collect to:
    • Provide, maintain, and improve our spiritual wellness services
    • Personalize your experience with AI-powered insights (Krishna AI, Expert Rashmi)
    • Process transactions and send related information
    • Send spiritual guidance, notifications, and promotional communications
    • Monitor and analyze usage patterns to enhance the platform
    • Comply with legal obligations`
  },
  {
    title: '3. Sharing of Information',
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
    • Service providers who assist in our operations (payment processors, cloud hosting)
    • Spiritual experts and astrologers on our platform (only relevant consultation data)
    • Legal authorities when required by law or to protect our rights
    • Business partners with your explicit consent`
  },
  {
    title: '4. Data Security',
    content: `We implement industry-standard security measures to protect your personal information, including SSL encryption, secure data storage, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal data for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time via our Delete Account page. Upon deletion, your data will be permanently removed within 7 business days, except where retention is required by law.`
  },
  {
    title: '6. Cookies & Tracking',
    content: `We use cookies and similar tracking technologies to enhance your experience, analyze site traffic, and understand user behavior. You can control cookie settings through your browser preferences. Disabling cookies may affect certain features of the platform.`
  },
  {
    title: '7. Third-Party Services',
    content: `Our platform may contain links to third-party websites or integrate third-party services (e.g., payment gateways, analytics). We are not responsible for the privacy practices of these third parties and encourage you to review their privacy policies.`
  },
  {
    title: '8. Children\'s Privacy',
    content: `Brahmakosh is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information.`
  },
  {
    title: '9. Your Rights',
    content: `You have the right to:
    • Access and review your personal data
    • Correct inaccurate or incomplete information
    • Request deletion of your account and data
    • Opt-out of marketing communications at any time
    • Data portability where technically feasible
    
    To exercise these rights, contact us at privacy@brahmakosh.com`
  },
  {
    title: '10. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a prominent notice on our platform. Your continued use of Brahmakosh after changes constitutes acceptance of the updated policy.`
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions or concerns about this Privacy Policy, please contact us:
    
    Brahmakosh Divine Consultancy L.L.C.
    Email: privacy@brahmakosh.com
    Website: www.brahmakosh.com`
  }
]

export default function PrivacyPolicy() {
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
          <h1>Privacy Policy</h1>
          <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="policy-intro">
            At Brahmakosh, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our spiritual wellness platform.
          </p>
        </div>

        <div className="privacy-sections">
          {sections.map((section, i) => (
            <div key={i} className="privacy-section">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="policy-footer">
        <span>© {new Date().getFullYear()} Brahmakosh Divine Consultancy L.L.C. All rights reserved.</span>
        <Link to="/delete-account">Delete Account</Link>
      </div>
    </div>
  )
}
