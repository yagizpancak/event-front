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
    <div
      className={classes.map}
      style={{ zIndex: 1, height: props.mapOn ? "100vh" : 0 }}
    >
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="mapContainer"
        onClick={(e) => {
          console.log("latitide = ", e.latLng.lat());
          console.log("longitude = ", e.latLng.lng());
          setLat(e.latLng.lat());
          setLng(e.latLng.lng());
          localStorage.setItem("locationX", e.latLng.lat());
          localStorage.setItem("locationY", e.latLng.lng());
        }}
      >
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>

      <button
        className={classes.btn}
        style={{
          bottom: props.mapOn ? "5vh" : 0,
          height: props.mapOn ? "7vh" : "0vh",
        }}
        onClick={() => {
          props.locationHandler(lat, lng);
        }}
      >
        SAVE
      </button>
    </div>
  );
};

export default Mapp;
