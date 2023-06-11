import React from "react";
import classes from "./RegEventCard.module.css";
import { useNavigate } from "react-router-dom";

const RegEventCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className={classes.eventCard}
      onClick={() => navigate("/RegEventDetails")}
    >
      <img src={props.image} className={classes.img} />
      <div className={classes.info}>
        <span className={classes.date}>{props.date}</span>
        <span className={classes.location}>{props.name}</span>
      </div>
      <span className={classes.status}></span>
    </div>
  );
};

export default RegEventCard;
