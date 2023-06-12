import React from "react";
import classes from "./RegEventCard.module.css";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../Api";
import { useState } from "react";

const RegEventCard = (props) => {
  console.log(props);
  const baseUrl = getBaseUrl();

  const navigate = useNavigate();
  return (
    <div
      className={classes.eventCard}
      onClick={() => navigate("/RegEventDetails")}
    >
      <img
        src={`${baseUrl}${props.event.imageUrl.slice(7)}`}
        className={classes.img}
      />
      <div className={classes.info}>
        <span className={classes.date}>{props.event.startDate}</span>
        <span className={classes.location}>{props.event.name}</span>
      </div>
      <span
        className={classes.status}
        style={{
          backgroundColor:
            props.registrationStatus === "ACCEPTED"
              ? "green"
              : props.registrationStatus === "REJECTED"
              ? "red"
              : "gray",
        }}
      ></span>
    </div>
  );
};

export default RegEventCard;
