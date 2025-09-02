import React from 'react';

export const LanguageToggle = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="language-toggle">
      <button
        className={`toggle-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => onLanguageChange('en')}
      >
        EN
      </button>
      <button
        className={`toggle-btn ${currentLanguage === 'da' ? 'active' : ''}`}
        onClick={() => onLanguageChange('da')}
      >
        DA
      </button>
    </div>
  );
};