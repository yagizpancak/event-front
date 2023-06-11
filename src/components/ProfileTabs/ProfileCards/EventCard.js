import React from "react";
import classes from "./EventCard.module.css";
import { useNavigate } from "react-router-dom";

const EventCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes.eventCard}
      onClick={() => navigate("/EventDetails")}
    >
      <img src={props.image} className={classes.img} />
      <div className={classes.info}>
        <span className={classes.date}>{props.date}</span>
        <span className={classes.location}>{props.name}</span>
      </div>
    </div>
  );
};

export default EventCard;
