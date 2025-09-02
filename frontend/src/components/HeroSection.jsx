import React from 'react';

export const HeroSection = ({ content }) => {
  return (
    <section className="hero-section">
      <div className="hero-content animate-slide-up">
        <h1 className="hero-title animate-float">{content.title}</h1>
      </div>
    </section>
  );
};