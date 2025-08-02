import React from 'react';
import { Star, Sparkles, Moon, Zap } from 'lucide-react';

interface HeroSectionProps {
  onOpenPopup: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onOpenPopup }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-indigo-950 to-purple-950 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Sparkles 
              size={Math.random() * 15 + 8} 
              className="text-yellow-400 opacity-70" 
            />
          </div>
        ))}
      </div>
      
      <div className="text-center text-white z-10 px-4">
        <div className="mb-8 animate-bounce">
          <div className="relative inline-block">
            <Star size={80} className="mx-auto text-yellow-400 fill-current mb-4" />
            <div className="absolute -top-2 -right-2 animate-spin-slow">
              <Sparkles size={24} className="text-yellow-300" />
            </div>
            <div className="absolute -bottom-2 -left-2 animate-pulse">
              <Moon size={20} className="text-blue-300" />
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          Happy Birthday
        </h1>
        
        <div className="text-2xl md:text-4xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            My Celestial Queen
          </span>
        </div>
        
        <div className="text-xl md:text-2xl mb-12 opacity-90 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          August 4th, 2024 ✨
        </div>
        
        <div className="flex justify-center space-x-4 mb-8">
          {[...Array(7)].map((_, i) => (
            <Star 
              key={i}
              size={24} 
              className="text-yellow-400 animate-pulse fill-current" 
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
        
        <button
          onClick={onOpenPopup}
          className="bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-500 hover:via-purple-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg animate-bounce-in border border-yellow-400/50"
          style={{ animationDelay: '1.5s' }}
        >
          ✨ Open Your Cosmic Surprise! ✨
        </button>
      </div>
    </div>
  );
};

export default HeroSection;