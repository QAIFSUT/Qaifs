import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content">
            <h1 className="section-title">About QAIFS</h1>
            <p className="about-subtitle">
              QAIFS (Quantitative AI & Financial Systems) is a student-led organization at the University of Toronto Scarborough 
              dedicated to exploring, promoting, and facilitating the applications of artificial intelligence in quantitative finance and development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission & Purpose</h2>
              <p>
                QAIFS exists to explore, promote, and facilitate the applications of artificial intelligence in quantitative finance and development. 
                We enhance U of T Scarborough's educational, social, and cultural environment by providing resources, hosting events, 
                and building a community around AI & FinTech innovation—always operating as a non-profit within the university framework.
              </p>
              <p>
                Our organization serves as a bridge between academic learning and practical applications, 
                creating opportunities for students to engage with cutting-edge technologies and industry practices 
                in the rapidly evolving fields of AI and quantitative finance.
              </p>
            </div>
            <div className="mission-stats">
              <div className="stat-item">
                <h3>100%</h3>
                <p>Non-Profit Focus</p>
              </div>
              <div className="stat-item">
                <h3>Open</h3>
                <p>Membership Policy</p>
              </div>
              <div className="stat-item">
                <h3>7</h3>
                <p>Executive Positions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <h2 className="section-title">Core Values & Commitments</h2>
          <div className="values-grid">
            <div className="value-card card">
              <div className="value-icon">🤝</div>
              <h3>Inclusivity & Openness</h3>
              <p>Membership is open to all UofT students, staff, faculty, and alumni, with full rights to participate, vote, and organize.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">⚖️</div>
              <h3>Respect & Equity</h3>
              <p>Zero tolerance for discrimination; every member enjoys freedom of expression so long as it remains lawful and respectful.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🔒</div>
              <h3>Privacy & Integrity</h3>
              <p>Member data is kept strictly confidential and used solely to deliver club services.</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🎓</div>
              <h3>Non-Commercial Focus</h3>
              <p>Activities are educational and community-oriented, not driven by profit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section section">
        <div className="container">
          <h2 className="section-title">Leadership Structure</h2>
          <p className="leadership-intro">
            Seven elected student executives form the heart of QAIFS's governance and day-to-day operations:
          </p>
          <div className="leadership-grid">
            <div className="leadership-card card">
              <div className="leadership-icon">👑</div>
              <h3>President/Founder</h3>
              <p>Official spokesperson and strategic lead</p>
            </div>
            <div className="leadership-card card">
              <div className="leadership-icon">💰</div>
              <h3>VP Finance</h3>
              <p>Budgeting, accounting & financial reporting</p>
            </div>
            <div className="leadership-card card">
              <div className="leadership-icon">💻</div>
              <h3>VP Technology</h3>
              <p>Website, workshops & tech infrastructure</p>
            </div>
            <div className="leadership-card card">
              <div className="leadership-icon">🎪</div>
              <h3>VP Events</h3>
              <p>Programming and event execution</p>
            </div>
            <div className="leadership-card card">
              <div className="leadership-icon">📢</div>
              <h3>VP Marketing</h3>
              <p>Promotion, social media & on-campus visibility</p>
            </div>
            <div className="leadership-card card">
              <div className="leadership-icon">📞</div>
              <h3>VP Communications</h3>
              <p>Liaison with other clubs & internal communications</p>
            </div>
            <div className="leadership-card card">
              <div className="leadership-icon">👥</div>
              <h3>VP Membership</h3>
              <p>Recruitment, retention & member engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="governance-section section">
        <div className="container">
          <h2 className="section-title">Governance & Accountability</h2>
          <div className="governance-grid">
            <div className="governance-card card">
              <h3>General Meetings</h3>
              <p>Held at least monthly to review activities, finances, and solicit member feedback.</p>
            </div>
            <div className="governance-card card">
              <h3>Executive Meetings</h3>
              <p>Biweekly during the academic year (Sept – Apr) for operational decisions.</p>
            </div>
            <div className="governance-card card">
              <h3>Elections & Terms</h3>
              <p>Annual elections before March 31; strict application and oversight process to ensure fairness.</p>
            </div>
            <div className="governance-card card">
              <h3>Amendments</h3>
              <p>Constitutional changes require 2/3 member approval, with 14 days' notice and rationale provided in advance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="membership-section section">
        <div className="container">
          <h2 className="section-title">Membership Highlights</h2>
          <div className="membership-content">
            <div className="membership-info">
              <h3>Term & Structure</h3>
              <p>Membership runs from September 1 through August 31 each year.</p>
              
              <h3>How to Apply</h3>
              <p>To become a member of QAIFS, simply email us at <strong>qaifs.ut@gmail.com</strong> expressing your interest in joining. Include your name, UofT affiliation (student/staff/faculty/alumni), and a brief statement about your interest in AI and quantitative finance.</p>
              
              <h3>Member Rights</h3>
              <ul>
                <li>Vote in elections</li>
                <li>Propose and run events</li>
                <li>Access to resources and workshops</li>
                <li>Participate in all club activities</li>
              </ul>
              
              <h3>Member Responsibilities</h3>
              <ul>
                <li>Uphold QAIFS's purpose and values</li>
                <li>Participate in meetings and events</li>
                <li>Respect peers and maintain inclusive environment</li>
                <li>Adhere to both QAIFS constitution and U of T policies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 