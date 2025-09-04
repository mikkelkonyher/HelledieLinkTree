import React from 'react';

export const FamilyMemberSection = ({ member, content }) => {
  return (
    <section className="family-member-section fade-in">
      <div className="member-container">
        <div className="member-image-container">
          <div className="member-image-placeholder">
            <img 
              src={`https://picsum.photos/400/400?random=${member.id}`}
              alt={member.name}
              className="placeholder-image"
            />
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