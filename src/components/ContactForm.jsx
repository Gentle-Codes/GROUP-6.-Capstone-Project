import React, { useState } from 'react';
import '../styles/ContactForm.css'; // Make sure path is correct

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required.';
    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('YOUR_INSTRUCTOR_SUBMISSION_ENDPOINT_HERE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Submission failed. Please try again later.');
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="form-success">
          <div className="success-icon">&#10003;</div>
          <h3>Message Sent Successfully!</h3>
          <p>Thank you for reaching out. We will get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      {submitError && <div className="submit-error">{submitError}</div>}
      <div className="form-wrapper">
        <label htmlFor="name">Full Name</label>
        <input id="name" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="field-error">{errors.name}</span>}

        <label htmlFor="email">Email Address</label>
        <input id="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="field-error">{errors.email}</span>}

        <label htmlFor="subject">Subject</label>
        <input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
        {errors.subject && <span className="field-error">{errors.subject}</span>}

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        {errors.message && <span className="field-error">{errors.message}</span>}

        <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="submit-btn">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </section>
  );
}