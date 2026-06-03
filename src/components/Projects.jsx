import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import { projects } from '../data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'React', 'Django', '.NET'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects-section reveal">
      <div className="section-header">
        <h2 className="section-title">Projects Portfolio</h2>
        <div className="title-bar"></div>
        <p className="section-subtitle">A collection of full stack projects reflecting my learning and experience.</p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <article key={idx} className="project-card glass-card">
            <div className="project-content">
              <div className="project-meta-top">
                <span className="project-category">{project.category}</span>
              </div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-footer">
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
              >
                <Github size={18} /> Code
              </a>
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link link-primary"
              >
                <ExternalLink size={18} /> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
