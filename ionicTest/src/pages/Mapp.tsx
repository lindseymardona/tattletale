import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyMapComponent() {
  const [currentPosition, setCurrentPosition] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setCurrentPosition(currentPosition);
        },
        error => {
          console.log(error);
        }
      );
    }
  }, []);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyA19sF-o-7ygY4pkbwBMQCcYVjpC6ipVGA
      "
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition || center}
        zoom={10}
      >
        { currentPosition.lat !== 0 && currentPosition.lng !== 0 && <Marker position={currentPosition} /> }
      </GoogleMap>
    </LoadScript>
  );
}

export default MyMapComponent;
