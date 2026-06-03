import React from 'react';
import { Monitor, Server, Database } from 'lucide-react';
import { skillCategories } from '../data';

const Skills = () => {
  const getIcon = (categoryName) => {
    switch (categoryName) {
      case 'Frontend Development':
        return <Monitor size={24} className="category-icon text-primary" />;
      case 'Backend Development':
        return <Server size={24} className="category-icon text-secondary" />;
      default:
        return <Database size={24} className="category-icon text-tertiary" />;
    }
  };

  return (
    <section id="skills" className="skills-section reveal">
      <div className="section-header">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="title-bar"></div>
        <p className="section-subtitle">A breakdown of my technical stack and competencies.</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category-card glass-card">
            <div className="category-header">
              {getIcon(category.name)}
              <h3 className="category-title">{category.name}</h3>
            </div>
            
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ 
                        width: `${skill.level}%`,
                        background: category.name === 'Frontend Development' 
                          ? 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)'
                          : category.name === 'Backend Development'
                          ? 'linear-gradient(90deg, var(--secondary) 0%, #a855f7 100%)'
                          : 'linear-gradient(90deg, var(--primary) 0%, var(--tertiary) 100%)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
