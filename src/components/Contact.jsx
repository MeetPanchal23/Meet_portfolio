import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for that field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section reveal">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <div className="title-bar"></div>
        <p className="section-subtitle">Have a project or opportunity? Let's connect and build together.</p>
      </div>

      <div className="contact-grid">
        {/* Contact Info Card */}
        <div className="contact-info-panel glass-card">
          <h3 className="panel-title">Contact Channels</h3>
          <p className="panel-desc">Feel free to reach out directly or use the contact form.</p>

          <div className="contact-details">
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}`} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
              <div className="icon-box bg-glow-primary">
                <Mail size={20} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Email Me</span>
                <span className="detail-value">{personalInfo.email}</span>
              </div>
            </a>

            <a href={`tel:${personalInfo.phone}`} className="contact-detail-item">
              <div className="icon-box bg-glow-secondary">
                <Phone size={20} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Call Me</span>
                <span className="detail-value">{personalInfo.phone}</span>
              </div>
            </a>

            <div className="contact-detail-item">
              <div className="icon-box bg-glow-tertiary">
                <MapPin size={20} />
              </div>
              <div className="detail-content">
                <span className="detail-label">Location</span>
                <span className="detail-value">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="contact-form-panel glass-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-input"
                placeholder="Job Inquiry / Discussion"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className={`form-input ${errors.message ? 'input-error' : ''}`}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="alert-box alert-success glass-card">
                <strong>Success!</strong> Your message has been sent successfully. Meet will get back to you shortly.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="alert-box alert-error glass-card">
                <strong>Error!</strong> Something went wrong. Please try again or email directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
