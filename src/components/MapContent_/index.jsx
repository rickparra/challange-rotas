import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function MapContainer_() {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 	-23.5642820069,
    lng: -46.6525015112,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDPQAq8xtySd-OEqbD5VPzRru08juMEwdo">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        {/* Adicione marcadores ou outros elementos do mapa aqui, se necessário */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer_;
