import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Welcome to <span className="highlight">QAIFS</span>
            </h1>
            <p className="hero-subtitle">
              Quantitative AI & Financial Systems at U of T Scarborough. 
              We explore, promote, and facilitate the applications of artificial intelligence 
              in quantitative finance and development through education, events, and community building.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Join Us
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="floating-card card-1">🤖</div>
              <div className="floating-card card-2">📊</div>
              <div className="floating-card card-3">💹</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">Why Join QAIFS?</h2>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">🎓</div>
              <h3>Educational Excellence</h3>
              <p>Access to cutting-edge AI and quantitative finance resources, workshops, and learning opportunities.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🤝</div>
              <h3>Inclusive Community</h3>
              <p>Open to all UofT students, staff, faculty, and alumni with zero tolerance for discrimination.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🚀</div>
              <h3>Practical Experience</h3>
              <p>Bridge academic learning with real-world applications in AI and FinTech innovation.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🌟</div>
              <h3>Leadership Opportunities</h3>
              <p>Seven executive positions available with annual elections and democratic governance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do section">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="activities-grid">
            <div className="activity-card card">
              <div className="activity-icon">📚</div>
              <h3>Educational Resources</h3>
              <p>Provide access to AI and quantitative finance materials, tutorials, and learning resources.</p>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🎪</div>
              <h3>Events & Workshops</h3>
              <p>Host regular events, workshops, and seminars on AI applications in finance and technology.</p>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">👥</div>
              <h3>Community Building</h3>
              <p>Create a supportive network of students and professionals interested in AI and FinTech.</p>
            </div>
            <div className="activity-card card">
              <div className="activity-icon">🔬</div>
              <h3>Research & Innovation</h3>
              <p>Explore emerging technologies and their applications in quantitative finance and development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Explore AI & Quantitative Finance?</h2>
            <p>Join our community of innovators and learners. Membership is open to all UofT students, staff, faculty, and alumni!</p>
            <Link to="/contact" className="btn btn-primary">
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 