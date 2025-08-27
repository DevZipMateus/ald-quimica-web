
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5519988788452', '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button
          onClick={handleWhatsApp}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-transparent hover:scale-110 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Falar no WhatsApp"
        >
          <img 
            src="/lovable-uploads/da61b6e2-e3db-4e7c-8fc3-ac2e51a8bbe7.png" 
            alt="WhatsApp" 
            className="w-full h-full object-contain group-hover:scale-110 transition-transform"
          />
        </button>
        
        {/* Tooltip - Hidden on mobile */}
        <div className="absolute bottom-14 sm:bottom-16 right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
          <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap">
            Falar no WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
          </div>
        </div>
      </div>

      {/* Pulsing Animation */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-none">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-400 rounded-full animate-ping opacity-20"></div>
      </div>
    </>
  );
};

export default WhatsAppFloat;
