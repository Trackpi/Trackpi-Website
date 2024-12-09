// created By Abhishek
import React from 'react';
import './LogoLoader.css'; 

const LogoLoader = () => {
  return (
    <div className="logo-loader">
      <div className="logo-container">
        <img src="src\images\trackpi_logo.png" alt="Loading..." className="animated-logo" />
      </div>
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
      <p className="loading-text">Getting things ready...</p>
    </div>
  );
};

export default LogoLoader;
