import React, { useEffect, useState } from "react";
import classes from "./UserCard.module.css";
import Mert from "../../../assets/Mert.jpeg";
import addPhoto from "../../../assets/addPhoto.png";
import user from "../../../assets/user.png";
import { getBaseUrl } from "../../../Api";
import { useNavigate } from "react-router-dom";

const UserCard = (props) => {
  const [status, setStatus] = useState("");
  const [imgSrc, setImgSrc] = useState(user);
  const navigate = useNavigate();

  // console.log(props.imgUrl);
  const baseUrl = getBaseUrl();

  useEffect(() => {
    fetch(`${baseUrl}/users/profile-img/${props.username}`).then((res) => {
      if (res.status !== 500) {
        setImgSrc(`${baseUrl}/users/profile-img/${props.username}`);
      }
    });
  }, []);

  return (
    <div
      className={classes.userCard}
      onClick={() => {
        navigate(`/OtherUserPage/${props.username}`);
      }}
    >
      <img src={imgSrc} alt="x" className={classes.img} />
      <div className={classes.info}>{props.username}</div>
      <div className={classes.btnContainer}></div>
    </div>
  );
};

export default UserCard;
