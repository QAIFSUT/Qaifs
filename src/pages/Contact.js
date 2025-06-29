import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="section-title">Get In Touch</h1>
            <p className="contact-subtitle">
              Ready to join QAIFS? Have questions about our activities or membership? 
              We'd love to hear from you. Let's discuss how you can get involved in our AI and quantitative finance community.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-info-full">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div className="info-content">
                <h3>Email</h3>
                <p>qaifs.ut@gmail.com</p>
                <p>For general inquiries and membership applications</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Campus Location</h3>
                <p>University of Toronto Scarborough</p>
                <p>1265 Military Trail</p>
                <p>Scarborough, ON M1C 1A4</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🎓</div>
              <div className="info-content">
                <h3>Membership</h3>
                <p>Open to all UofT students, staff, faculty, and alumni</p>
                <p>Free membership with full participation rights</p>
                <p>Apply by emailing us at qaifs.ut@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Meeting Times</h3>
                <p>General Meetings: Monthly</p>
                <p>Executive Meetings: Biweekly (Sept-Apr)</p>
                <p>Events: Throughout the academic year</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/hashim-raja-8408b8270/" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                <a href="https://www.instagram.com/qaifs.ut/" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                <a href="https://discord.gg/UnSTYKjBjx" target="_blank" rel="noopener noreferrer" className="social-icon">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section section">
        <div className="container">
          <h2 className="section-title">Find Us on Campus</h2>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>📍 University of Toronto Scarborough</h3>
                <p>1265 Military Trail, Scarborough, ON M1C 1A4</p>
                <p>We're located on the beautiful UTSC campus, easily accessible by TTC and GO Transit.</p>
                <p>Look for our events and meetings in various campus locations throughout the academic year.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 