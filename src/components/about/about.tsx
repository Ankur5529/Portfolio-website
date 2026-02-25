import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './about.scss';

import ankurPhoto from '../../assets/me/webp/IMG_20241027_123729.jpg';

const photos = [ankurPhoto];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div
      className={`about-container ${isVisible ? 'visible' : ''}`}
      id="about"
      ref={elementRef}
    >
      <section className="about-intro">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>

          <p>
            Hello! My name is <span className="purple-text">Ankur Kumar</span>. I’m a passionate and detail-oriented
            <span className="purple-text"> Full-Stack Developer</span> with strong experience in building scalable web applications
            using the <span className="purple-text">MERN stack</span> and <span className="purple-text">Python (Flask)</span>.
          </p>

          <p>
            I am currently pursuing my <span className="purple-text">Master of Computer Applications (MCA)</span> at
            <span className="purple-text"> PES University, Bengaluru</span>, where I actively work on real-world projects
            that combine software engineering with intelligent systems.
          </p>

          <p>
            My work includes developing full-stack applications like an
            <span className="purple-text"> Expense Tracker (MERN)</span> and building AI-powered systems such as a
            <span className="purple-text"> Football Match Analysis System</span> using
            <span className="purple-text"> Python, OpenCV, YOLO, and Computer Vision</span>.
          </p>

          <p>
            I enjoy designing <span className="purple-text">clean, user-friendly interfaces</span> and building
            <span className="purple-text"> robust backend systems</span>, while also deploying machine learning models
            into production-ready applications.
          </p>

          <p>
            Along with development, I have academic training in
            <span className="purple-text"> Cyber Security, Network Security, and Ethical Hacking</span>,
            which helps me build applications with a strong focus on
            <span className="purple-text"> security and best practices</span>.
          </p>

          <p>
            Outside of coding, I enjoy learning new technologies, solving challenging problems, and continuously
            improving my skills through hands-on projects.
          </p>

          <p>
            If you’d like to connect or explore my work, feel free to visit my
            <a href="https://www.linkedin.com/in/ankur-kumar-b3aba931a" target="_blank" rel="noopener noreferrer"> LinkedIn</a> or
            <a href="https://github.com/Ankur5529" target="_blank" rel="noopener noreferrer"> GitHub</a>.
          </p>
        </div>

        <div className="about-photo">
          <img src={photo} alt="Ankur Kumar" />
        </div>
      </section>
    </div>
  );
};

export default About;