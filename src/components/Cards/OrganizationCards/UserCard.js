import React, { useState } from "react";
import classes from "./UserCard.module.css";
import Mert from "../../../assets/Mert.jpeg";
import { BsCheckLg } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

const UserCard = (props) => {
  const [status, setStatus] = useState("");

  return (
    <div className={classes.eventCard}>
      <img src={Mert} className={classes.img} />
      <div className={classes.info}>mertkaracax </div>
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
          onClick={() => {
            setStatus("declined");
          }}
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
