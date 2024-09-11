import React, { useRef, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 28.6139, // Example coordinates
  lng: 78.0577
};

function MyMap() {
  const mapRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (mapRef.current) {
        google.maps.event.trigger(mapRef.current, 'resize');
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB8dxAXt1GR7R78D6rN-x04KfmZ2uGj2O0"
      id="script-loader"
      version="weekly"
    >
      <div ref={containerRef} style={containerStyle}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={map => mapRef.current = map} // Store map instance
        >
          {/* Additional components or markers */}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default MyMap;


// googleMapsApiKey="AIzaSyB8dxAXt1GR7R78D6rN-x04KfmZ2uGj2O0" 