import React from 'react';
import './Awards.css';

const awardsData = [
  { title: 'Grand Prize', description: 'Awarded to the best overall project.', prize: '$5000' },
  { title: 'Best Innovation', description: 'For the most innovative and creative idea.', prize: '$2500' },
  { title: 'Best UI/UX', description: 'Recognizing the best design and user experience.', prize: '$1500' },
  { title: 'People’s Choice', description: 'Voted by attendees.', prize: '$1000' },
];

const Awards = () => {
  return (
    <section className="awards-section">
      <div className="awards-container">
        <h2 className="awards-title">Awards & Prizes</h2>
        <div className="awards-list">
          {awardsData.map((award, index) => (
            <div key={index} className="award-card">
              <h3>{award.title}</h3>
              <p>{award.description}</p>
              <span className="award-prize">{award.prize}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;