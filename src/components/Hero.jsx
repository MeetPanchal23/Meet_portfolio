import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { personalInfo } from '../data';

const roles = [
  "Full Stack Developer",
  "Software Developer",
  "Frontend Developer",
  ".NET Developer",
  "Python Developer",
  "Django Developer",
  "React Developer"
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenRoles = 2000;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting) {
      if (charIndex < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(prev => prev + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenRoles);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(prev => prev - 1);
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setRoleIndex(prev => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        <div className="hero-content reveal-left active">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            Available for Opportunities
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-text">{personalInfo.name}</span>
          </h1>
          
          <h2 className="hero-subtitle">
            <span className="typed-text">{displayText}</span>
            <span className="cursor-blink">|</span>
          </h2>
          
          <p className="hero-description">
            {personalInfo.summary}
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Work <ArrowRight size={18} />
            </a>
            <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              View Resume <Download size={18} />
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Email Meet">
              <Mail size={20} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub Profile">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-link" title="LinkedIn Profile">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-visual reveal-right active">
          <div className="visual-wrapper">
            {/* Ambient glowing circles */}
            <div className="glow-circle glow-1"></div>
            <div className="glow-circle glow-2"></div>
            
            {/* Interactive Code Editor Visual */}
            <div className="code-editor-box glass-card">
              <div className="editor-header">
                <div className="editor-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <div className="editor-title">DeveloperProfile.jsx</div>
              </div>
              <div className="editor-body">
                <pre className="code-pre">
                  <code>
                    <span className="code-keyword">const</span> <span className="code-variable">developer</span> = &#123;<br />
                    &nbsp;&nbsp;name: <span className="code-string">"{personalInfo.name}"</span>,<br />
                    &nbsp;&nbsp;role: <span className="code-string">"Full Stack Developer"</span>,<br />
                    &nbsp;&nbsp;skills: [<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"React.js"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"Django"</span>,<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="code-string">"C#"</span>, <span className="code-string">".NET Core"</span>, <span className="code-string">"SQL"</span><br />
                    &nbsp;&nbsp;],<br />
                    &nbsp;&nbsp;experience: <span className="code-number">2</span> /* internships */,<br />
                    &nbsp;&nbsp;location: <span className="code-string">"Ahmedabad, IN"</span>,<br />
                    &nbsp;&nbsp;status: <span className="code-string">"Active & Eager to Learn"</span><br />
                    &#125;;<br /><br />
                    <span className="code-keyword">function</span> <span className="code-function">renderSkills</span>() &#123;<br />
                    &nbsp;&nbsp;<span className="code-keyword">return</span> developer.skills.<span className="code-function">map</span>(skill =&gt; (<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="code-tag">Badge</span> key=&#123;skill&#125;&gt;&#123;skill&#125;&lt;/<span className="code-tag">Badge</span>&gt;<br />
                    &nbsp;&nbsp;));<br />
                    &#125;
                  </code>
                </pre>
              </div>
            </div>
            
            {/* Tech Float Elements */}
            <div className="tech-badge badge-react">React.js</div>
            <div className="tech-badge badge-django">Django</div>
            <div className="tech-badge badge-dotnet">.NET Core</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
