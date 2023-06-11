import React from "react";
import classes from "./OrgEventCard.module.css";
import { useNavigate } from "react-router-dom";
import { CgArrowLeftR } from "react-icons/cg";

const OrgEventCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.eventCard}>
      <img
        src={props.image}
        className={classes.img}
        onClick={() => {
          navigate("/Organization");
        }}
      />
      <div
        className={classes.info}
        onClick={() => {
          navigate("/Organization");
        }}
      >
        <span className={classes.date}>{props.date}</span>
        <span className={classes.location}>{props.name}</span>
      </div>
      <div className={classes.btnContainer} onClick={props.openModal}>
        <CgArrowLeftR
          color="#ea9b6b"
          size={20}
          className={classes.status}
        ></CgArrowLeftR>
        <span className={classes.num}>3</span>
      </div>
    </div>
  );
};

export default OrgEventCard;
