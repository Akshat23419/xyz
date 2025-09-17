import React, { useState, useEffect } from 'react';

const messages = [
  { text: "You are my sunshine", emoji: "☀️" },
  { text: "My reason to smile", emoji: "😊" },
  { text: "Forever and always", emoji: "💖" }
];

const AnimatedMessages: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    messages.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, index]);
      }, (index + 1) * 1500);
    });
  }, []);

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`text-center transition-all duration-1000 ${
            visibleMessages.includes(index)
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="card-romantic rounded-2xl p-6 mx-4">
            <p className="text-xl md:text-2xl font-elegant text-foreground mb-2">
              {message.text}
            </p>
            <div className="text-3xl animate-heart-beat">
              {message.emoji}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedMessages;