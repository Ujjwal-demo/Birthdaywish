import React, { useState, useEffect } from 'react';
import { X, Gift, Cake, Star, Sparkles, Moon } from 'lucide-react';

interface BirthdayPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BirthdayPopup: React.FC<BirthdayPopupProps> = ({ isOpen, onClose }) => {
  const [confetti, setConfetti] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (isOpen) {
      const confettiArray = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setConfetti(confettiArray);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-3xl p-8 max-w-md w-full animate-bounce-in shadow-2xl border border-yellow-400/50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        >
          <X size={24} />
        </button>
        
        {/* Confetti */}
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute animate-fall"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              animationDelay: `${piece.delay}s`,
            }}
          >
            <Star size={8} className="text-yellow-400" />
          </div>
        ))}
        
        <div className="text-center text-white">
          <div className="mb-6 flex justify-center space-x-4">
            <Cake size={48} className="text-yellow-400 animate-bounce" />
            <Gift size={48} className="text-purple-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 animate-pulse">
            ✨ Happy Birthday! ✨
          </h2>
          
          <p className="text-lg mb-4">
            August 4th - Your Special Day!
          </p>
          
          <p className="text-sm mb-6 opacity-90">
            Today is all about celebrating you, my shining star! 
            You deserve all the magic and wonder in the universe! ✨
          </p>
          
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                size={20} 
                className="text-yellow-400 animate-ping fill-current" 
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-yellow-400 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-purple-600 transition-all transform hover:scale-105"
          >
            Thank You! ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default BirthdayPopup;