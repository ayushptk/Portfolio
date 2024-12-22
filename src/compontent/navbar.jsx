import { useState } from 'react';  // Importing useState hook for toggling nav links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Example icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);  // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Toggle the isOpen state on click
  };

  return (
    <nav className="navbar">
       <div className="hamburger" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="logo">MyPortfolio</div>
      
     
      
      {/* Nav links */}
    
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
       
      
        <li><a href="#home">Home</a></li>
        <li><a href="#aboutme">About</a></li>
        <li><a href="https://www.behance.net/ayushpathak17" target="_blank">Projects</a></li>
        <li><a href="#contactme">Contact</a></li>
      </ul>

      {/* Start button */}
      <button className="start">
        <i className="fa-solid fa-paper-plane" style={{color: " #ff0000"}}></i>
        <span>Started</span>
      </button>
    </nav>
  );
};

export default Navbar;
