import React, { useState } from "react";
import classes from "./UserCard.module.css";
import Mert from "../../../assets/Mert.jpeg";

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
      </div>
    </div>
  );
};

export default UserCard;
