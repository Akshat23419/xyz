import React, { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import MusicPlayer from '@/components/MusicPlayer';
import TulipDecorations from '@/components/TulipDecorations';
import InteractiveCake from '@/components/InteractiveCake';
import BirthdayCard from '@/components/BirthdayCard';
import AnimatedMessages from '@/components/AnimatedMessages';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Music Player */}
      <MusicPlayer />
      
      {/* Floating Tulip Decorations */}
      <TulipDecorations />
      
      {/* Main Content */}
      <div className="relative z-20 py-8 md:py-12">
        {/* Header Section */}
        <header className="text-center mb-12 md:mb-16 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-romantic text-primary mb-6 animate-fade-in-up drop-shadow-lg">
            🎉 Happiest 26th Birthday 🎉
          </h1>
          <h2 className="text-2xl md:text-4xl font-elegant text-foreground animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            to the Love of My Life
          </h2>
        </header>

        {/* Birthday Message Card */}
        <section className="flex justify-center mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <BirthdayCard />
        </section>

        {/* Interactive Cake Section */}
        <section className="flex justify-center mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
          <InteractiveCake />
        </section>

        {/* Animated Messages Section */}
        <section className="mb-16 md:mb-20 animate-fade-in-up" style={{ animationDelay: '2s' }}>
          <AnimatedMessages />
        </section>

        {/* Footer */}
        <footer className="text-center pb-8 animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
          <div className="card-elegant rounded-2xl p-6 mx-4 max-w-md mx-auto">
            <p className="text-lg font-elegant text-muted-foreground">
              Made with ❤️ by Your Loving Partner
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              to celebrate you
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
