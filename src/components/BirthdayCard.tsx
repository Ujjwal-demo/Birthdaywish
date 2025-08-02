import React, { useState } from 'react';
import { Star, Sparkles, Gift, Moon } from 'lucide-react';

const BirthdayCard: React.FC = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex justify-center items-center py-16">
      <div 
        className="relative w-80 h-96 cursor-pointer perspective-1000"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-black shadow-2xl border border-yellow-400/30">
            <div className="flex flex-col items-center justify-center h-full text-white p-8">
              <div className="animate-bounce mb-4">
                <Gift size={64} className="text-yellow-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Happy Birthday!</h3>
              <p className="text-center text-lg opacity-90">Click to open your special message</p>
              <div className="absolute top-4 right-4 animate-spin-slow">
                <Star size={24} className="text-yellow-400" />
              </div>
              <div className="absolute bottom-4 left-4 animate-pulse">
                <Moon size={20} className="text-blue-300" />
              </div>
            </div>
          </div>
          
          {/* Back of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-purple-900 via-indigo-900 to-black shadow-2xl border border-yellow-400/30">
            <div className="flex flex-col items-center justify-center h-full text-white p-6">
              <Star size={48} className="text-yellow-400 animate-pulse mb-4" />
              <h3 className="text-xl font-bold mb-4">To My Beautiful Star</h3>
              <p className="text-center text-sm leading-relaxed">
                On this special day, August 4th, I want you to know how much you mean to me. 
                You light up my universe like the brightest constellation and make every night magical. 
                Happy Birthday, my celestial queen ✨
              </p>
              <div className="mt-4 flex space-x-2">
                <Star size={16} className="text-yellow-400 animate-ping" />
                <Star size={16} className="text-yellow-400 animate-ping" style={{ animationDelay: '0.5s' }} />
                <Star size={16} className="text-yellow-400 animate-ping" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayCard;