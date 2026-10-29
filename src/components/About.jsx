import React from 'react';
import { Award, BookOpen, Briefcase, Calendar, MapPin } from 'lucide-react';
import { personalInfo, education, certifications } from '../data';

const About = () => {
  return (
    <section id="about" className="about-section reveal">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="title-bar"></div>
        <p className="section-subtitle">Get to know my academic background, experience, and drive.</p>
      </div>

      <div className="about-grid">
        <div className="about-main glass-card">
          <h3 className="about-subtitle">Who is Meet Panchal?</h3>
          <p className="about-text">
            I am an enthusiastic Full Stack Developer based in {personalInfo.location}. 
            I recently completed my <strong>B.Sc. in Computer Science & Information Technology</strong>, 
            which provided me with a solid foundation in programming paradigms, database management systems, 
            and modern web architectures.
          </p>
          <p className="about-text">
            My development journey is driven by practical problem-solving. Working on live production platforms and developer roles, 
            I develop end-to-end applications using <strong>PHP, Laravel, MySQL, React.js, Node.js, Express.js, Python/Django</strong> and <strong>C#/.NET</strong> ecosystems, 
            connecting them to robust relational databases with Git version control. I love bridging powerful backend APIs with clean, fluid, and responsive frontend experiences.
          </p>

          <div className="info-chips">
            <div className="info-chip">
              <MapPin size={16} className="chip-icon" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="info-chip">
              <Calendar size={16} className="chip-icon" />
              <span>B.Sc. Completed 2026</span>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-card glass-card">
            <Briefcase size={28} className="stat-icon text-primary" />
            <h4 className="stat-number">3+</h4>
            <p className="stat-label">Production Client Sites</p>
          </div>

          <div className="stat-card glass-card">
            <Award size={28} className="stat-icon text-secondary" />
            <h4 className="stat-number">12+</h4>
            <p className="stat-label">Technologies Mastered</p>
          </div>

          <div className="stat-card glass-card">
            <BookOpen size={28} className="stat-icon text-tertiary" />
            <h4 className="stat-number">1</h4>
            <p className="stat-label">Django Certification</p>
          </div>
        </div>
      </div>

      <div className="edu-cert-container">
        <div className="edu-block">
          <h3 className="sub-section-title"><BookOpen size={20} className="title-icon" /> Education</h3>
          <div className="timeline-cards">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card glass-card">
                <div className="edu-header">
                  <h4 className="edu-degree">{edu.degree}</h4>
                  <span className="edu-duration">{edu.duration}</span>
                </div>
                <h5 className="edu-institution">{edu.institution}</h5>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cert-block">
          <h3 className="sub-section-title"><Award size={20} className="title-icon" /> Certifications</h3>
          <div className="timeline-cards">
            {certifications.map((cert, idx) => (
              <div key={idx} className="cert-card glass-card">
                <h4 className="cert-name">{cert.name}</h4>
                <h5 className="cert-issuer">Verified by {cert.issuer}</h5>
                <p className="cert-details">{cert.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
