import React, { useEffect, useState } from "react";
import classes from "./OrgEventCard.module.css";
import { useNavigate } from "react-router-dom";
import { CgArrowLeftR } from "react-icons/cg";
import { getBaseUrl } from "../../../Api";

const OrgEventCard = (props) => {
  const baseUrl = getBaseUrl();
  const [reqCount, setReqCount] = useState(0);

  const timestamp = new Date(Date.parse(props.startDate));

  useEffect(() => {
    fetch(
      `${baseUrl}/event-registration/registered-users-count/waiting/${props.uuid}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReqCount(data.count);
        console.log(data);
      });
  }, [props]);

  const navigate = useNavigate();
  return (
    <div className={classes.eventCard}>
      <img
        src={props.imgUrl}
        className={classes.img}
        onClick={() => {
          navigate(`/RegisteredUsers/${props.uuid}`);
        }}
      />
      <div
        className={classes.info}
        onClick={() => {
          navigate(`/RegisteredUsers/${props.uuid}`);
        }}
      >
        <span className={classes.date}>
          {timestamp.toLocaleDateString()} {timestamp.toLocaleTimeString()}{" "}
        </span>
        <span className={classes.location}>{props.name}</span>
      </div>
      <div
        className={classes.btnContainer}
        onClick={() => {
          props.openModal(props.uuid);
        }}
      >
        <CgArrowLeftR
          color="#ea9b6b"
          size={20}
          className={classes.status}
        ></CgArrowLeftR>
        <span className={classes.num}>{reqCount}</span>
      </div>
    </div>
  );
};

export default OrgEventCard;
