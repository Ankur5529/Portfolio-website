import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// --- Importing assets for Amazon Clone ---
import ac1 from '../../assets/projects/Amazonn clone/main.png';
import ac2 from '../../assets/projects/Amazonn clone/Division section.png';
import ac3 from '../../assets/projects/Amazonn clone/middle part.png';
import ac4 from '../../assets/projects/Amazonn clone/Footer.png';

// --- Importing assets for Expense tracker ---
import et1 from '../../assets/projects/Expense tracker/main.png';
import et2 from '../../assets/projects/Expense tracker/login page.png';
import et3 from '../../assets/projects/Expense tracker/dashboard 1.png';
import et4 from '../../assets/projects/Expense tracker/dashboard 2.png';

// --- Importing assets for Face Emotion detection ---
import fed1 from '../../assets/projects/Face Emotion detection/Main .png';
import fed2 from '../../assets/projects/Face Emotion detection/1.jpg';
import fed3 from '../../assets/projects/Face Emotion detection/2.jpg';
import fed4 from '../../assets/projects/Face Emotion detection/3.jpg';
import fed5 from '../../assets/projects/Face Emotion detection/4.jpg';
import fed6 from '../../assets/projects/Face Emotion detection/5.jpg';

// --- Importing assets for Football Match Analysis ---
import fma1 from '../../assets/projects/Footboll match analysis system/main_page.png';
import fma2 from '../../assets/projects/Footboll match analysis system/loading_1.png';
import fma3 from '../../assets/projects/Footboll match analysis system/loading_2.png';
import fma4 from '../../assets/projects/Footboll match analysis system/res_1.png';
import fma5 from '../../assets/projects/Footboll match analysis system/res_2.png';
// @ts-ignore
import fmaVideo from '../../assets/projects/Footboll match analysis system/processed_6f20b063-81bf-4c0d-b5c1-61c85926ea59_My Video-1.mp4';

// --- Importing assets for Notes sphere ---
import ns1 from '../../assets/projects/Notes sphere/main.png';
import ns2 from '../../assets/projects/Notes sphere/screenshot.png';
import ns3 from '../../assets/projects/Notes sphere/login.png';
import ns4 from '../../assets/projects/Notes sphere/signup.png';
import ns5 from '../../assets/projects/Notes sphere/dashboard.png';

const projectMedia = {
  amazon: [{ type: 'img', src: ac1 }, { type: 'img', src: ac2 }, { type: 'img', src: ac3 }, { type: 'img', src: ac4 }],
  expense: [{ type: 'img', src: et1 }, { type: 'img', src: et2 }, { type: 'img', src: et3 }, { type: 'img', src: et4 }],
  emotion: [{ type: 'img', src: fed1 }, { type: 'img', src: fed2 }, { type: 'img', src: fed3 }, { type: 'img', src: fed4 }, { type: 'img', src: fed5 }, { type: 'img', src: fed6 }],
  football: [{ type: 'img', src: fma1 }, { type: 'img', src: fma2 }, { type: 'img', src: fma3 }, { type: 'video', src: fmaVideo }, { type: 'img', src: fma4 }, { type: 'img', src: fma5 }],
  notes: [{ type: 'img', src: ns1 }, { type: 'img', src: ns2 }, { type: 'img', src: ns3 }, { type: 'img', src: ns4 }, { type: 'img', src: ns5 }]
};

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  font-size: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  z-index: 10;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: var(--gradient-secondary);
    border-color: transparent;
    transform: translateY(-50%) scale(1.15);
    box-shadow: 0 0 20px var(--accent-secondary);
  }

  &.left {
    left: 15px;
  }

  &.right {
    right: 15px;
  }
`;

const MediaSlider: React.FC<{ media: { type: string, src: string }[] }> = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="media-container">
      {media.length > 1 && (
        <NavButton className="left" onClick={prev}>
          &#10094;
        </NavButton>
      )}
      {currentMedia.type === 'video' ? (
        <video src={currentMedia.src} autoPlay muted loop playsInline />
      ) : (
        <img src={currentMedia.src} alt="Project Media" />
      )}
      {media.length > 1 && (
        <NavButton className="right" onClick={next}>
          &#10095;
        </NavButton>
      )}
    </div>
  );
};

// Main container for all projects
const ProjectsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--text-primary);
  font-family: 'Inter', sans-serif;
  padding: 80px 10px;
  overflow-x: hidden;
  width: 85%;
  max-width: 1400px;
  margin: 0 auto;
  
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
  
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Decorative Background Glows */
  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(150px);
    z-index: -1;
    opacity: 0.15;
    pointer-events: none;
  }
  
  &::before {
    top: 5%;
    left: -10%;
    width: 600px;
    height: 600px;
    background: var(--accent-primary);
  }

  &::after {
    bottom: 20%;
    right: -10%;
    width: 500px;
    height: 500px;
    background: var(--accent-tertiary);
  }
`;

// Title for the projects section
const SectionTitle = styled.h2`
  font-size: 3.5em;
  margin-bottom: 60px;
  text-align: center;
  width: 100%;
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Poppins', sans-serif;
  font-weight: 800;
  letter-spacing: 1px;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,0.1));
  
  @media (max-width: 768px) {
    font-size: 2.5em;
    margin-bottom: 40px;
  }
`;

// Container for big projects
const BigProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

