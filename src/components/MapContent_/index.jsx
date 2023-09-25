import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

export default function MapContent_({ denuncias }) {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const defaultCenter = {
    lat: -23.5642820069,
    lng: -46.6525015112,
  };

  const [selectedDenuncia, setSelectedDenuncia] = useState(null);

  return (
    <LoadScript googleMapsApiKey="AIzaSyDPQAq8xtySd-OEqbD5VPzRru08juMEwdo">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={15}
      >
        {denuncias.map((denuncia, index) => (
          <Marker
            key={index}
            position={{ lat: denuncia.latitude, lng: denuncia.longitude }}
            onClick={() => {
              setSelectedDenuncia(denuncia);
            }}
          />
        ))}

        {selectedDenuncia && (
          <InfoWindow
            position={{
              lat: selectedDenuncia.latitude,
              lng: selectedDenuncia.longitude,
            }}
            onCloseClick={() => {
              setSelectedDenuncia(null);
            }}
          >
            <div>
              <h2>{selectedDenuncia.titulo}</h2>
              <p>{selectedDenuncia.descricao}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
