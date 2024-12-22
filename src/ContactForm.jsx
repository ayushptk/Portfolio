import React from "react";
import "./style/ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-container" id="contactme">
      <h2 className="contact-title">CONTACT</h2>
      <div className="contact-grid">
       
    


<div className="social-media">
  <h1>Contact Me</h1>

  <div className="icon-text">
               
            <i className="fas fa-envelope"></i>
            <p>ptkaayush13@gmail.com</p>
          </div>
          <div className="icon-text phone">
          <i className="fas fa-phone"></i>
          <p>9812458932</p>

          </div>
          

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
          <a href="/cv.pdf" download className="btn-download">Download CV</a>
        
</div>
        {/* Right Card: Contact Form */}
        <div className="contact-card contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-submit">Submit</button>
          </form>
        </div>
      </div>
      
      
    </div>
    
  );
}

export default ContactForm;
