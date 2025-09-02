import React from 'react';

export const HeroSection = ({ content }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">{content.title}</h1>
      </div>
    </section>
  );
};