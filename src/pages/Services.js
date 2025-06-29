import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <div className="services-hero-content">
            <h1 className="section-title">Our Activities & Offerings</h1>
            <p className="services-subtitle">
              QAIFS provides a comprehensive range of educational activities and community-building 
              opportunities focused on AI and quantitative finance at U of T Scarborough.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card card">
              <div className="service-icon">📚</div>
              <h3>Educational Workshops</h3>
              <p>
                Hands-on workshops covering AI fundamentals, machine learning applications in finance, 
                quantitative analysis techniques, and programming skills for financial modeling.
              </p>
              <ul className="service-features">
                <li>Python for Financial Analysis</li>
                <li>Machine Learning in Trading</li>
                <li>Risk Management & AI</li>
                <li>Algorithmic Trading Basics</li>
              </ul>
            </div>

            <div className="service-card card">
              <div className="service-icon">🎪</div>
              <h3>Events & Seminars</h3>
              <p>
                Regular events featuring industry professionals, academic researchers, and thought leaders 
                in AI and quantitative finance, providing networking and learning opportunities.
              </p>
              <ul className="service-features">
                <li>Guest Speaker Series</li>
                <li>Industry Panel Discussions</li>
                <li>Research Presentations</li>
                <li>Networking Events</li>
              </ul>
            </div>

            <div className="service-card card">
              <div className="service-icon">💻</div>
              <h3>Technical Resources</h3>
              <p>
                Access to learning materials, code repositories, datasets, and tools for AI and 
                quantitative finance research and practical applications.
              </p>
              <ul className="service-features">
                <li>Learning Materials Library</li>
                <li>Code Examples & Tutorials</li>
                <li>Dataset Access</li>
                <li>Software & Tools</li>
              </ul>
            </div>

            <div className="service-card card">
              <div className="service-icon">👥</div>
              <h3>Community Building</h3>
              <p>
                Creating a supportive network of students, faculty, and professionals interested 
                in AI and FinTech innovation and collaboration.
              </p>
              <ul className="service-features">
                <li>Study Groups</li>
                <li>Mentorship Programs</li>
                <li>Project Collaboration</li>
                <li>Peer Learning</li>
              </ul>
            </div>

            <div className="service-card card">
              <div className="service-icon">🔬</div>
              <h3>Research & Innovation</h3>
              <p>
                Opportunities to engage in research projects, explore emerging technologies, 
                and contribute to the advancement of AI in quantitative finance.
              </p>
              <ul className="service-features">
                <li>Research Projects</li>
                <li>Innovation Challenges</li>
                <li>Academic Collaboration</li>
                <li>Publication Support</li>
              </ul>
            </div>

            <div className="service-card card">
              <div className="service-icon">🌟</div>
              <h3>Leadership Development</h3>
              <p>
                Opportunities to develop leadership skills through executive positions, 
                event organization, and community management roles.
              </p>
              <ul className="service-features">
                <li>Executive Positions</li>
                <li>Event Organization</li>
                <li>Team Management</li>
                <li>Strategic Planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects Section */}
      <section className="projects-section section">
        <div className="container">
          <h2 className="section-title">Our Projects</h2>
          <div className="coming-soon-container">
            <div className="coming-soon-content">
              <div className="coming-soon-icon">🚧</div>
              <h3>Coming Soon</h3>
              <p>We're working on exciting projects in AI and quantitative finance. Stay tuned for updates!</p>
              <p>Our team is developing innovative solutions and research initiatives that will be announced soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Community?</h2>
            <p>Membership is open to all UofT students, staff, faculty, and alumni. Start your journey in AI and quantitative finance today!</p>
            <Link to="/contact" className="btn btn-primary">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 