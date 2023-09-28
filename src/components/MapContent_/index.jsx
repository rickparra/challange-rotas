import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer, InfoWindow  } from "@react-google-maps/api";
import GoogleMapsConfig from "./GoogleMapsConfig.jsx";
import "./MapOverlay.css";

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
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [directions, setDirections] = useState(null);

  function buscarDirecoes() {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin,
        destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result);
        } else {
          console.error(`Erro ao buscar direções: ${status}`);
        }
      }
    );
  }

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
    <GoogleMapsConfig>


      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={15}
      >

        <div className="map-overlay">
          <div className="input-container">
            <input
              className="input-field"
              type="text"
              placeholder="Local atual"
              onChange={(e) => setOrigin(e.target.value)}
            />
            <input
              className="input-field"
              type="text"
              placeholder="Local final"
              onChange={(e) => setDestination(e.target.value)}
            />

<button className="button" onClick={buscarDirecoes}>
            Traçar Rota
          </button>
          </div>
          
        </div>

        {directions && (
          <DirectionsRenderer directions={directions} />
        )}

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
