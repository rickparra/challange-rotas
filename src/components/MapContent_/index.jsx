import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import GoogleMapsConfig from "./GoogleMapsConfig.jsx"; // Importe o componente de configuração

export default function MapContent_({ denuncias, mapRef }) {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const defaultCenter = {
    lat: -23.5642820069,
    lng: -46.6525015112,
  };

  const [selectedDenuncia, setSelectedDenuncia] = useState(null);

  useEffect(() => {
    const mapElement = mapRef.current;
    if (!mapElement) return;

    const disableScroll = () => {
      mapElement.style.pointerEvents = 'auto';
    };

    const enableScroll = () => {
      mapElement.style.pointerEvents = 'none';
    };

    mapElement.addEventListener('mousedown', disableScroll);
    mapElement.addEventListener('touchstart', disableScroll);
    mapElement.addEventListener('mouseup', enableScroll);
    mapElement.addEventListener('touchend', enableScroll);

    return () => {
      mapElement.removeEventListener('mousedown', disableScroll);
      mapElement.removeEventListener('touchstart', disableScroll);
      mapElement.removeEventListener('mouseup', enableScroll);
      mapElement.removeEventListener('touchend', enableScroll);
    };
  }, [mapRef]);

  return (
    <GoogleMapsConfig> {/* Use o componente de configuração */}
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
    </GoogleMapsConfig>
  );
}