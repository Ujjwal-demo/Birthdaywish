import React from 'react';
import { Star, Sparkles, Moon } from 'lucide-react';

const FloatingStars: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => {
        const icons = [Star, Sparkles, Moon];
        const Icon = icons[i % 3];
        return (
        <Icon
          key={i}
          className={`absolute text-yellow-200 opacity-70 animate-float-${i % 3}`}
          size={Math.random() * 25 + 10}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        />
      )})}
    </div>
  );
};


export default FloatingStars