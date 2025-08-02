import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Moon, Crown } from 'lucide-react';

const LoveProposal: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const message = "My Celestial Queen, you are the brightest star in my universe, the moon that guides my nights, and the constellation that makes my world complete. Will you continue to shine with me forever? ✨";

  useEffect(() => {
    if (currentIndex < message.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + message[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, message]);

  return (
    <div className="py-20 bg-gradient-to-br from-black via-indigo-950 to-purple-950 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Star size={Math.random() * 8 + 3} className="text-yellow-400 opacity-80" />
          </div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <Crown size={64} className="mx-auto text-yellow-400 animate-bounce mb-4" />
            <div className="absolute -top-2 -right-2">
              <Star size={20} className="text-yellow-300 animate-spin-slow" />
            </div>
            <div className="absolute -bottom-2 -left-2">
              <Moon size={16} className="text-blue-300 animate-pulse" />
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-8 animate-fade-in">
            For My Celestial Queen
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-3xl p-8 border border-yellow-400/30 shadow-2xl">
          <div className="text-center">
            <div className="mb-8 flex justify-center space-x-4">
              <Star size={32} className="text-yellow-400 animate-pulse" />
              <Sparkles size={32} className="text-purple-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
              <Moon size={32} className="text-blue-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            
            <p className="text-xl text-white leading-relaxed mb-8 min-h-[120px]">
              {displayedText}
              <span className="animate-blink">|</span>
            </p>
            
            <div className="animate-float">
              <Star size={48} className="mx-auto text-yellow-400 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveProposal;