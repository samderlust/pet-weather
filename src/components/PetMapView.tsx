import React from 'react';
import GoogleMapReact from 'google-map-react';

export const PetMapView = () => {
  return (
    <div style={{ height: 800, width: '100%' }}>
      <GoogleMapReact
        defaultCenter={{
          lat: 0,
          lng: 0
        }}
        defaultZoom={-1}
      ></GoogleMapReact>
    </div>
  );
};
