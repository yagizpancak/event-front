import React from "react";
import classes from "./EventCard.module.css";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../Api";

const EventCard = (props) => {
  console.log("aa", props.imageUrl);
  const navigate = useNavigate();
  const baseUrl = getBaseUrl();
  const slicedBaseUrl = baseUrl.slice(0, -7);
  const event_uuid = props.imageUrl.substring(props.imageUrl.length - 32);
  console.log("uu", event_uuid);
  console.log(
    `URL => ${slicedBaseUrl}api/v1/event-management/get-event-image/${event_uuid}`
  );
  return (
    <div
      className={classes.eventCard}
      onClick={() => navigate("/EventDetails")}
    >
      <img
        src={`${slicedBaseUrl}/api/v1/event-management/get-event-image/${event_uuid}`}
        className={classes.img}
      />
      <div className={classes.info}>
        <span className={classes.date}>{props.date}</span>
        <span className={classes.location}>{props.name}</span>
      </div>
    </div>
  );
};

export default EventCard;
