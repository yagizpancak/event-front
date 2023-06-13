import React, { useMemo, useState } from "react";
import classes from "./ShowLocation.module.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const ShowLocation = (props) => {
  const { lat, lng } = useParams();
  const center = useMemo(() => ({ lat: +lat, lng: +lng }), []);

  console.log(lat, lng);
  const navigate = useNavigate();

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDkepILu101Ues0TVgkBOB7Ihj6Fk_YprM",
  });
  if (!isLoaded) {
    return <div></div>;
  }
  return (
    <div className={classes.map}>
      <div className={classes.header}>
        <BsArrowLeft
          size={25}
          className={classes.backBtn}
          onClick={() => navigate("/Homee")}
        />
        <span className={classes.pageTitle}>Location of Event</span>
      </div>
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName="mapContainer"
        // onClick={(e) => {}}
      >
        <Marker position={center} />
      </GoogleMap>

      {/* <button
        className={classes.btn}
        style={{
          bottom: props.mapOn ? "10vh" : 0,
          height: props.mapOn ? "7vh" : "0vh",
        }}
        onClick={() => {
          props.locationHandler(lat, lng);
        }}
      >
        SAVE
      </button> */}
    </div>
  );
};

export default ShowLocation;
