import React from 'react';

export const FamilyMemberSection = ({ member, content }) => {
  return (
    <section className={`family-member-section fade-in ${['Lene Helledie','DJ Ole Helledie','DJ Sofia Núñez Helledie'].includes(member.name) ? 'member--highlight' : ''}`}>
      <div className="member-container">
        <div className="member-image-container">
          <div className="member-image-placeholder">
              <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top rounded-lg"
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