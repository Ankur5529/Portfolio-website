import React from 'react';
import './footer.scss';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="left-align">
        <p>
          Developed & Designed with <span className="purple-heart">❤️</span> by
          <a href="https://www.linkedin.com/in/ankur-kumar-b3aba931a" target="_blank" rel="noopener noreferrer" className="footer-link">Me</a>.
        </p>
      </div>
      <div className="center-align">
        <p>&copy; Ankur Kumar 2026</p>
      </div>
      <div className="right-align social-icons">
        <a href="https://github.com/Ankur5529" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ankur-kumar-b3aba931a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>

        <a href="https://www.geeksforgeeks.org/profile/kranku36wo" target="_blank" rel="noopener noreferrer"><FaCode /></a>
      </div>
    </footer>
  );
};

export default Footer;
