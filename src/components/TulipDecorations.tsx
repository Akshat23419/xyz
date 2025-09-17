import React from 'react';
import tulipImage from '@/assets/white-tulip.png';

const TulipDecorations: React.FC = () => {
  return (
    <>
      {/* Top Left Tulips */}
      <div className="fixed top-8 left-8 z-10 animate-float opacity-70">
        <img 
          src={tulipImage} 
          alt="White tulip decoration"
          className="w-16 h-16 md:w-20 md:h-20"
          style={{ animationDelay: '0s' }}
        />
      </div>
      
      {/* Top Right Tulips */}
      <div className="fixed top-16 right-16 z-10 animate-float opacity-60">
        <img 
          src={tulipImage} 
          alt="White tulip decoration"
          className="w-12 h-12 md:w-16 md:h-16 transform scale-x-[-1]"
          style={{ animationDelay: '1s' }}
        />
      </div>
      
      {/* Bottom Left Tulips */}
      <div className="fixed bottom-12 left-12 z-10 animate-float opacity-50">
        <img 
          src={tulipImage} 
          alt="White tulip decoration"
          className="w-14 h-14 md:w-18 md:h-18 transform rotate-12"
          style={{ animationDelay: '2s' }}
        />
      </div>
      
      {/* Bottom Right Tulips */}
      <div className="fixed bottom-8 right-8 z-10 animate-float opacity-40">
        <img 
          src={tulipImage} 
          alt="White tulip decoration"
          className="w-10 h-10 md:w-14 md:h-14 transform rotate-[-15deg] scale-x-[-1]"
          style={{ animationDelay: '3s' }}
        />
      </div>
      
      {/* Additional floating tulips */}
      <div className="fixed top-1/3 left-4 z-10 animate-float opacity-30">
        <img 
          src={tulipImage} 
          alt="White tulip decoration"
          className="w-8 h-8 md:w-12 md:h-12 transform rotate-45"
          style={{ animationDelay: '4s' }}
        />
      </div>
      
      <div className="fixed top-2/3 right-4 z-10 animate-float opacity-35">
        <img 
          src={tulipImage} 
          alt="White tulip decoration"
          className="w-10 h-10 md:w-14 md:h-14 transform rotate-[-30deg]"
          style={{ animationDelay: '5s' }}
        />
      </div>
    </>
  );
};

export default TulipDecorations;