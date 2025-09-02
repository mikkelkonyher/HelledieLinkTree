import React, { useState } from 'react';
import { LanguageToggle } from '../components/LanguageToggle';
import { HeroSection } from '../components/HeroSection';
import { FamilyMemberSection } from '../components/FamilyMemberSection';
import { siteContent, familyMembers } from '../data/mockData';

export const LandingPage = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
  };

  const content = siteContent[currentLanguage];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="site-header">
        <div className="header-container">
          <LanguageToggle 
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection content={content.header} />

      {/* Family Members Sections */}
      <main className="main-content">
        {familyMembers.map((member, index) => (
          <FamilyMemberSection
            key={member.id}
            member={member}
            content={content.members[index]}
          />
        ))}
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <p className="footer-text">© {new Date().getFullYear()} Helledie Family</p>
        </div>
      </footer>
    </div>
  );
};