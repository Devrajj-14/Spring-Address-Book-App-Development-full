import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="white" />
              <path
                d="M8 10h8M8 14h5"
                stroke="#1a73e8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-title">ADDRESS</span>
            <span className="logo-subtitle">BOOK</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
