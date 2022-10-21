import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { G_MAP_API_KEY } from "../ENV/ApiKeys.js";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: G_MAP_API_KEY,
  });
  return (
    <div>
      {isLoaded ? (
        <div className="map">
          <ShowMap param={22.265} param2={46.621} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Map;

const ShowMap = ({ param, param2 }) => {
  return (
    <GoogleMap
      zoom={9}
      center={{ lat: param, lng: param2 }}
      mapContainerClassName="map"
      disableDefaultUI
    >
      <Marker position={{ lat: param, lng: param2 }} />
    </GoogleMap>
  );
};
