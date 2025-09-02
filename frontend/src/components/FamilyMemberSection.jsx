import React from 'react';

export const FamilyMemberSection = ({ member, content }) => {
  return (
    <section className="family-member-section">
      <div className="member-container">
        <div className="member-image-container">
          <div className="member-image-placeholder">
            <span className="image-text">{member.name}</span>
          </div>
        </div>
        <div className="member-content">
          <h2 className="member-name">{member.name}</h2>
          <p className="member-description">{content.description}</p>
          <button className="btn-primary member-btn">
            {content.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};