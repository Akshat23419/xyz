import React, { useState } from 'react';
import cakeImage from '@/assets/birthday-cake.jpg';

const InteractiveCake: React.FC = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const blowCandles = () => {
    if (candlesBlown) return;
    
    setCandlesBlown(true);
    setShowConfetti(true);
    
    // Play blow sound effect (simulated)
    const audio = new Audio();
    audio.src = "data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEaBkme1/LPeS0FJH7J8NqMOQgXYbfr5Z1NEQ1Mp+TusmQcCENe8IfrqG8RCkEr+WzQcXUeGVu6+NSaLAMzFINi9FmrcT8MHCdBJIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBziH5/LCaCUFLXPH8N2QQAoUXrDp66hVFApCm+LE7mQcCETI8NuJNwgCBQAAA";
    audio.play().catch(() => console.log('Audio play failed'));
    
    // Hide confetti after animation
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const resetCandles = () => {
    setCandlesBlown(false);
    setShowConfetti(false);
  };

  return (
    <div className="relative flex flex-col items-center space-y-6">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                backgroundColor: ['#ff69b4', '#ff1493', '#dda0dd', '#e6e6fa'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Cake Container */}
      <div 
        className="relative cursor-pointer group transition-transform duration-300 hover:scale-105"
        onClick={blowCandles}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-romantic">
          <img 
            src={cakeImage} 
            alt="Beautiful birthday cake with 26 candles"
            className="w-80 h-60 md:w-96 md:h-72 object-cover"
          />
          
          {/* Candle Flames Overlay */}
          {!candlesBlown && (
            <div className="absolute inset-0 flex items-start justify-center pt-4">
              <div className="flex space-x-1">
                {[...Array(26)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-3 bg-gradient-to-t from-orange-400 to-yellow-300 rounded-full animate-candle-flicker"
                    style={{
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Blow Effect */}
          {candlesBlown && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl animate-fade-in-up">💨</div>
            </div>
          )}
        </div>

        {/* Instruction Text */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-sm font-elegant text-muted-foreground text-center">
            {candlesBlown ? "Click to relight candles" : "Click to make a wish and blow out the candles"}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 pt-4">
        {candlesBlown && (
          <button
            onClick={resetCandles}
            className="btn-romantic px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 hover:shadow-romantic"
          >
            🕯️ Relight Candles
          </button>
        )}
      </div>
    </div>
  );
};

export default InteractiveCake;