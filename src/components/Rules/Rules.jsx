
import React from 'react';
import './Rules.css';

const rulesPDF = "/hackathon-rules.pdf";


const Rules = () => {
  return (
    <section className="rules-section">
      <div className="rules-container">
        <h2 className="rules-title">Hackathon Rules</h2>
        <p className="rules-text">
          Here are the key rules of the hackathon. For detailed guidelines, please download the full rulebook.
        </p>
        <a href={rulesPDF} download="Hackathon_Rules.pdf" className="rules-download-btn">
  Download Full Rules
</a>
        
        <a href={rulesPDF} download="Hackathon_Rules.pdf" className="rules-download-btn">
          Download Full Rules
        </a>
      </div>
    </section>
  );
};

export default Rules;