import React, { useState } from 'react';
import { Star, Sparkles, Moon, Heart } from 'lucide-react';

const PhotoGallery: React.FC = () => {
  const [hoveredPhoto, setHoveredPhoto] = useState<number | null>(null);

  return (
    <div className="py-20 bg-gradient-to-b from-black via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Beautiful Journey Together
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
          {/* First Enhanced Photo Frame */}
          <div 
            className="relative group perspective-1000"
            onMouseEnter={() => setHoveredPhoto(1)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse blur-xl"></div>
            
            {/* Rotating border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-spin-slow"></div>
            
            {/* Main photo container */}
            <div className={`relative bg-black p-6 rounded-2xl shadow-2xl transform transition-all duration-700 ${
              hoveredPhoto === 1 ? 'scale-110 rotate-3d' : 'hover:scale-105'
            }`}>
              
              {/* Photo area */}
              <div className="w-80 h-96 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden border border-yellow-400/30">
                {/* Parallax background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-purple-500/10 to-blue-500/10 transform group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="text-center text-white z-10">
                  <img 
                    src="https://cdn.corenexis.com/file?7858544168.jpg" 
                    alt="Romantic couple under stars"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Floating particles */}
                {hoveredPhoto === 1 && (
                  <>
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-float-particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      >
                        <Sparkles size={8} className="text-yellow-400" />
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 animate-bounce">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2">
                  <Star size={20} className="text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 animate-pulse">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
                  <Moon size={18} className="text-white" />
                </div>
              </div>
              
              {/* Photo caption */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-white text-xs font-medium">My Universe ✨</p>
              </div>
            </div>
          </div>

          {/* Second Enhanced Photo Frame */}
          <div 
            className="relative group perspective-1000"
            onMouseEnter={() => setHoveredPhoto(2)}
            onMouseLeave={() => setHoveredPhoto(null)}
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full opacity-30 group-hover:opacity-60 transition-all duration-500 animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
            
            {/* Rotating border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
            
            {/* Main photo container */}
            <div className={`relative bg-black p-6 rounded-2xl shadow-2xl transform transition-all duration-700 ${
              hoveredPhoto === 2 ? 'scale-110 -rotate-3d' : 'hover:scale-105'
            }`}>
              
              {/* Photo area */}
              <div className="w-80 h-96 bg-gradient-to-br from-purple-900 via-indigo-900 to-black rounded-xl flex items-center justify-center relative overflow-hidden border border-purple-400/30">
                {/* Parallax background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 transform group-hover:scale-110 transition-transform duration-700"></div>
                
                <div className="text-center text-white z-10">
                  <img 
                    src="https://cdn.corenexis.com/file?5688326168.jpg" 
                    alt="Romantic sunset couple"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Floating particles */}
                {hoveredPhoto === 2 && (
                  <>
                    {[...Array(15)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute animate-float-particle"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      >
                        <Star size={6} className="text-purple-400" />
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -left-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-2">
                  <Sparkles size={20} className="text-white" />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                  <Heart size={18} className="text-white" />
                </div>
              </div>
              
              {/* Photo caption */}
              <div className="absolute bottom-2 left-2 right-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 text-center">
                <p className="text-white text-xs font-medium">Forever Together 💫</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive constellation */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="relative">
                <Star 
                  size={24} 
                  className="text-yellow-400 animate-pulse fill-current" 
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
                {i < 4 && (
                  <div className="absolute top-3 left-6 w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-white mt-4 text-lg font-medium">Our Love Written in the Stars</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
