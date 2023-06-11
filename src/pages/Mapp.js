import React, { useMemo } from "react";
import classes from "./Mapp.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Mapp = (props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) {
    return <div></div>;
  }
  return (
    <div className={classes.map}>
      <Map />
    </div>
  );
};

function Map() {
  const center = useMemo(() => ({ lat: 49, lng: -80 }), []);
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
      <Marker position={center} />
    </GoogleMap>
  );
}

export default Mapp;
