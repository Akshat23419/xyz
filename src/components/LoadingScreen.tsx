import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const messages = ["My World", "My Everything", "My Love"];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2500);

    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 8000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 loading-overlay flex items-center justify-center opacity-0 transition-opacity duration-500" />
    );
  }

  return (
    <div className="fixed inset-0 z-50 loading-overlay flex items-center justify-center transition-opacity duration-500">
      <div className="text-center space-y-8">
        <div className="relative h-20">
          {messages.map((message, index) => (
            <div
              key={message}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                currentMessage === index
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-4'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-romantic text-primary animate-heart-beat">
                {message}
              </h1>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="w-8 h-8 text-primary animate-pulse">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;