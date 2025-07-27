import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qwqgndb',       // Your Service ID
        'template_bwb0647',      // Your Template ID
        form.current,
        'W0IOotEK4nEJlqyaz'     // Your Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          alert('Oops! Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <section className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-5">Contact Us</h2>

      <div className="row">
        {/* LEFT COLUMN - Contact Info */}
        <div className="col-md-6 mb-5 mb-md-0">
          <h4 className="mb-3">Reach Out to Us</h4>
          <p><strong>On-Site Manager:</strong> Basti, Uttar Pradesh</p>
          <p><strong>Engineer:</strong> Gorakhpur & Barhalganj</p>
          <p><strong>Phone:</strong> <a href="tel:+919956914748">+91-9956914748</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@bnconstruction.com">info@bnconstruction.com</a></p>
          <p><strong>Office Address:</strong> Barhalganj, Gorakhpur, Uttar Pradesh 273402</p>
        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <div className="col-md-6">
          <h4 className="mb-3">Send Us a Message</h4>

          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="user_name"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="user_email"
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="user_phone"
                className="form-control"
                placeholder="+91-"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                className="form-control"
                rows="4"
                placeholder="Describe your project or query..."
                required
              ></textarea>
            </div>

            {/* Hidden input for current time */}
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button type="submit" className="btn btn-primary px-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
