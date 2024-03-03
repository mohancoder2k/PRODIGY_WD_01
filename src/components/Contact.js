import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import '../App.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="social-links">
        <a href="https://linkedin.com/in/mohan-sarady-164321251/ " target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon linkedin" />
        </a>
        <a href="https://github.com/mohancoder2k" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon github" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
