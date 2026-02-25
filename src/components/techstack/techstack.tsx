import React from 'react';
import { FaGithub, FaGitAlt, FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaServer, FaChartLine, FaChartBar, FaBrain, FaEye, FaCodeBranch, FaDesktop, FaNetworkWired, FaShieldAlt, FaUserSecret } from 'react-icons/fa';
import { SiC, SiExpress, SiFlask, SiJsonwebtokens, SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiKeras, SiOpencv, SiMysql, SiMongodb, SiOracle, SiPostman, SiVisualstudiocode } from 'react-icons/si';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

import './techstack.scss';

const Techstack: React.FC = () => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      className={`about-technologies-container ${isVisible ? 'visible' : ''}`}
      ref={elementRef}
    >
      <section className="about-technologies">
        <h2>My Techstack</h2>
        <div className="technology-categories">

          <div className="technology-category">
            <h3>Programming</h3>
            <div className="technology-items">
              <div className="technology-item"><SiC /><p>C</p></div>
              <div className="technology-item"><FaPython /><p>Python</p></div>
              <div className="technology-item"><FaJava /><p>Java</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Frontend</h3>
            <div className="technology-items">
              <div className="technology-item"><FaHtml5 /><p>HTML</p></div>
              <div className="technology-item"><FaCss3Alt /><p>CSS</p></div>
              <div className="technology-item"><FaJs /><p>JavaScript</p></div>
              <div className="technology-item"><FaReact /><p>React.js</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Backend</h3>
            <div className="technology-items">
              <div className="technology-item"><FaNodeJs /><p>Node.js</p></div>
              <div className="technology-item"><SiExpress /><p>Express.js</p></div>
              <div className="technology-item"><SiFlask /><p>Flask</p></div>
              <div className="technology-item"><FaServer /><p>REST API</p></div>
              <div className="technology-item"><SiJsonwebtokens /><p>JWT Auth</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>AI/ML</h3>
            <div className="technology-items">
              <div className="technology-item"><SiNumpy /><p>NumPy</p></div>
              <div className="technology-item"><SiPandas /><p>Pandas</p></div>
              <div className="technology-item"><FaChartLine /><p>Matplotlib</p></div>
              <div className="technology-item"><FaChartBar /><p>Seaborn</p></div>
              <div className="technology-item"><SiScikitlearn /><p>scikit-learn</p></div>
              <div className="technology-item"><SiTensorflow /><p>TensorFlow</p></div>
              <div className="technology-item"><SiKeras /><p>Keras</p></div>
              <div className="technology-item"><SiOpencv /><p>OpenCV</p></div>
              <div className="technology-item"><FaBrain /><p>CNN</p></div>
              <div className="technology-item"><FaEye /><p>YOLO</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Databases</h3>
            <div className="technology-items">
              <div className="technology-item"><SiMysql /><p>MySQL</p></div>
              <div className="technology-item"><SiMongodb /><p>MongoDB</p></div>
              <div className="technology-item"><SiOracle /><p>Oracle</p></div>
            </div>
          </div>

          <div className="technology-category">
            <h3>Tools</h3>
            <div className="technology-items">
              <div className="technology-item"><FaGitAlt /><p>Git</p></div>
              <div className="technology-item"><FaGithub /><p>GitHub</p></div>
              <div className="technology-item"><SiPostman /><p>Postman</p></div>
              <div className="technology-item"><SiVisualstudiocode /><p>VS Code</p></div>
            </div>
          </div>

          <div className="technology-category" style={{ gridColumn: '1 / -1' }}>
            <h3>Coursework</h3>
            <div className="technology-items">
              <div className="technology-item"><FaCodeBranch /><p>DSA</p></div>
              <div className="technology-item"><FaDesktop /><p>OS</p></div>
              <div className="technology-item"><FaNetworkWired /><p>Networks</p></div>
              <div className="technology-item"><FaShieldAlt /><p>Cyber Security</p></div>
              <div className="technology-item"><FaUserSecret /><p>Ethical Hacking</p></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Techstack;
