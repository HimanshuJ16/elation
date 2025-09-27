import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading time (adjust as needed)
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for fade animation to complete before calling onLoadingComplete
      setTimeout(() => {
        setIsLoading(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // Match this with CSS transition duration
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="logo-container">
          <div className="elation-logo">
            <img src="/images/full-logo.jpg" alt="Elation" className='w-60'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;