// Container for individual projects with glassmorphism
const ProjectContainer = styled.div`
  width: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    border-color: var(--accent-secondary);
  }

  /* Media container for slider */
  .media-container {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 4px 20px rgba(0,0,0,0.4);
    padding: 10px;
  }

  /* Background image with parallax effect */
  img, video {
    width: 100%;
    max-height: 400px;
    border-radius: 12px;
    object-fit: contain;
    display: block;
    opacity: 0.9;
    transition: all 0.5s ease;
  }
  
  &:hover img, &:hover video {
    opacity: 1;
    transform: scale(1.02);
  }

  h3 {
    font-size: 2.2em;
    margin-bottom: 15px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    letter-spacing: -0.5px;
    
    @media (max-width: 768px) {
      font-size: 1.8em;
    }
  }

  p {
    font-size: 1.15em;
    margin-bottom: 30px;
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 800px;
    margin-inline: auto;
    
    @media (max-width: 768px) {
      font-size: 1.05em;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  a {
    color: var(--text-primary);
    font-size: 1.1em;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    padding: 12px 28px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 30px;
    transition: all 0.3s ease;
    font-weight: 500;
    backdrop-filter: blur(5px);

    svg {
      transition: transform 0.3s ease;
      font-size: 1.2em;
    }

    &:hover {
      background: var(--gradient-primary);
      border-color: transparent;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px var(--shadow-color);
      
      svg {
        transform: rotate(360deg) scale(1.2);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 25px;
  }
`;

// Container for small projects
const SmallProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  margin-top: 30px;
`;

// Container for individual small projects
const SmallProject = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 15px 40px rgba(0,0,0,0.25);
    border-color: var(--accent-secondary);
  }

  .media-container {
    position: relative;
    width: 100%;
    margin-bottom: 25px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    box-shadow: inset 0 4px 15px rgba(0,0,0,0.3);
  }

  img, video {
    width: 100%;
    height: 200px;
    border-radius: 10px;
    object-fit: contain;
    display: block;
    opacity: 0.9;
    transition: all 0.4s ease;
  }
  
  &:hover img, &:hover video {
    opacity: 1;
    transform: scale(1.05);
  }

  h3 {
    font-size: 1.6em;
    margin-bottom: 12px;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  p {
    font-size: 1.05em;
    margin-bottom: 25px;
    color: var(--text-secondary);
    line-height: 1.6;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }

  a {
    color: var(--text-primary);
    font-size: 1em;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    padding: 10px 20px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.2);
    border-radius: 20px;
    transition: all 0.3s ease;
    font-weight: 500;

    svg {
      transition: transform 0.3s ease;
    }

    &:hover {
      background: var(--gradient-primary);
      color: white;
      border-color: transparent;
      transform: translateY(-3px);
      box-shadow: 0 6px 15px var(--shadow-color);
      
      svg {
        transform: scale(1.3);
      }
    }
  }
`;

const Projects: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <ProjectsContainer
      id="projects"
      ref={elementRef}
      className={isVisible ? 'visible' : ''}
    >
      <SectionTitle>Projects</SectionTitle>
      <BigProjectsContainer>
        <ProjectContainer>
          <MediaSlider media={projectMedia.football} />
          <h3>Football Match Analysis System</h3>
          <p>
            An AI-powered system using Python, OpenCV, YOLO, and Computer Vision to analyze football matches and extract insightful statistics such as player tracking, distance covered, and real-time speed.
          </p>
          <div className="links">
            <a href="https://github.com/Ankur5529/Footboll-match-analysis-system" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <MediaSlider media={projectMedia.expense} />
          <h3>Expense Tracker (MERN)</h3>
          <p>A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js) to actively track, visualize, and manage personal daily expenses with an intuitive, responsive user interface.</p>
          <div className="links">
            <a href="https://github.com/Ankur5529/Expense_tracker" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="https://expense-tracker-zeta-orpin.vercel.app" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </ProjectContainer>

        <ProjectContainer>
          <MediaSlider media={projectMedia.emotion} />
          <h3>Face Emotion Detection</h3>
          <p>A machine learning and computer vision project that leverages deep learning techniques to accurately detect and classify human facial emotions in real-time from live video feeds.</p>
          <div className="links">
            <a href="https://github.com/Ankur5529/Emotion-detection" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
          </div>
        </ProjectContainer>
      </BigProjectsContainer>

      <SmallProjectsContainer>
        <SmallProject>
          <MediaSlider media={projectMedia.notes} />
          <h3>Notes Sphere</h3>
          <p>A comprehensive MERN stack note-taking application designed to help users seamlessly organize, securely store, and manage their personal notes.</p>
          <div className="links">
            <a href="https://github.com/Ankur5529/Notes_Sphere_Mern" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
            <a href="https://notes-sphere-swart.vercel.app" target="_blank" rel="noopener noreferrer">
              <FaGlobe /> Try it Out
            </a>
          </div>
        </SmallProject>

        <SmallProject>
          <MediaSlider media={projectMedia.amazon} />
          <h3>Amazon Clone</h3>
          <p>A dynamic front-end web application seamlessly replicating the core user interface, e-commerce flow, and responsive design of Amazon.</p>
          <div className="links">
            <a href="https://github.com/Ankur5529/Amazon_clone" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
          </div>
        </SmallProject>

        <SmallProject>
          <h3>More Projects Coming Soon...</h3>
          <p>Stay tuned!</p>
          <div className="links">
            <a href="https://github.com/Ankur5529" target="_blank" rel="noopener noreferrer">
              <FaGithub /> See on GitHub
            </a>
          </div>
        </SmallProject>
      </SmallProjectsContainer>

      {/* Modal removed */}

    </ProjectsContainer>
  );
};

export default Projects;
