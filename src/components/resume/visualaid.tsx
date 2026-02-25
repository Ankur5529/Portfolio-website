import React from 'react';
import { ResumeSection } from './resumetypes';

const VisualAid: React.FC<{ section: ResumeSection }> = ({ section }) => {
  return (
    <div className="section-container">
      <h1 className="section-title">{section.title}</h1>
      <div className="education-container">
        {section.entries.map((entry) => (
          <div key={entry.school} className="education-item">
            <div className="education-row primary-row">
              <span className="education-school">{entry.school}</span>
              <span className="education-date">{entry.date}</span>
            </div>
            <div className="education-row secondary-row">
              <span className="education-degree"><i>{entry.degree}</i></span>
              <span className="education-location"><i>{entry.location}</i></span>
            </div>
            {entry.bulletPoints && (
              <ul>
                {entry.bulletPoints.map((bulletPoint) => (
                  <li key={bulletPoint} className="bullet-point">
                    {bulletPoint}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisualAid;
