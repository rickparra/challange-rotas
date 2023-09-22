import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function MapContent_({ denuncias }) {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
  };

  const defaultCenter = {
    lat: -23.5642820069,
    lng: -46.6525015112,
  };

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
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
