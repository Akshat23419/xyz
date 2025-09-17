import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Using a romantic birthday instrumental from a free source
  const audioSrc = "https://freefy.app/track/2824236348/raabta-kehte-hain-khuda-ne";

  useEffect(() => {
    // Auto-play when component mounts (with user gesture)
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // Auto-play failed, user needs to interact first
          console.log('Auto-play prevented');
        });
        setIsPlaying(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed top-4 right-4 z-40">
      <Button
        onClick={toggleMusic}
        variant="outline"
        size="sm"
        className="btn-romantic rounded-full w-12 h-12 p-0 hover:scale-110 transition-transform"
      >
        {isPlaying ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </Button>
      
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default MusicPlayer;