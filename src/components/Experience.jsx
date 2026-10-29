import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="experience-section reveal">
      <div className="section-header">
        <h2 className="section-title">Work History</h2>
        <div className="title-bar"></div>
        <p className="section-subtitle">My professional experience in full stack, PHP/Laravel, and backend developer roles.</p>
      </div>

      <div className="timeline-container">
        {experience.map((job, idx) => (
          <div key={idx} className="timeline-item">
            {/* Timeline center line marker */}
            <div className="timeline-marker">
              <div className="marker-dot">
                <Briefcase size={16} />
              </div>
            </div>

            {/* Timeline content card */}
            <div className="timeline-content glass-card">
              <div className="job-header">
                <div className="job-title-group">
                  <h3 className="job-role">{job.role}</h3>
                  <h4 className="job-company">{job.company}</h4>
                </div>
                <div className="job-meta">
                  <div className="meta-item">
                    <Calendar size={14} />
                    <span>{job.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <ul className="job-bullets">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="bullet-item">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
