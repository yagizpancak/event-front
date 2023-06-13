import React from "react";
import classes from "./EventCard.module.css";
import { useNavigate } from "react-router-dom";
import { getBaseUrl } from "../../../Api";

const EventCard = (props) => {
  const navigate = useNavigate();
  const baseUrl = getBaseUrl();

  const timestamp = new Date(Date.parse(props.date));

  const dateString = props.isClosed ? (
    <span style={{ color: "red" }}>
      CLOSED
      <span style={{ color: "orange" }}>
        {timestamp.toLocaleDateString()} {timestamp.toLocaleTimeString()}
      </span>
    </span>
  ) : (
    <span>
      {timestamp.toLocaleDateString()} {timestamp.toLocaleTimeString()}
    </span>
  );
  return (
    <div className={classes.eventCard}>
      <img
        src={`${baseUrl}/event-management/get-event-image/${props.imgUrl.slice(
          -32
        )}`}
        className={classes.img}
      />
      <div className={classes.info}>
        <span className={classes.date}>{dateString}</span>
        <span className={classes.location}>{props.name}</span>
      </div>
    </div>
  );
};

export default EventCard;
