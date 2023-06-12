import React, { useMemo, useState } from "react";
import classes from "./Mapp.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Mapp = (props) => {
  const [lat, setLat] = useState(1);
  const [lng, setLng] = useState(1);

  const center = useMemo(
    () => ({ lat: 38.450794277983135, lng: 27.11426643281322 }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDkepILu101Ues0TVgkBOB7Ihj6Fk_YprM",
  });
  if (!isLoaded) {
    return <div></div>;
  }
  return (
    <div className={classes.map}>
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="mapContainer"
        onClick={(e) => {
          console.log("latitide = ", e.latLng.lat());
          console.log("longitude = ", e.latLng.lng());
          setLat(e.latLng.lat());
          setLng(e.latLng.lng());
        }}
      >
        <Marker position={center} />
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    </div>
  );
};

export default Mapp;
