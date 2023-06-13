import React, { useState } from "react";
import classes from "./UserCard.module.css";
import Mert from "../../../assets/Mert.jpeg";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { getBaseUrl } from "../../../Api";
import { useNavigate } from "react-router-dom";

const UserCard = (props) => {
  const [status, setStatus] = useState("");
  const baseUrl = getBaseUrl();
  const navigate = useNavigate();

  const rejectHandler = () => {
    fetch(`${baseUrl}/event-registration/reject-request`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organizatorUsername: localStorage.getItem("username"),
        userUsername: props.username,
        eventId: props.uuid,
      }),
    }).then((res) => {
      if (res.status === 200) {
        props.onChange();
      }
      return res.json();
    });
  };

  return (
    <div className={classes.eventCard}>
      <img src={`${baseUrl}${props.imgUrl.slice(7)}`} className={classes.img} />
      <div className={classes.info}>{props.username} </div>
      <div className={classes.btnContainer}>
        {/* <div
          onClick={() => {
            setStatus("accepted");
          }}
          className={classes.checkBtn}
          style={{
            backgroundColor: status === "accepted" ? "#d87c27" : "#80808082",
          }}
        >
          <BsCheckLg size={20} color="white" />
        </div> */}
        <div
          onClick={rejectHandler}
          className={classes.checkBtn}
          style={{
            backgroundColor: status === "declined" ? "#d87c27" : "#80808082",
          }}
        >
          <RxCross2 size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default UserCard;
