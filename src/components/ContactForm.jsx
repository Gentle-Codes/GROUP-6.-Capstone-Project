import React from "react";
import "../styles/ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Have Questions About Planetary Science?</h2>

        <p className="contact-desc">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we’ll get back to you.
        </p>

        <form className="contact-form">
          {/* Row 1 */}
          <div className="form-row">
            <div className="form-group">
              <label>Full Name<span className="required">*</span></label>
              <input type="text" placeholder="Full name" />
            </div>

            <div className="form-group">
              <label>Email<span className="required">*</span></label>
              <input type="email" placeholder="example@example.com" />
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row">
            <div className="form-group">
              <label>Phone Number<span className="required">*</span></label>
              <input
                type="text"
                placeholder="Please enter a valid phone number."
              />
            </div>

            <div className="form-group">
              <label>Message<span className="required">*</span></label>
              <textarea placeholder="Enter your message"></textarea>
              <small>100 characters</small>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit →
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;