import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const GoogleMapsConfig = ({ children }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDPQAq8xtySd-OEqbD5VPzRru08juMEwdo">
      {children}
    </LoadScript>
  );
};

export default GoogleMapsConfig;
