import React, { useState } from "react";
import classes from "./RegistrationItem.module.css";
import Mert from "../../assets/Mert.jpeg";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { getBaseUrl } from "../../Api";

const RegistrationItem = (props) => {
  const [status, setStatus] = useState("");
  const baseUrl = getBaseUrl();
  const imgUrl = `${baseUrl}${props.imgUrl.slice(7)}`;

  console.log(localStorage.getItem("username"));
  console.log(props.username);
  console.log("AA", props.uuid);
  const acceptHandler = () => {
    fetch(`${baseUrl}/event-registration/accept-request`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        organizatorUsername: localStorage.getItem("username"),
        userUsername: props.username,
        eventId: props.uuid,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          props.onChange();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

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
    })
      .then((res) => {
        if (res.status === 200) {
          props.onChange();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={classes.eventCard}>
      <img src={imgUrl} className={classes.img} />
      <div className={classes.info}>{props.username} </div>
      <div className={classes.btnContainer}>
        <div
          onClick={acceptHandler}
          className={classes.checkBtn}
          style={{
            backgroundColor: status === "accepted" ? "#d87c27" : "#80808082",
          }}
        >
          <BsCheckLg size={20} color="white" />
        </div>
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

export default RegistrationItem;
