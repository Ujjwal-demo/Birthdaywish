import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import BirthdayCard from './components/BirthdayCard';
import PhotoGallery from './components/PhotoGallery';
import LoveProposal from './components/LoveProposal';
import BirthdayPopup from './components/BirthdayPopup';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    // Auto-show popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <FloatingHearts />
      
      <HeroSection onOpenPopup={() => setShowPopup(true)} />
      
      <section className="bg-gradient-to-r from-indigo-950 to-purple-950">
        <BirthdayCard />
      </section>
      
      <PhotoGallery />
      
      <LoveProposal />
      
      <footer className="bg-gradient-to-r from-black via-indigo-900 to-purple-900 text-white py-8 text-center border-t border-yellow-400/30">
        <p className="text-lg font-semibold">
          Made with ✨ for the most radiant star in my universe
        </p>
        <p className="text-sm opacity-80 mt-2">
          Happy Birthday, August 4th! You deserve all the magic and wonder! 🌟
        </p>
      </footer>
      
      <BirthdayPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </div>
  );
}

export default App;