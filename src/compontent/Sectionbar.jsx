import React from "react";
import './sectionbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faDribbble, 
  faBehance, 
  faLinkedin, 
  faPinterest, 
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const SectionBarmain = () =>{
    return (
        <div className="social-links">
        <a href="https://dribbble.com" className="social-card" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDribbble} className="icon" />
          <div className="text">
            <h4>Dribbble</h4>
            <p>See My Work</p>
          </div>
        </a>
        <a href="https://behance.net" className="social-card" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faBehance} className="icon" />
          <div className="text">
            <h4>Behance</h4>
            <p>See My Work</p>
          </div>
        </a>
        
        <a href="https://linkedin.com" className="social-card" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
          <div className="text">
            <h4>LinkedIn</h4>
            <p>See My Work</p>
          </div>
        </a>

        <a href="https://www.instagram.com/ayushpathak.hya/" className="social-card" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
          <div className="text">
            <a href="https://www.instagram.com/ayushpathak.hya/" target="_blank">
            <h4>Instagram</h4>
            <p>See My Profile</p>
            </a>
          </div>
        </a>
      </div>
    )
}

export default SectionBarmain;