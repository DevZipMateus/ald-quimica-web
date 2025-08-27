
import React from 'react';
import { MapPin } from 'lucide-react';

const ContactMap = () => {
  const address = "Av Dr Antonio de Luna, 1005";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-6 text-white">
        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold mb-2">Nossa Localização</h4>
            <p className="text-orange-100 mb-4">{address}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-4 bg-white text-orange-600 hover:bg-orange-50 rounded-md font-medium transition-colors"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative bg-muted rounded-lg overflow-hidden h-64">
        <iframe
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dO4A0c2Vm9jqmI&q=${encodedAddress}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        ></iframe>
        
        {/* Fallback for when map doesn't load */}
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <p>Mapa não disponível</p>
            <p className="text-sm">Use o botão acima para abrir no Google Maps</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
