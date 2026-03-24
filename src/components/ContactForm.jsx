import React, { useState } from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="success-message">
            <h2>Message Sent Successfully</h2>
            <p>Thank you for reaching out. We’ll get back to you soon.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Have Questions About Planetary Science?</h2>

        <p className="contact-desc">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed?
          <br />
          Reach out and we’ll get back to you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>
                Full Name<span className="required">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && (
                <small className="error-text">{errors.fullName}</small>
              )}
            </div>

            <div className="form-group">
              <label>
                Email<span className="required">*</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="error-text">{errors.email}</small>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>
                Phone Number<span className="required">*</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Please enter a valid phone number."
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && (
                <small className="error-text">{errors.phoneNumber}</small>
              )}
            </div>

            <div className="form-group">
              <label>
                Message<span className="required">*</span>
              </label>
              <input
                type="text"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
              <small>100 characters</small>
              {errors.message && (
                <small className="error-text">{errors.message}</small>
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit <span className="arrow-icon">›</span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm;